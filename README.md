# 🍳 Recipe AI Assistant

A futuristic, AI-powered web application that identifies food ingredients from images and generates creative, step-by-step cooking recipes. Built with a sleek **Glassmorphism** design to match a high-tech portfolio aesthetic.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![AI](https://img.shields.io/badge/AI-Llama%203.2%20Vision-58a6ff)

## 🚀 Overview

**Recipe AI Assistant** simplifies the cooking experience. Instead of typing out what you have in your fridge, simply upload a photo. The AI analyzes the visual data, identifies the ingredients, and provides:
* **Creative Title** for the dish.
* **Estimated Prep Time**.
* **Complete Ingredients List**.
* **Step-by-step Instructions**.

## ✨ Features

* **Computer Vision:** Powered by Meta's `Llama-3.2-11b-vision` via Groq API for lightning-fast image reasoning.
* **Modern UI:** A fully responsive "Space-Theme" interface using Glassmorphism (blur effects, translucent cards, and neon blue accents).
* **Markdown Support:** Recipes are beautifully formatted with headers and lists using `marked.js`.
* **Live Preview:** Instantly see the uploaded image in a compact, styled frame before processing.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+)
* **AI Model:** Llama 3.2 11B Vision (via Groq Cloud API)
* **Formatting:** [Marked.js](https://marked.js.org/) (Markdown Parser)
* **Icons:** FontAwesome 6.4



## 🔧 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/recipe-ai-assistant.git](https://github.com/your-username/recipe-ai-assistant.git)
    ```

2.  **API Key Configuration:**
    Open `script.js` and replace the `GROQ_KEY` variable with your unique key from the [Groq Console](https://console.groq.com/).
    ```javascript
    const GROQ_KEY = "YOUR_GROQ_API_KEY_HERE";
    ```

3.  **Run the project:**
    Simply open `index.html` (or `projects.html`) in any modern web browser.

## 🎨 Design Philosophy

The project follows the **Orbitron Design System**, focusing on:
* **Primary Color:** `#58a6ff` (Neon Blue)
* **Background:** Deep Space Charcoal (`#0d1117`)
* **Card Effect:** `backdrop-filter: blur(12px)` for a high-end glass feel.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
*Developed by Shokhrukhbek Khakimov*
