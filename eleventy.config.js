import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {


    eleventyConfig
        .addPassthroughCopy("site-logo-800px.png")    // Copy the site logo
        .addPassthroughCopy("style.css");             // Copy the global stylesheet

    // Use the eleenty navigation options
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Resize images for faster load times
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
    
    eleventyConfig.addBundle("css", {
        toFileDirectory: "_site",
        bundleHtmlContentFromSelector: "style"
        // all of the above is from eleventy-base-blog config file
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