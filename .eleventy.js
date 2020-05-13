const yaml = require('js-yaml');
const htmlmin = require('html-minifier');

const minHtml = (content, outputPath) => {
  if (outputPath.endsWith('.html')) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });
    return minified;
  }
  return content;
};

module.exports = function (config) {
  // copy images dir to _site
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/js');

  config.addLayoutAlias('page', 'page.html');

  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  config.setBrowserSyncConfig({
    open: true
  });

  if (process.env.NODE_ENV == 'production') {
    config.addTransform('htmlmin', minHtml);
  }

  return {
    // site will live at middlebury.edu/senior-celebration
    pathPrefix: process.env.CI && '/senior-celebration',
    dir: {
      input: 'src'
    }
  };
};
