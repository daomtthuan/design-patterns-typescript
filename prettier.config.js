/** Prettier config. */
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
