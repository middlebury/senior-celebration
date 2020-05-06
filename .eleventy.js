const sass = require('eleventy-plugin-sass');

module.exports = function (config) {
  // copy images dir to _site
  config.addPassthroughCopy('img');

  // add sass support
  config.addPlugin(sass);

  return {
    // site will live at middlebury.edu/senior-celebration
    pathPrefix: '/senior-celebration',
    dir: {
      input: 'src'
    }
  };
};
