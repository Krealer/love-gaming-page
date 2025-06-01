# 🎮 Love Gaming Page

A simple, stylish static website that hosts `.love` game files built with the [LÖVE2D](https://love2d.org/) framework. Users can browse games, view descriptions, and download `.love` files directly — with support for dark/light themes.

### 🌐 Live Site
[https://krealer.github.io/love-gaming-page/](https://krealer.github.io/love-gaming-page/)

---

## 🧩 Features

- 🎲 Interactive game cards generated dynamically from JSON
- 🌑 Default dark theme with toggleable light mode
- 📦 Downloads hosted `.love` files with one click
- 💾 Remembers theme preference with localStorage
- 💯 100% static and GitHub Pages-compatible

---

## ✍️ How to Add a Game

1. Add your `.love` file to the `games/` folder
2. Add a matching icon to `assets/icons/`
3. Edit `games.json`:

```json
{
  "name": "Game Title",
  "file": "game-file.love",
  "icon": "assets/icons/game-file.png",
  "description": "Short description here"
}