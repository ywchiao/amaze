/**
 *  @file       babel.config.js
 *  @brief      The Configuration file for the babel.js
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       09/02/2018 created.
 *  @date       11/17/2020 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018-2020 Yiwei Chiao
 *  @details
 *
 *  The Configuration file for the babel.js
 */

module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "last 2 versions"
          ]
        },
        "modules": false,
        "useBuiltIns": "entry",
        "corejs": 3,
      }
    ]
  ]
};

// babel.config.js
