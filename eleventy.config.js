import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import dateFilters from "./_config/date.js";

export default function (eleventyConfig) {

    eleventyConfig
        .addPassthroughCopy("site-logo-800px.png")    // Copy the site logo
        .addPassthroughCopy("style.css");             // Copy the global stylesheet

    // Use the eleventy navigation options
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        // process images from .md extensons
        // extensions: ".md",

        // transform all images to png format
        formats: "png",
        
        // resize all images to 1200px wide - smaller file sizes
        widths: [1200],

        // these options are from the eleventy-image docs - see below
        // (https://www.11ty.dev/docs/plugins/image/#more-configuration-options)
        htmlOptions: {
            imageAttributes: {
                loading: "lazy",
                decoding: "async"
            }
        }
    });

    // eleventyConfig.addBundle("css", {
    //     toFileDirectory: "_site",
    //     bundleHtmlContentFromSelector: "style"
    //     // all of the above is from eleventy-base-blog config file
    // });

    // Add the cutom date filters - from eleventy-base-blog
    eleventyConfig.addPlugin(dateFilters);

};

export const config = {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
        input: "_src",
        includes: "../_includes",
        data: "../data",
        output: "_site"
    }
};