/**
 * @type {import("prettier").Config}
 */
const config = {
	printWidth: 100,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	bracketSameLine: false,
	vueIndentScriptAndStyle: true,
	singleAttributePerLine: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};

export default config;
