import chalk from 'chalk';

import getHomepage from './directus/homepage.js';

console.log('');
console.log(chalk.green('IMPORTANTO CONTEUDO DO DIRECTUS...'));
console.log('');
console.log(chalk.green('[HOME]'));

getHomepage();
