# 🎮 Technological Tic-Tac-Toe Game

<img width="1912" height="910" alt="Captura de tela 2025-12-30 071158" src="https://github.com/user-attachments/assets/d2e5247f-4d68-421d-a121-c8328783ade3" />

## 🌍 Live Demo

Access the complete project running online:

🔗 [Tic-Tac-Toe Online](https://tic-tac-toe-ochre-six-68.vercel.app/)

This link allows visitors to explore the game exactly as conceived, including Single Player mode, local Multiplayer, and all customization options.

---

## 🎬 Video Demonstrations

Watch demonstration videos of each game mode and settings:

### **1️⃣ Single Player - Playing Against the AI**

In this video, you will see how the Single Player mode works, where the player faces artificial intelligence. The demonstration shows:

* **AI Interaction**: See how the machine makes its moves intelligently.
* **Victory Logic**: Observe how the game detects when there is a winner or a draw.
* **Visual Feedback**: Follow the interface changes during gameplay.
* **Game Restart**: See how to restart the game for a new round.

> **Tip**: Observe the AI's strategy and try to anticipate its moves!

https://github.com/user-attachments/assets/55a404c7-255e-44f7-ab37-bbe1c6bbad74

---

### **2️⃣ Local Multiplayer - Two Players**

In this video, you will see the local Multiplayer mode, perfect for playing with a friend on the same device. The demonstration includes:

* **Player Alternation**: See how the game alternates between players X and O.
* **Multiplayer Interaction**: Watch two players making their moves.
* **Victory Detection**: Follow how the game identifies the winner or a draw.
* **Responsive Controls**: See how the interface works on different screen sizes.

> **Tip**: This mode is ideal for friendly competitions between friends!

https://github.com/user-attachments/assets/cd166b3a-05a4-41bf-a637-32bc9da8489b

---

### **3️⃣ Settings and Options**

In this video, you will see all available customization options. The demonstration shows:

* **Background Themes**: Explore different visual themes (Default Dark, Light, Neon Blue).
* **Dynamic Theme Change**: See how the interface changes instantly when selecting a new theme.
* **Volume Control**: Adjust the background music volume with the slider.
* **Enable/Disable Music**: Toggle to turn background music on and off.
* **Settings Navigation**: See how to return to the main menu after configuring.

> **Tip**: Choose the theme that best matches your style and adjust the volume to your preference!

https://github.com/user-attachments/assets/a3e87ded-5eef-4fac-8c9c-11f14f482400

---

## 📝 Overview

The **Technological Tic-Tac-Toe Game** is a modern and interactive implementation of the classic tic-tac-toe game, developed with **HTML5**, **CSS3**, and **Pure JavaScript**. The project demonstrates fundamental concepts of front-end web development, including DOM manipulation, game logic, and interface customization.

This is an excellent resource for learning about:

* DOM manipulation (Document Object Model).
* Game logic and victory condition detection.
* Implementation of basic artificial intelligence.
* Dynamic themes and interface customization.
* Responsiveness and adaptive design.
* Audio control and sound effects.

---

## 🎯 Main Features

| Feature | Description |
|:---|:---|
| **Single Player** | Play against artificial intelligence with intelligent strategy. |
| **Local Multiplayer** | Play with a friend on the same device. |
| **Customizable Themes** | Choose from 3 different visual themes (Default, Light, Neon). |
| **Volume Control** | Adjust the background music volume to your preference. |
| **Responsive Design** | Interface that works perfectly on desktop and mobile devices. |
| **Background Music** | Soundtrack that makes the experience more immersive. |

---

## 📂 Project Structure

The project organization is clear and modular, facilitating understanding and maintenance:

```
TicTacToe/
├── index.html       → Main file with HTML structure
├── css/
│   └── style.css    → CSS styles, themes, and responsiveness
├── js/
│   └── script.js    → Game logic, AI, and interactivity
├── image/
│   └── favicon.png  → Project icon
└── README.md        → This file
```

---

## 🌐 1. HTML – Semantic Structure

The `index.html` file defines the complete structure of the application, using semantic elements to ensure accessibility and clarity.

### **Main Components:**

* **Main Menu**: Buttons to start Single Player, Multiplayer, or access Options.
* **Game Board**: 3x3 grid with clickable cells for moves.
* **Status Indicator**: Shows whose turn it is or the game result.
* **Options Menu**: Theme selector and volume control.
* **Audio Element**: For background music playback.

### **Structure Example (index.html):**

```html
<div class="container">
    <div id="main-menu" class="screen">
        <h1>Tic-Tac-Toe</h1>
        <button onclick="startGame('single')">Single Player</button>
        <button onclick="startGame('multi')">Multiplayer</button>
        <button onclick="showScreen('options-menu')">Options</button>
    </div>

    <div id="game-screen" class="screen hidden">
        <div id="status">Player X's Turn</div>
        <div id="board" class="board">
            <!-- Board cells -->
        </div>
    </div>
</div>
```

---

## 🎨 2. CSS – Themes and Responsive Design

Styling is done with pure CSS, offering an attractive and responsive visual experience.

### **Available Themes:**

The project offers three distinct visual themes that can be switched in the settings:

* **Default (Dark)**: Dark background with white text, ideal for low-light environments.
* **Light**: Light background with dark text, perfect for well-lit environments.
* **Neon Blue**: Futuristic theme with neon colors, for a more modern experience.

### **Themes Example (style.css):**

```css
/* Themes */
.theme-default { 
    background: #1a1a2e; 
    color: white; 
}

.theme-light { 
    background: #f0f0f0; 
    color: #333; 
}

.theme-neon { 
    background: #000; 
    color: #00f2ff; 
}
```

### **Responsiveness:**

The CSS uses media queries to ensure the game works perfectly on all screen sizes, from smartphones to desktops.

---

## ⚙️ 3. JavaScript – Game Logic and Interactivity

The `script.js` file contains all the game logic, including victory detection, AI moves, and interface management.

### **Main Components:**

* **Victory Conditions**: Checks rows, columns, and diagonals to determine the winner.
* **Artificial Intelligence**: Implements AI algorithm for Single Player mode.
* **Screen Management**: Controls navigation between Menu, Game, and Options.
* **Audio Control**: Manages background music playback.
* **Dynamic Themes**: Allows switching between themes in real-time.

### **Logic Example (script.js):**

```javascript
// Victory Conditions
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Function to make a move
function makeMove(index, element) {
    gameState[index] = currentPlayer;
    element.innerText = currentPlayer;
    checkResult();
}
```

---

## 🛠️ How to Run

No web server is required. To run the project:

1. **Download** or **clone** this repository.
2. Open the `index.html` file directly in your preferred browser (Chrome, Firefox, Edge, Safari, etc.).
3. Click on one of the game modes to start playing!

---

## 🔧 Customization

### Add New Themes

1. Open the `css/style.css` file.
2. Create a new theme class, for example: `.theme-custom`.
3. Set the desired background and text colors.
4. In the `index.html` file, add a new option to the theme selector.
5. In the `js/script.js` file, update the `changeTheme()` function to include the new theme.

### Change Background Music

1. Open the `index.html` file.
2. Locate the `<audio>` tag and change the `src` attribute to your music URL.
3. Make sure the music is in a supported format (MP3, WAV, OGG).

### Modify AI Difficulty

1. Open the `js/script.js` file.
2. Locate the `aiMove()` function.
3. Adjust the logic to make the AI easier or harder to beat.

---

## 📱 Responsiveness

The game was developed with a mobile-first approach, ensuring it works perfectly on:

* **Smartphones**: Small screens with touch.
* **Tablets**: Medium screens with touch and mouse.
* **Desktops**: Large screens with mouse and keyboard.

---

## 🎓 Learning Concepts

This project is ideal for learning about:

* **DOM Manipulation**: How to access and modify HTML elements with JavaScript.
* **Events**: How to respond to user clicks and interactions.
* **Game Logic**: How to implement rules and detect victory conditions.
* **Basic Artificial Intelligence**: How to create an opponent that makes strategic moves.
* **Dynamic Themes**: How to switch styles in real-time.
* **Responsive Design**: How to create interfaces that work on all devices.

---

## 📚 Conclusion

The **Technological Tic-Tac-Toe Game** is a solid foundation for anyone looking to explore front-end web development. The modular structure and well-commented code make it an excellent starting point for learning and expansion. Have fun playing and learning!

---
