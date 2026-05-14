export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        // Check if mobile device
        const isMobile = this.scale.width < 768;
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        // Background
        this.add.image(centerX, centerY, 'background').setDisplaySize(this.scale.width, this.scale.height);

        // Title
        const titleFontSize = isMobile ? '36px' : '64px';
        const titleStroke = isMobile ? 3 : 6;
        this.add.text(centerX, isMobile ? 80 : 100, 'STAR FALL', {
            fontSize: titleFontSize,
            fill: '#ffd700',
            fontStyle: 'bold',
            stroke: '#000',
            strokeThickness: titleStroke
        }).setOrigin(0.5);

        // High score display
        const highScore = localStorage.getItem('starfallHighScore') || 0;
        const highScoreFontSize = isMobile ? '18px' : '24px';
        const highScoreStroke = isMobile ? 2 : 4;
        this.add.text(centerX, isMobile ? 130 : 180, `High Score: ${highScore}`, {
            fontSize: highScoreFontSize,
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: highScoreStroke
        }).setOrigin(0.5);

        // Instructions
        const instructions = [
            'Catch falling stars with the bar',
            'Use LEFT/RIGHT arrow keys to move',
            'Touch and drag on mobile',
            'Catch stars to score points',
            'Miss 5 stars or run out of time = GAME OVER',
            'Time limit: 60 seconds'
        ];

        const instructionFontSize = isMobile ? '14px' : '18px';
        const instructionStroke = isMobile ? 2 : 3;
        const instructionSpacing = isMobile ? 22 : 30;
        const instructionStartY = isMobile ? 170 : 230;

        instructions.forEach((text, index) => {
            this.add.text(centerX, instructionStartY + (index * instructionSpacing), text, {
                fontSize: instructionFontSize,
                fill: '#ffffff',
                stroke: '#000',
                strokeThickness: instructionStroke
            }).setOrigin(0.5);
        });

        // Difficulty buttons
        const buttonY = isMobile ? 380 : 450;
        const buttonSpacing = isMobile ? 45 : 50;
        this.createDifficultyButton(centerX, buttonY, 'EASY', 'easy', '#4CAF50', isMobile);
        this.createDifficultyButton(centerX, buttonY + buttonSpacing, 'MEDIUM', 'medium', '#FF9800', isMobile);
        this.createDifficultyButton(centerX, buttonY + (buttonSpacing * 2), 'HARD', 'hard', '#F44336', isMobile);
    }

    createDifficultyButton(x, y, text, difficulty, color, isMobile) {
        const fontSize = isMobile ? '22px' : '28px';
        const padding = isMobile ? { x: 15, y: 8 } : { x: 20, y: 10 };
        
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

        button.on('pointerdown', () => {
            this.scene.start('GameScene', { difficulty: difficulty });
        });
    }
}
