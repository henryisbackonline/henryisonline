import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy("simple.css");
};
export const config = {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
        input: "_src",
        includes: "../_includes",
        data: "../data"
    }
};