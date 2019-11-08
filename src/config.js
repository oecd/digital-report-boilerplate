// re-export env variables (injected during build by dotenv-webpack)
// so that process.env.XXXX is not referenced everywhere in the code base
// + handle default values
const appConfig = {
  lang: process.env.APP_LANG || 'en',
  assetPath: process.env.ASSET_PATH || '/',
  urls: {
    en: process.env.URL_en,
    fr: process.env.URL_fr,
    es: process.env.URL_es
  },
  nodeEnv: process.env.NODE_ENV,
};

module.exports = appConfig;
