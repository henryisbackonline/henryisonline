import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { IdAttributePlugin } from "@11ty/eleventy";
import footnote_plugin from 'markdown-it-footnote';

import dateFilters from "./_config/date.js";

export default function (eleventyConfig) {

    // Add the cutom date filters - from eleventy-base-blog
    eleventyConfig.addPlugin(dateFilters);

    // Copy everything in the assets folder to the root of the output directory
    eleventyConfig.addPassthroughCopy({ "assets/**" : "/" });

    // Use the eleventy navigation options
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Add id attributes to all headers for TOC links
    eleventyConfig.addPlugin(IdAttributePlugin);

    // Add footnote capabilities from markdown-it plugins - thank you Martin Hähnel
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));

    // Transform images for smalle final site size
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

    // Generate an ATOM feed for all posts
    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom",
        outputPath: "/feeds/atomfeed.xml",
        collection: {
            name: "post", // iterate over `collections.post`
            limit: 0,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "Henry Is Online",
            subtitle: "",
            base: "https://henryisonline.com/",
            author: {
                name: "Henry",
                email: "", // Optional
            }
        }
    });

    // Generate an RSS feed for all posts
    eleventyConfig.addPlugin(feedPlugin, {
        type: "rss",
        outputPath: "/feeds/rssfeed.xml",
        collection: {
            name: "post", // iterate over `collections.post`
            limit: 0,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "Henry Is Online",
            subtitle: "",
            base: "https://henryisonline.com/",
            author: {
                name: "Henry",
                email: "", // Optional
            }
        }
    });

    // Generate a JSON feed for all posts
    eleventyConfig.addPlugin(feedPlugin, {
        type: "json",
        outputPath: "/feeds/feed.json",
        collection: {
            name: "post", // iterate over `collections.post`
            limit: 0,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "Henry Is Online",
            subtitle: "",
            base: "https://henryisonline.com/",
            author: {
                name: "Henry",
                email: "", // Optional
            }
        }
    });
};

export const config = {

    // Add template formats
    templateFormats: ["html", "md", "njk"],

    // Process all markdown and html files with nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
        input: "content",
        includes: "../_includes",
        data: "../data",
        output: "_site"
    }
};