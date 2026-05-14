# Star Fall Game

A responsive browser-based arcade game built with Phaser.js where players catch falling stars using a movable bar. The project was developed as part of the **ITE-101 Assignment Project** at **Stamford International University**.

The game is fully playable on desktop, tablet, and mobile devices with responsive controls and a smooth gameplay experience.

---

## Live Demo

**Play Online**

**Live Game:** [https://khamhsai.github.io/Star_Fall_Game/](https://khamhsai.github.io/Star_Fall_Game/)

The game is hosted publicly for demonstration and educational purposes.

Feel free to play and explore the game through the live demo link above.

> **Note:** This project is publicly available for viewing and educational purposes as part of my Stamford International University ITE-101 assignment project. Please do not copy, re-upload, resubmit, or claim this project as your own work. Respect the effort and originality behind the project development.

---

## Project Information

- **Project Name:** Star Fall Game
- **Course:** ITE-101
- **Institution:** Stamford International University
- **Project Type:** Assignment Project
- **Developer:** Kham Hsai

---

## Features

- **3 Difficulty Levels** (Easy, Medium, Hard)
- **Responsive design** for desktop, tablet, and mobile
- **Touch and drag support** for mobile gameplay
- **Real-time scoring system**
- **Miss counter** with game over condition
- **60-second countdown challenge**
- **Persistent high score tracking** using localStorage
- **Smooth UI animations** and clean interface
- **Modular Phaser scene structure**
- **Easy customization** for assets and gameplay settings

---

## Gameplay Mechanics

### Difficulty Modes

#### Easy
- **Star Speed:** 150px/s
- **Spawn Rate:** 1.5 seconds
- **Bar Width:** 150px

#### Medium
- **Star Speed:** 250px/s
- **Spawn Rate:** 1 second
- **Bar Width:** 120px

#### Hard
- **Star Speed:** 400px/s
- **Spawn Rate:** 0.6 seconds
- **Bar Width:** 100px

### Game Rules

- Catch falling stars using the movable bar
- Each successful catch gives **+1 score**
- Missing **5 stars** ends the game
- The match also ends when the **60-second timer** reaches zero
- High scores are automatically saved locally in the browser

---

## Deployment

The project is currently deployed using **GitHub Pages**.

### Public Deployment Link

🔗 [https://khamhsai.github.io/Star_Fall_Game/](https://khamhsai.github.io/Star_Fall_Game/)


---

## Controls

### Desktop

- **LEFT Arrow** → Move Left
- **RIGHT Arrow** → Move Right

### Mobile

- **Touch and drag** to move the bar

---

## Project Structure

```
Star_Fall_Game/
├── index.html
├── package.json
├── README.md
├── js/
│   ├── main.js
│   └── scenes/
│       ├── BootScene.js
│       ├── MenuScene.js
│       ├── GameScene.js
│       └── GameOverScene.js
├── css/
│   └── style.css
├── images/
│   ├── backgtround.jpg
│   └── star.png
└── audio/
    ├── catch.mp3
    ├── miss.mp3
    ├── gameover.mp3
    └── background.mp3
```

---

## Technologies Used

- **Phaser.js 3.60.0**
- **JavaScript (ES6)**
- **HTML5 Canvas**
- **CSS3**
- **localStorage API**
- **Node.js**
- **npm**

---


## Contribution & Usage

This repository is publicly available for:

- Educational reference
- Learning Phaser.js structure
- Project exploration and testing
- UI/UX inspiration

Contributions, suggestions, and feedback are welcome.

**However:**

- Do not copy this project and submit it as your own academic work
- Do not re-upload or redistribute the full project without permission
- Please provide proper credit if referencing parts of the implementation

---

## License

This project is licensed under the **MIT License**.

---

## Acknowledgments

- Built with [Phaser.js](https://phaser.io/)
- Hosted using [GitHub Pages](https://pages.github.com/)
- Developed for Stamford International University coursework

---

## Final Note

Thank you for visiting the project repository.

Feel free to play the game online and explore the project structure.

If you enjoy the project, consider starring the repository on GitHub.

---