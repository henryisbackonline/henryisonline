export default function (eleventyConfig) {
	eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
    eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
    eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
}