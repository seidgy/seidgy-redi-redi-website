import chalk from 'chalk';

import getTexts from './directus/freeText.js';

console.log('');
console.log(chalk.green('IMPORTANTO CONTEUDO DO DIRECTUS...'));
console.log('');
console.log(chalk.green('[TEXTOS]'));

getTexts();
