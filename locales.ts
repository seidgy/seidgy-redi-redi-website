export default [
  {
    code: 'pt',
    name: 'Português (BR)',
  },
  {
    code: 'en',
    name: 'English (US)',
  },
  {
    code: 'es',
    name: 'Español (ES)',
  },
].map(lang => ({ file: lang.code + '.json', ...lang }))