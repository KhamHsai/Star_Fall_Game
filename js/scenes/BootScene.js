export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Load images
        this.load.image('background', 'images/backgtround.jpg');
        this.load.image('star', 'images/star.png');

        // Load audio (placeholder sounds - user will replace later)
        this.load.audio('catch', 'audio/catch.mp3');
        this.load.audio('miss', 'audio/miss.mp3');
        this.load.audio('gameover', 'audio/gameover.mp3');
        this.load.audio('background', 'audio/background.mp3');

        // Create loading bar
        const progressBar = this.add.graphics();
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0x4a90e2, 1);
            progressBar.fillRect(width / 4, height / 2 - 30, (width / 2) * value, 50);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
        });
    }

    create() {
        this.scene.start('MenuScene');
    }
}
