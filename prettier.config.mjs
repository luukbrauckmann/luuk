/**
 * @type {import("prettier").Config}
 */
export default {
	printWidth: 100,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	bracketSameLine: false,
	vueIndentScriptAndStyle: true,
	singleAttributePerLine: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-css-order'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};
