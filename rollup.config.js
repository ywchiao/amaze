/**
 *  @file       rollup.config.js
 *  @brief      The config file for the rollup.js
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       11/30/2016 created.
 *  @date       11/17/2020 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2016-2020 Yiwei Chiao
 *  @details
 *
 *  The config file for the rollup.js
 */

export default {
  'input': 'src/index.js',
  'output': {
    'file': 'out/amaze.js',
    'format': 'iife',
    'sourcemap': 'true',
  },
  'plugins': [
  ],
};

// rollup.config.js
