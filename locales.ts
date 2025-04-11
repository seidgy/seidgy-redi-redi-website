export default [
  {
    code: 'pt-br',
    name: 'Português',
  },
  {
    code: 'en',
    name: 'English',
  },
].map(lang => ({ file: lang.code + '.json', ...lang }))