export default function (eleventyConfig) {
	eleventyConfig.addFilter("hlog", (...args) => {
		return console.log(...args);
	});
}
