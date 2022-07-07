const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
}
