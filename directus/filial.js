import fs from "fs";
import rimraf from "rimraf";
import common from "./common.js";

let files = await common.getDirectusAssets();

const objectContructor = async (dir, fs) => {
  let videos = await common.getDirectusData("filial");
  
  videos.forEach(async (item, num) => {
    let i = { ...item };
    i.slug = common.slugify(item.nome);
    await Promise.all(i.imagens.map(async (imagem, num) => {
      const imagemUrl = await common.getImage(imagem.directus_files_id);
      i.imagens[num].url = imagemUrl;
    }));
    fs.writeFile(
      `${dir}/${i.slug}.json`,
      JSON.stringify(i),
      function (err) {
        if (err) console.log("error", err);
      }
    );
    console.log("ESCREVENDO FILIAL: ", i.slug + ".json");
  });
}

const getFiliais = async () => {
  
  const dir = "./content/filiais";
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


export default getFiliais