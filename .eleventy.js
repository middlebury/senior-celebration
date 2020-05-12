const yaml = require('js-yaml');

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

  return {
    // site will live at middlebury.edu/senior-celebration
    pathPrefix: process.env.CI && '/senior-celebration',
    dir: {
      input: 'src'
    }
  };
};
