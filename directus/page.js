import fs from "fs";
import {rimraf} from "rimraf";
import common from "./common.js";
import { url } from "inspector";


const objectContructor = async (dir, fs) => {
  let pages = await common.getDirectusData("Page");
  let logos = await common.getDirectusData("logo");
  let icones = await common.getDirectusData("icone");
  let contentSections = await common.getDirectusData("content_section");
  

  let logosArray = [];
  let iconesArray = [];
  let sectionsArray = [];
  // Criar objeto base da página
  pages.forEach(async (page) => {
    let basePage = { ...page };
    basePage.slug = common.slugify(basePage.alias);
    basePage.imagem_hero = await common.getImage(basePage.imagem_hero.imagem);
    basePage.imagem_OG = await common.getImage(basePage.imagem_OG.id);
    await basePage.logos.forEach(async (logo) => {
      const foundLogo = logos.find(l => l.id === logo.logo_id);
      const logoObj = {
        imagem: await common.getImage(foundLogo.imagem?foundLogo.imagem.imagem:''),
        url: foundLogo.url,
        alt: foundLogo.alias
      }
      logosArray.push(logoObj)
    });
    basePage.logos = logosArray;
    await basePage.icones.forEach(async (icone) => {
      const foundIcone = icones.find(i => i.id === icone.icone_id);
      const iconeObj = {
        imagem: await common.getImage(foundIcone.icone.id),
        alt: foundIcone.texto
      }
      iconesArray.push(iconeObj)
    });
    basePage.icones = iconesArray;
    
    // Adicionar logs para debug
    console.log("Page data:", page);
    console.log("Content Sections:", contentSections);
    
    // Atribuir as seções da página antes de processá-las
    basePage.secoes = page.secoes || [];
    
    for (const secao of basePage.secoes) {
      const foundSection = contentSections.find(i => i.id === secao.content_section_id);
      if (!foundSection) {
        console.log("Seção não encontrada:", secao.content_section_id);
        continue;
      }
      let sectionIconsArray = []
      if(foundSection.imagem) {
        foundSection.imagem = await common.getImage(foundSection.imagem.imagem)
      }
      if(foundSection.imagem_fundo) {
        foundSection.imagem_fundo = await common.getImage(foundSection.imagem_fundo.id)
      }
      for (const icone of foundSection.icones) {
        const foundIcone = icones.find(i => i.id === icone.icone_id);
        const iconeObj = {
          imagem: await common.getImage(foundIcone.icone.id),
          alt: foundIcone.texto
        }
        sectionIconsArray.push(iconeObj)
      }
      foundSection.icones = sectionIconsArray;
      sectionsArray.push(foundSection)
    }
    basePage.secoes = sectionsArray;
    //console.log(basePage);


    // Salvar arquivo na raiz (pt-BR)
    fs.writeFile(
      `${dir}/${basePage.slug}.json`,
      JSON.stringify(basePage),
      function (err) {
        if (err) console.log("error", err);
      }
    );


    console.log("ESCREVENDO LPs: ", basePage.slug + ".json");
  });
}

const getPages = async () => {
  const dir = "./content/lps";
  
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

export default getPages
