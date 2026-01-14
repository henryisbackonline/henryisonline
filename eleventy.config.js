import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("_assets");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {

        formats: "png",
        widths: 1200,
        failOnError: false,
        htmlOptions: {
            imgAttributes: {
                // <img loading decoding> assigned on the HTML tag will override these values.
                loading: "lazy",
                decoding: "async",
            }
        },
    });
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