/**
 * Prettier config.
 *
 * @type {import('prettier').Options & import('prettier-plugin-jsdoc').Options}
 */
const config = {
  plugins: ['prettier-plugin-jsdoc'],

  printWidth: 160,
  quoteProps: 'consistent',
  singleAttributePerLine: true,
  singleQuote: true,
  experimentalTernaries: true,
  endOfLine: 'lf',

  tsdoc: true,
  jsdocDescriptionWithDot: true,
  jsdocSeparateReturnsFromParam: true,
  jsdocPreferCodeFences: true,
};

export default config;
