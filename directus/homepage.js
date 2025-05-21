import fs from "fs";
import {rimraf} from "rimraf";
import common from "./common.js";

const organizeTextsByLanguage = (texts) => {
  const organizedTexts = {
    'pt-BR': {},
    'en-US': {},
    'es-ES': {}
  };

  texts.forEach(text => {
    const langCode = text.languages_code.code;
    const alias = text.Free_Text_id.alias;
    const portugueseText = text.Free_Text_id.Text;
    
    // Adiciona o texto em português
    organizedTexts['pt-BR'][alias] = portugueseText;
    
    // Adiciona a tradução para o idioma correspondente
    if (!organizedTexts[langCode]) {
      organizedTexts[langCode] = {};
    }
    organizedTexts[langCode][alias] = text.Text;
  });

  return organizedTexts;
};

const objectContructor = async (dir, fs) => {
  let page = await common.getDirectusData("homepage");
  let texts = await common.getDirectusData("Free_Text");
  let translations = await common.getDirectusData("Free_Text_translations");
  
  // Organizar textos por idioma
  const organizedTexts = organizeTextsByLanguage(translations);
  
  // Criar objeto base da página
  let basePage = { ...page };
  basePage.slug = 'homepage';
  basePage.textObj = organizedTexts['pt-BR'];

  // Criar diretórios de idiomas
  const languages = ['en', 'es'];
  languages.forEach(lang => {
    const langDir = `${dir}/${lang}`;
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }
  });

  // Salvar arquivo na raiz (pt-BR)
  fs.writeFile(
    `${dir}/${basePage.slug}.json`,
    JSON.stringify(basePage),
    function (err) {
      if (err) console.log("error", err);
    }
  );

  // Salvar arquivos nas pastas de idiomas
  languages.forEach(lang => {
    const langCode = lang === 'en' ? 'en-US' : 'es-ES';
    const langPage = { ...basePage };
    langPage.textObj = organizedTexts[langCode];
    
    fs.writeFile(
      `${dir}/${lang}/${basePage.slug}.json`,
      JSON.stringify(langPage),
      function (err) {
        if (err) console.log("error", err);
      }
    );
  });

  console.log("ESCREVENDO PÁGINAS: ", basePage.slug + ".json");
}

const getHomepage = async () => {
  const dir = "./content/paginas-fixas";
  
  try {
    // Remover diretório se existir
    if (fs.existsSync(dir)) {
      await rimraf(dir);
    }
    
    // Criar diretório content se não existir
    if (!fs.existsSync("./content")) {
      fs.mkdirSync("./content");
    }
    
    // Criar diretório eventos
    fs.mkdirSync(dir);
    
    // Verificar permissões e construir objetos
    fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
      if (err) {
        console.log(err);
      } else {
        await objectContructor(dir, fs);
      }
    });
    
  } catch (error) {
    console.error("Erro ao processar página:", error);
  }
}

export default getHomepage
