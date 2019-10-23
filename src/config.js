// re-export env variables (injected during build by dotenv-webpack)
// so that process.env.XXXX is not referenced everywhere in the code base
// + handle default values
const appConfig = {
  lang: process.env.APP_LANG || 'en',
};

export default appConfig;