/* eslint-disable global-require */

const localeData = [
  ...require('react-intl/locale-data/en'),
  ...require('react-intl/locale-data/es'),
]

module.exports = {
  localeData,
  languages: [
    { value: 'en', text: 'English' },
    { value: 'es', text: 'Spanish' },
  ],
}
