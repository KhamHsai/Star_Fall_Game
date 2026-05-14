export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    create(data) {
        const score = data.score || 0;
        const highScore = data.highScore || 0;
        const difficulty = data.difficulty || 'medium';

        // Background
        this.add.image(400, 300, 'background').setDisplaySize(800, 600);

        // Game Over text
        this.add.text(400, 150, 'GAME OVER', {
            fontSize: '72px',
            fill: '#ff4444',
            fontStyle: 'bold',
            stroke: '#000',
            strokeThickness: 8
        }).setOrigin(0.5);

        // Score
        this.add.text(400, 250, `Your Score: ${score}`, {
            fontSize: '36px',
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: 6
        }).setOrigin(0.5);

        // High score
        this.add.text(400, 320, `High Score: ${highScore}`, {
            fontSize: '36px',
            fill: '#ffd700',
            stroke: '#000',
            strokeThickness: 6
        }).setOrigin(0.5);

        // New high score message
        if (score >= highScore && score > 0) {
            this.add.text(400, 390, 'NEW HIGH SCORE!', {
                fontSize: '28px',
                fill: '#00ff00',
                stroke: '#000',
                strokeThickness: 4
            }).setOrigin(0.5);
        }

        // Play Again button
        this.createButton(400, 480, 'PLAY AGAIN', () => {
            this.scene.start('GameScene', { difficulty: difficulty });
        }, '#4CAF50');

        // Return to Menu button
        this.createButton(400, 540, 'MAIN MENU', () => {
            this.scene.start('MenuScene');
        }, '#2196F3');
    }

    createButton(x, y, text, callback, color) {
        const button = this.add.text(x, y, text, {
            fontSize: '32px',
            fill: '#ffffff',
            backgroundColor: color,
            padding: { x: 25, y: 12 },
            fontStyle: 'bold'
        }).setOrigin(0.5);

        button.setInteractive({ useHandCursor: true });

        button.on('pointerover', () => {
            button.setScale(1.1);
        });

        button.on('pointerout', () => {
            button.setScale(1);
        });

        button.on('pointerdown', callback);
    }
}
