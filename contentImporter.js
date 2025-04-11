import chalk from 'chalk';

import getPublicacoes from './directus/publicacao.js';

console.log('');
console.log(chalk.green('IMPORTANTO CONTEUDO DO DIRECTUS...'));
console.log('');
console.log(chalk.green('[PUBLICACOES]'));

getPublicacoes();
