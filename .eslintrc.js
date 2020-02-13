module.exports = {
    parser: '@typescript-eslint/parser',
    "env": {
        "browser": true,
        "es6": true
    },
    plugins: ['@typescript-eslint'],
    "extends": [
        "eslint:recommended",
        'prettier/@typescript-eslint',
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {}
};