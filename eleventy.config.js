import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import dateFilters from "./_config/date.js";

export default function (eleventyConfig) {

    // Copy everything in the assets folder to the root of the output directory
    eleventyConfig.addPassthroughCopy({ "assets/**" : "./" });

    // Use the eleventy navigation options
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {

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

    // Process all markdown and html files with nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
        input: "_src",
        includes: "../_includes",
        data: "../data",
        output: "_site"
    }
};