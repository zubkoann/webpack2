const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = {
  webpackConfig,
  template: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
      }, {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
        crossorigin: 'anonymous',
      }],
    },
  },
  require: [
    path.join(__dirname, 'src/assets/styles/_resources.scss'),
  ],
  skipComponentsWithoutExample: true,
  sections: [{
    name: 'Components',
    sections: [{
      name: 'UIKit',
      components: 'src/components/UI/**/index.jsx',
    }, {
      name: 'HOCs',
      components: 'src/hocs/**/index.{js,jsx}',
    }],
  }],
};
