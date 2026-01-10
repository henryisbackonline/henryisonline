export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('source')
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};