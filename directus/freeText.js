import fs from "fs";
import { rimraf } from "rimraf";
import common from "./common.js";


const objectContructor = async (dir, fs) => {
  let data = await common.getDirectusData("Free_Text");
  
  data.forEach(async (item, num) => {
    let i = { ...item };
    i.slug = common.slugify(item.text);
    fs.writeFile(
      `${dir}/${i.slug}.json`,
      JSON.stringify(i),
      function (err) {
        if (err) console.log("error", err);
      }
    );
    console.log("ESCREVENDO FREE TEXT: ", i.slug + ".json");
  });
}

const getTexts = async () => {
  
  const dir = "./content/texts";
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


export default getTexts