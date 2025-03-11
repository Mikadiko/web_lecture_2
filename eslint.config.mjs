import globals from "globals";
import pluginJs from "@eslint/js";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "no-var": "warn",
            semi: "warn",
            indent: "warn",
            "no-multi-spaces": "warn",
            "space-in-parens": "warn",
            "no-multiple-empty-lines": "warn",
            "prefer-const": "warn",
            "no-use-before-define": "warn",
            "no-debugger": "warn",
            "no-regex-spaces": "warn",
            "no-redeclare": "warn",
        },
    },
    configPrettier,
];
