import fs from "fs";
import rimraf from "rimraf";
import common from "./common.js";
import { DOMParser } from 'xmldom';

let files = await common.getDirectusAssets();

const objectContructor = async (dir, fs) => {
  let publicacao = await common.getDirectusData("publicacao");
  let categorias = await common.getDirectusData("categoria");
  
  publicacao.forEach(async (item, num) => {
    let i = { ...item };
    i.slug = common.slugify(item.titulo);
    i.imagem = await common.getImage(item.imagem.id);
    i.type = 'noticias'
    i.categoriasObj = []
    item.categorias.forEach(async (categoria, num) => {
      const cat = categorias.find(c => c.id === categoria.categoria_id)
      cat.slug = common.slugify(cat.titulo)
      i.categoriasObj.push(cat);
    })
    if(i.autor){
      i.autor.slug = common.slugify(i.autor.nome)
      i.autorSlug = i.autor.slug
    }
    let firstParagraph = '';
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(i.conteudo, 'text/html');
    let paragraphs = htmlDoc.getElementsByTagName('p');
    if(paragraphs.length <= 0) {
      paragraphs = htmlDoc.getElementsByTagName('span');
    }
    if (paragraphs.length > 0) {
      firstParagraph = paragraphs[0].textContent.trim();
    }
    i.excerpt = firstParagraph;
    common.replaceImageUrls(i.conteudo).then(result => {
      i.conteudo = result;
      fs.writeFile(
        `${dir}/${i.slug}.json`,
        JSON.stringify(i),
        function (err) {
          if (err) console.log("error", err);
        }
      );
      console.log("ESCREVENDO PUBLICACAO: ", i.slug + ".json");
    }).catch(err => {
      console.error(err);
    });
  });
}

const getPublicacoes = async () => {
  
  const dir = "./content/publicacoes";
  if (fs.existsSync(dir)) {
    rimraf(dir, async () => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
        if (err) {
          console.log(err);
        } else {
          objectContructor(dir, fs);
        }
      });
    });
  } else {
    if (!fs.existsSync("./content")) {
      fs.mkdirSync("./content");
    }
    fs.mkdirSync(dir);
    fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
      if (err) {
        console.log(err);
      } else {
        objectContructor(dir, fs);
      }
    });
  }
}


export default getPublicacoes
