export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        // Background
        this.add.image(400, 300, 'background').setDisplaySize(800, 600);

        // Title
        this.add.text(400, 100, 'STAR FALL', {
            fontSize: '64px',
            fill: '#ffd700',
            fontStyle: 'bold',
            stroke: '#000',
            strokeThickness: 6
        }).setOrigin(0.5);

        // High score display
        const highScore = localStorage.getItem('starfallHighScore') || 0;
        this.add.text(400, 180, `High Score: ${highScore}`, {
            fontSize: '24px',
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Instructions
        const instructions = [
            'Catch falling stars with the bar',
            'Use LEFT/RIGHT arrow keys to move',
            'Catch stars to score points',
            'Miss 5 stars or run out of time = GAME OVER',
            'Time limit: 60 seconds'
        ];

        instructions.forEach((text, index) => {
            this.add.text(400, 230 + (index * 30), text, {
                fontSize: '18px',
                fill: '#ffffff',
                stroke: '#000',
                strokeThickness: 3
            }).setOrigin(0.5);
        });

        // Difficulty buttons
        this.createDifficultyButton(400, 450, 'EASY', 'easy', '#4CAF50');
        this.createDifficultyButton(400, 500, 'MEDIUM', 'medium', '#FF9800');
        this.createDifficultyButton(400, 550, 'HARD', 'hard', '#F44336');
    }

    createDifficultyButton(x, y, text, difficulty, color) {
        const button = this.add.text(x, y, text, {
            fontSize: '28px',
            fill: '#ffffff',
            backgroundColor: color,
            padding: { x: 20, y: 10 },
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
