export default function (eleventyConfig) {
    eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
    eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
    eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
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