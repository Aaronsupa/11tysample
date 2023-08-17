module.exports = function(eleventyConfig) {

    eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        autoescape: false, // warning: don’t do this!
      });

    eleventyConfig.addPassthroughCopy("stylecss.css");

    return {
        dir: {
            input: "views",
            output: "dist"
        }
    }
};