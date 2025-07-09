# 🕹️ Whack-a-Hole Game (jQuery + JavaScript)

A fun browser-based "Whack-a-Hole" game built using **HTML**, **CSS**, and **JavaScript (jQuery)**. Click the correct hole (button) as fast as possible when it lights up — score points, beat the timer, and have fun!

---

## 🎮 How to Play

- Press **any key** to start the game.
- A random "hole" (button) will be highlighted every **800 milliseconds**.
- Click the correct button before the next one appears to earn **100 points**.
- The game runs for **30 seconds**.
- Your final score is displayed at the end.

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

---
## 📌 Features

- Randomized hole highlighting
- Live countdown timer (30 seconds)
- Real-time score update
- Button press animation and sounds
- Visual "Game Over" flash effect

---

## 🧠 Game Logic Summary

- `keypress` starts the game and timers.
- `setInterval` randomly activates holes every 800ms.
- Buttons respond only while the game is active.
- Score increases with correct clicks.
- After 30 seconds, the game ends and disables input.

---

## ⚠️ Notes

- Ensure jQuery is included in your `index.html` for the game to work.
- All hole buttons must have class `btn` and unique `id`s (e.g., `hole1`, `hole2`, ... `hole9`).
- You can customize the sounds in the `Sounds/` folder.

---

## 🚀 Getting Started

1. Clone or download the project.
2. Open `index.html` in your browser.
3. Press any key to start the game!





