import fs from "fs";
import {rimraf} from "rimraf";
import common from "./common.js";

const organizeTextsByLanguage = (texts, pageTexts) => {
  const organizedTexts = {
    'pt-BR': {},
    'en-US': {},
    'es-ES': {}
  };

  // Filtra apenas os textos que estão vinculados à página
  const filteredTexts = texts.filter(text => 
    pageTexts.some(pageText => pageText.Free_Text_id === text.Free_Text_id.id)
  );

  filteredTexts.forEach(text => {
    const langCode = text.languages_code.code;
    const alias = text.Free_Text_id.alias;
    const portugueseText = text.Free_Text_id.Text;
    
    organizedTexts['pt-BR'][alias] = portugueseText;
    
    if (!organizedTexts[langCode]) {
      organizedTexts[langCode] = {};
    }
    organizedTexts[langCode][alias] = text.Text;
  });

  return organizedTexts;
};

const organizeImagesByLanguage = async (images, imageTranslations, pageImages) => {
  const organizedImages = {
    'pt-BR': {},
    'en-US': {},
    'es-ES': {}
  };

  // Filtra apenas as imagens que estão vinculadas à página
  const filteredImages = images.filter(image => 
    pageImages.some(pageImage => pageImage.image_id === image.id)
  );

  // Primeiro, organizamos as imagens em português
  for (const image of filteredImages) {
    const alias = image.alias;
    organizedImages['pt-BR'][alias] = {
      url: await common.getImage(image.imagem.id),
      alt: image.alt
    };
  }

  // Depois, adicionamos as traduções apenas para as imagens filtradas
  const filteredTranslations = imageTranslations.filter(translation => 
    filteredImages.some(image => image.id === translation.image_id.id)
  );

  for (const translation of filteredTranslations) {
    const langCode = translation.languages_code.code;
    const alias = translation.image_id.alias;
    
    if (!organizedImages[langCode]) {
      organizedImages[langCode] = {};
    }
    
    organizedImages[langCode][alias] = {
      url: await common.getImage(translation.imagem.id),
      alt: translation.alt
    };
  }

  return organizedImages;
};

const objectContructor = async (dir, fs) => {
  let page = await common.getDirectusData("homepage");
  let texts = await common.getDirectusData("Free_Text");
  let images = await common.getDirectusData("image");
  let textTranslations = await common.getDirectusData("Free_Text_translations");
  let imageTranslations = await common.getDirectusData("image_translations");

  
  // Organizar textos e imagens por idioma, passando os IDs vinculados à página
  const organizedTexts = organizeTextsByLanguage(textTranslations, page.Textos);
  const organizedImages = await organizeImagesByLanguage(images, imageTranslations, page.imagens);
  
  // Criar objeto base da página
  let basePage = { ...page };
  basePage.slug = 'homepage';
  basePage.textObj = organizedTexts['pt-BR'];
  basePage.imageObj = organizedImages['pt-BR'];

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
    langPage.imageObj = organizedImages[langCode];
    
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
