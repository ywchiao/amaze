(function () {
  'use strict';

  /**
   *  @file       amaze.js
   *  @brief      The Amaze module of the Amaze.
   *  @author     Yiwei Chiao (ywchiao@gmail.com)
   *  @date       03/20/2018 created.
   *  @date       03/20/2018 last modified.
   *  @version    0.1.0
   *  @since      0.1.0
   *  @copyright  MIT, © 2018 Yiwei Chiao
   *  @details
   *
   *  The Amaze module of the Amaze.
   */

  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: preload,
      create: create
    }
  };

  function preload() {
    console.log('preload() called');
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  function create() {
    console.log('create() called');
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }

  // amaze/amaze.js

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

  window.addEventListener('load', function () {
    console.log('window loaded');
    //  let game = new Phaser.Game(config);
    console.log('Phaser.Game');
  });

  // index.js

}());
//# sourceMappingURL=amaze.js.map
