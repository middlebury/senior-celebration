const sass = require('eleventy-plugin-sass');
const yaml = require('js-yaml');

module.exports = function (config) {
  // copy images dir to _site
  config.addPassthroughCopy('img');

  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  // add sass support
  // config.addPlugin(sass);

  config.setBrowserSyncConfig({
    open: true
  });

  return {
    // site will live at middlebury.edu/senior-celebration
    pathPrefix: '/senior-celebration',
    dir: {
      input: 'src'
    }
  };
};
