import fs from "fs";
import rimraf from "rimraf";
import common from "./common.js";

const objectContructor = async (dir, fs) => {
  let pessoa = await common.getDirectusData("pessoa");
  
  pessoa.forEach(async (item, num) => {
    let i = { ...item };
    i.slug = common.slugify(item.nome);
    i.picture = await common.getImage(item.picture.id);

    fs.writeFile(
      `${dir}/${i.slug}.json`,
      JSON.stringify(i),
      function (err) {
        if (err) console.log("error", err);
      }
    );
    console.log("ESCREVENDO AUTOR: ", i.slug + ".json");
  });
}

const getAutores = async () => {
  
  const dir = "./content/autores";
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

export default getAutores
