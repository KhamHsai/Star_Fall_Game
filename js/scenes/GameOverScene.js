export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    create(data) {
        const score = data.score || 0;
        const highScore = data.highScore || 0;
        const difficulty = data.difficulty || 'medium';

        // Check if mobile device
        const isMobile = this.scale.width < 768;
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        // Background
        this.add.image(centerX, centerY, 'background').setDisplaySize(this.scale.width, this.scale.height);

        // Game Over text
        const gameOverFontSize = isMobile ? '40px' : '72px';
        const gameOverStroke = isMobile ? 4 : 8;
        this.add.text(centerX, isMobile ? 100 : 150, 'GAME OVER', {
            fontSize: gameOverFontSize,
            fill: '#ff4444',
            fontStyle: 'bold',
            stroke: '#000',
            strokeThickness: gameOverStroke
        }).setOrigin(0.5);

        // Score
        const scoreFontSize = isMobile ? '24px' : '36px';
        const scoreStroke = isMobile ? 3 : 6;
        this.add.text(centerX, isMobile ? 180 : 250, `Your Score: ${score}`, {
            fontSize: scoreFontSize,
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: scoreStroke
        }).setOrigin(0.5);

        // High score
        this.add.text(centerX, isMobile ? 230 : 320, `High Score: ${highScore}`, {
            fontSize: scoreFontSize,
            fill: '#ffd700',
            stroke: '#000',
            strokeThickness: scoreStroke
        }).setOrigin(0.5);

        // New high score message
        if (score >= highScore && score > 0) {
            const newHighFontSize = isMobile ? '20px' : '28px';
            const newHighStroke = isMobile ? 2 : 4;
            this.add.text(centerX, isMobile ? 280 : 390, 'NEW HIGH SCORE!', {
                fontSize: newHighFontSize,
                fill: '#00ff00',
                stroke: '#000',
                strokeThickness: newHighStroke
            }).setOrigin(0.5);
        }

        // Play Again button
        const buttonY = isMobile ? 350 : 480;
        const buttonSpacing = isMobile ? 50 : 60;
        this.createButton(centerX, buttonY, 'PLAY AGAIN', () => {
            this.scene.start('GameScene', { difficulty: difficulty });
        }, '#4CAF50', isMobile);

        // Return to Menu button
        this.createButton(centerX, buttonY + buttonSpacing, 'MAIN MENU', () => {
            this.scene.start('MenuScene');
        }, '#2196F3', isMobile);
    }

    createButton(x, y, text, callback, color, isMobile) {
        const fontSize = isMobile ? '24px' : '32px';
        const padding = isMobile ? { x: 18, y: 9 } : { x: 25, y: 12 };
        
        const button = this.add.text(x, y, text, {
            fontSize: fontSize,
            fill: '#ffffff',
            backgroundColor: color,
            padding: padding,
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
