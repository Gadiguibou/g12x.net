const CleanCSS = require("clean-css");
const MarkdownIt = require("markdown-it");
const MarkdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("capitalize", function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  eleventyConfig.setLibrary(
    "md",
    MarkdownIt({ html: true, linkify: true, typographer: false }).use(
      MarkdownItFootnote
    ) 
  );

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
