export default function (eleventyConfig) {
    eleventyConfig.addLayoutAlias("post", "_includes/layouts/post.njk");
    eleventyConfig.addLayoutAlias("base", "_includes/layouts/base.njk");
    eleventyConfig.addLayoutAlias("home", "_includes/layouts/home.njk");
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',

    dir: {
        input: "_source",
        includes: "/_includes",
        data: "/_data",
        output: "_site"
    },
};