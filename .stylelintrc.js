module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    // your rules
    "rule-empty-line-before": [
          "always-multi-line",
          {
            "except": ["first-nested", "inside-block"]
          }
        ],
  },
  // 忽略其他文件，只校验样式相关的文件
  ignoreFiles: [
    "node_modules/**/*",
    "public/**/*",
    "dist/**/*",
    "**/*.js",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
  ],
};
