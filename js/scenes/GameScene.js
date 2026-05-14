export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create(data) {
        this.difficulty = data.difficulty || 'medium';
        
        // Set difficulty parameters
        this.setDifficulty();

        // Background
        this.add.image(400, 300, 'background').setDisplaySize(800, 600);

        // Game state
        this.score = 0;
        this.misses = 0;
        this.maxMisses = 5;
        this.timeLeft = 60;
        this.gameOver = false;

        // Create bar
        this.bar = this.add.rectangle(400, 550, this.barWidth, 20, 0x4a90e2);
        this.physics.add.existing(this.bar);
        this.bar.body.setCollideWorldBounds(true);
        this.bar.body.setImmovable(true);

        // Stars group
        this.stars = this.physics.add.group();

        // UI elements
        this.createUI();

        // Input controls
        this.cursors = this.input.keyboard.createCursorKeys();

        // Touch controls for mobile
        this.input.on('pointermove', (pointer) => {
            if (pointer.isDown && !this.gameOver) {
                this.bar.x = pointer.x;
            }
        });

        // Star spawning timer
        this.starSpawnTimer = this.time.addEvent({
            delay: this.spawnRate,
            callback: this.spawnStar,
            callbackScope: this,
            loop: true
        });

        // Game timer
        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        // Collision detection
        this.physics.add.overlap(this.bar, this.stars, this.catchStar, null, this);

        // Check for stars hitting ground
        this.physics.world.on('worldbounds', (body, up, down, left, right) => {
            if (down && body.gameObject.active) {
                this.missStar(body.gameObject);
            }
        });
    }

    setDifficulty() {
        switch (this.difficulty) {
            case 'easy':
                this.starSpeed = 150;
                this.spawnRate = 1500;
                this.barWidth = 150;
                break;
            case 'medium':
                this.starSpeed = 250;
                this.spawnRate = 1000;
                this.barWidth = 120;
                break;
            case 'hard':
                this.starSpeed = 400;
                this.spawnRate = 600;
                this.barWidth = 100;
                break;
        }
    }

    createUI() {
        // Check if mobile device
        const isMobile = this.scale.width < 768;
        const fontSize = isMobile ? '18px' : '28px';
        const strokeThickness = isMobile ? 2 : 4;

        // Score
        this.scoreText = this.add.text(20, 20, `Score: ${this.score}`, {
            fontSize: fontSize,
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: strokeThickness
        });

        // Misses
        this.missesText = this.add.text(20, isMobile ? 50 : 60, `Misses: ${this.misses}/${this.maxMisses}`, {
            fontSize: fontSize,
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: strokeThickness
        });

        // Timer
        this.timerText = this.add.text(20, isMobile ? 80 : 100, `Time: ${this.timeLeft}`, {
            fontSize: fontSize,
            fill: '#ffffff',
            stroke: '#000',
            strokeThickness: strokeThickness
        });

        // Difficulty indicator
        this.difficultyText = this.add.text(isMobile ? this.scale.width - 20 : 700, 20, this.difficulty.toUpperCase(), {
            fontSize: isMobile ? '16px' : '24px',
            fill: '#ffd700',
            stroke: '#000',
            strokeThickness: strokeThickness
        }).setOrigin(1, 0);
    }

    update() {
        if (this.gameOver) return;

        // Bar movement
        if (this.cursors.left.isDown) {
            this.bar.body.setVelocityX(-400);
        } else if (this.cursors.right.isDown) {
            this.bar.body.setVelocityX(400);
        } else {
            this.bar.body.setVelocityX(0);
        }

        // Update star positions
        this.stars.children.iterate((star) => {
            if (star && star.active) {
                star.body.setVelocityY(this.starSpeed);
            }
        });
    }

    spawnStar() {
        if (this.gameOver) return;

        const x = Phaser.Math.Between(50, 750);
        const star = this.stars.create(x, -30, 'star');
        star.setScale(0.1);
        star.body.setCollideWorldBounds(true);
        star.body.onWorldBounds = true;
    }

    catchStar(bar, star) {
        star.destroy();
        this.score++;
        this.scoreText.setText(`Score: ${this.score}`);
        
        // Play catch sound
        try {
            this.sound.play('catch');
        } catch (e) {
            // Sound file not loaded yet
        }
    }

    missStar(star) {
        star.destroy();
        this.misses++;
        this.missesText.setText(`Misses: ${this.misses}/${this.maxMisses}`);
        
        // Play miss sound
        try {
            this.sound.play('miss');
        } catch (e) {
            // Sound file not loaded yet
        }

        if (this.misses >= this.maxMisses) {
            this.endGame();
        }
    }

    updateTimer() {
        if (this.gameOver) return;

        this.timeLeft--;
        this.timerText.setText(`Time: ${this.timeLeft}`);

        if (this.timeLeft <= 0) {
            this.endGame();
        }
    }

    endGame() {
        this.gameOver = true;
        this.starSpawnTimer.remove();
        this.gameTimer.remove();

        // Update high score
        const currentHighScore = localStorage.getItem('starfallHighScore') || 0;
        if (this.score > currentHighScore) {
            localStorage.setItem('starfallHighScore', this.score);
        }

        // Play game over sound
        try {
            this.sound.play('gameover');
        } catch (e) {
            // Sound file not loaded yet
        }

        // Transition to game over scene
        this.time.delayedCall(1000, () => {
            this.scene.start('GameOverScene', {
                score: this.score,
                highScore: Math.max(this.score, currentHighScore),
                difficulty: this.difficulty
            });
        });
    }
}
