module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  rules: {
    /* see https://stylelint.io/user-guide/rules/list#avoid-errors */
    'font-family-no-missing-generic-family-keyword': null,
    'function-no-unknown': null,
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],

    /* see https://stylelint.io/user-guide/rules/list#enforce-conventions */
    'font-family-name-quotes': 'always-where-recommended',
    'shorthand-property-no-redundant-values': true,
    'declaration-block-no-redundant-longhand-properties': true,

    /* see https://github.com/stylelint-scss/stylelint-scss#list-of-rules */
    'scss/no-global-function-names': null,

    /* see https://stylelint.io/user-guide/rules/list#stylistic-issues */
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }],
    'string-quotes': 'single',
    'selector-list-comma-newline-after': 'always',
    indentation: 2,
  },
};
