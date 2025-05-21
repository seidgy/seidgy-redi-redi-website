export default [
  {
    code: 'pt',
    name: 'Português',
  },
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'es',
    name: 'Español',
  },
].map(lang => ({ file: lang.code + '.json', ...lang }))