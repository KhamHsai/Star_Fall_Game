# Star Fall Game

A browser-based game built with Phaser.js where you catch falling stars with a movable bar.

## Features

- **3 Difficulty Levels**: Easy, Medium, Hard
- **Star Catching**: Use left/right arrow keys to move the bar and catch stars
- **Scoring System**: +1 point per star caught
- **Miss Counter**: Game over after 5 misses
- **Time Limit**: 60 seconds per game
- **High Score Tracking**: Saved to localStorage
- **Sound Effects**: Placeholder sounds (replace with your own)

## Game Mechanics

- **Easy**: Slower star speed, lower spawn rate, wider bar (150px)
- **Medium**: Balanced gameplay, medium star speed, 120px bar
- **Hard**: Fast star speed, higher spawn rate, narrower bar (100px)

## Setup Instructions

### Option 1: Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the game server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

### Option 2: GitHub Pages Hosting (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under Source, select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click Save

3. Your game will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

**Note:** GitHub Pages is free and doesn't require running a local server.

## How to Play

1. Select difficulty level (Easy/Medium/Hard)
2. Use LEFT/RIGHT arrow keys to move the bar
3. Catch falling stars to score points
4. Avoid missing stars (5 misses = game over)
5. Beat the clock (60 seconds = game over)

## Sound Files

Replace the placeholder audio files in the `audio/` folder with your own sounds:
- `catch.mp3` - Sound when catching a star
- `miss.mp3` - Sound when missing a star
- `gameover.mp3` - Game over sound
- `background.mp3` - Background music (optional)

## Project Structure

```
StarFallgame project/
├── index.html              # Main HTML entry point
├── package.json            # Node.js dependencies
├── js/
│   ├── main.js            # Game initialization
│   └── scenes/
│       ├── BootScene.js   # Asset loading
│       ├── MenuScene.js   # Start menu
│       ├── GameScene.js   # Main game logic
│       └── GameOverScene.js # Game over screen
├── css/
│   └── style.css          # Styling
├── images/                # Game assets
│   ├── backgtround.jpg
│   └── star.webp
└── audio/                 # Sound effects
```

## Technologies Used

- **Phaser.js 3.60.0** - Game framework
- **JavaScript (ES6)** - Game logic
- **HTML5 Canvas** - Rendering
- **localStorage** - High score persistence
