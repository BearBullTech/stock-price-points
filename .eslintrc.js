/**
 * These rules enforce the AIRBNB Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: "airbnb",
  env: {
    "browser": true,
    "node": true
  },
  rules: {
    "no-console": 0,
    "import/extensions": ["error", "never", { "jsx": "always" }]
  },
};

// module.exports = {
//   extends: './node_modules/eslint-config-hackreactor/index.js'
// };