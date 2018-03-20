/**
 *  @file       index.js
 *  @brief      The entry point of Amaze.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/19/2018 created.
 *  @date       03/19/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The entry point of Amaze.
 */
'use strict';

import { config } from './amaze/amaze.js';

window.addEventListener('load', () => {
  let game = new Phaser.Game(config);
});

// index.js
