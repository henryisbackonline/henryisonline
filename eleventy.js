export default function (eleventyConfig) {
    // eleventy configuration
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',

    dir: {
        input: "_source",
        includes: "../_includes",
        data: "../_data",
        output: "_site"
    },
};