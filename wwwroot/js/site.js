var sprite;
var GameScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:


  function GameScene ()
  {
    Phaser.Scene.call(this, { key: 'gameScene', active: true });

    this.player = null;
    this.cursors = null;
    this.score = 0;
    this.scoreText = null;
  },


  preload: function ()
  {
    this.load.image('bg1', 'assets/plx-1.png');
    this.load.image('bg2', 'assets/plx-2.png');
    this.load.image('bg3', 'assets/plx-3.png');
    this.load.image('bg4', 'assets/plx-4.png');
    this.load.image('bg5', 'assets/plx-5.png');
    this.load.spritesheet('character', 'assets/adventurer-Sheet.png',{frameWidth: 50, frameHeight: 37});
  },

  create: function ()
  {



    this.bg1 = this.add.tileSprite(0, 0, 1280, 720, 'bg1').setOrigin(0, 0);
    this.bg2 = this.add.tileSprite(0, 0, 1280, 720, 'bg2').setOrigin(0, 0);
    this.bg3 = this.add.tileSprite(0, 0, 1280, 720, 'bg3').setOrigin(0, 0);
    this.bg4 = this.add.tileSprite(0, 0, 1280, 720, 'bg4').setOrigin(0, 0);
    this.bg5 = this.add.tileSprite(0, 0, 1280, 720, 'bg5').setOrigin(0, 0);
    this.bg1.tileScaleX = this.bg1.tileScaleY =
    this.bg2.tileScaleX = this.bg2.tileScaleY =
    this.bg3.tileScaleX = this.bg3.tileScaleY =
    this.bg4.tileScaleX = this.bg4.tileScaleY =
    this.bg5.tileScaleX = this.bg5.tileScaleY = 3;
    var player = this.physics.add.sprite(0, 0, 'character').setOrigin(0,0);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setScale(4);
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });


    //var button = this.add.image(800-16, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive();


    this.cursors = this.input.keyboard.createCursorKeys();
    var FKey = this.input.keyboard.addKey('F');

    FKey.on('down', function () {

      if (this.scale.isFullscreen)
      {
        //button.setFrame(0);
        this.scale.stopFullscreen();
      }
      else
      {
        //button.setFrame(1);
        this.scale.startFullscreen();
      }

    }, this);
  },

  update: function (time, theta)
  {
    var cursors = this.cursors;

    this.bg1.tilePositionX -= .01 * theta * 0.5;
    this.bg2.tilePositionX -= .01 * theta * 0.6;
    this.bg3.tilePositionX -= .01 * theta * 0.7;
    this.bg4.tilePositionX -= .01 * theta * 0.8;
    this.bg5.tilePositionX -= .01 * theta * 0.9;

    if (cursors.left.isDown)
    {
      this.bg1.tilePositionX -= .1 * theta * 0.5;
      this.bg2.tilePositionX -= .1 * theta * 0.6;
      this.bg3.tilePositionX -= .1 * theta * 0.7;
      this.bg4.tilePositionX -= .1 * theta * 0.8;
      this.bg5.tilePositionX -= .1 * theta * 0.9;
    }

    if (cursors.right.isDown)
    {
      this.bg1.tilePositionX += .1 * theta * 0.5;
      this.bg2.tilePositionX += .1 * theta * 0.6;
      this.bg3.tilePositionX += .1 * theta * 0.7;
      this.bg4.tilePositionX += .1 * theta * 0.8;
      this.bg5.tilePositionX += .1 * theta * 0.9;
    }



  },



});

var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
  antialias: false,﻿
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true
    }
  },
  scene: GameScene
};

var game = new Phaser.Game(config);
