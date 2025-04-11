import dotenv from 'dotenv';
import { createDirectus, staticToken, rest, readItems, readFiles, readFile  } from '@directus/sdk';

dotenv.config();

const CONTENT_STATUS = process.env.DEV ? JSON.parse(process.env.DEV) : ["published"];
const directus = createDirectus(process.env.DIRECTUS_BASE_URL)
  .with(staticToken(process.env.DIRECTUS_TOKEN))
  .with(rest());

// get content from directus
const getDirectusData = async (collectionName, junctionFields=undefined) => {
  const content = await directus.request(readItems(collectionName, {
    fields: junctionFields ? [`*.*`, ...junctionFields] : ['*.*'],
    limit: -1,
    filter: {
      "status": {
        "_in" : CONTENT_STATUS
      }
    }
  }));

  return content;
}

const getDirectusAssets = async () => {
  const content = await directus.request(readFiles({
    limit: -1
	}));

  return content;
}

const getFileSlug = (files, fileId) => {
  let file = files.find(file => file.id === fileId);
  let slug = `${ fileId }.${file.filename_download.split('.').pop()}`;
  return slug;
}

const getDirectusAsset = async (id) => {
  const content = await directus.request(readFile(id, {
    fields: ['*'],
  }));

  return content;
}

// getImageUrl
const getImage = async (imageId) => {
  //return `${ process.env.DIRECTUS_IMAGE_BASE_URL }/assets/${ imageId }`;
  const image = await getDirectusAsset(imageId);
  
  return `/images/directus/${ image.filename_disk }`;
}

const replaceImageUrls = async (text) => {
  // Define regular expression to match the URLs
  const urlRegex = /(?:https?:\/\/143\.198\.106\.178\/(?:\/)?assets\/([a-zA-Z0-9_-]+))/g;
  
  // Find all matches of the URL regex in the text
  const matches = text.matchAll(urlRegex);
  
  // Iterate through matches and replace each URL with the result of getImage
  for (const match of matches) {
    const imageUrl = match[0];
    const imageId = match[1];
    // Call getImage function to get the replacement URL
    const replacementUrl = await getImage(imageId);
    // Replace the URL in the text with the replacement URL
    text = text.replace(imageUrl, replacementUrl);
  }
  
  return text;
};

// file download example
{/* <a href="https://your-directus.com/assets/<file-id>?download" target="_blank" download="Your File.pdf">Download</a> */}

// slugify
const slugify = (term) => {
  return term
    .toString()
    .toLowerCase()
    .replace(/[àÀáÁâÂãäÄÅåª]+/g, "a") // Special Characters #1
    .replace(/[èÈéÉêÊëË]+/g, "e") // Special Characters #2
    .replace(/[ìÌíÍîÎïÏ]+/g, "i") // Special Characters #3
    .replace(/[òÒóÓôÔõÕöÖº]+/g, "o") // Special Characters #4
    .replace(/[ùÙúÚûÛüÜ]+/g, "u") // Special Characters #5
    .replace(/[ýÝÿŸ]+/g, "y") // Special Characters #6
    .replace(/[ñÑ]+/g, "n") // Special Characters #7
    .replace(/[çÇ]+/g, "c") // Special Characters #8
    .replace(/[ß]+/g, "ss") // Special Characters #9
    .replace(/[Ææ]+/g, "ae") // Special Characters #10
    .replace(/[Øøœ]+/g, "oe") // Special Characters #11
    .replace(/[%]+/g, "pct") // Special Characters #12
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

const formatDate = (date) => {
  if (!date) return '';

  return new Date(date).toLocaleDateString(
    'pt-br',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );
}

const formatTime = (date) => {
  if (!date) return '';

  return new Date(date).toLocaleTimeString(
    'en',
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );
}

export default {
  getDirectusData,
  getImage,
  slugify,
  formatDate,
  formatTime,
  getDirectusAssets,
  replaceImageUrls,
  getFileSlug
};
