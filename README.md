# Ultimate Technical Dictionary & Study Tool

A lightweight, feature-rich, single-page web application designed to help mastery of technical vocabulary, symbols, and concepts.

## 📖 Origin Story

**This project started some time ago as a way to make studying for one of my exams more fun.** What began as a simple static list to review keywords has evolved into a dynamic interactive study tool. I wanted a way to not just read definitions, but to actively practice them, track which words I reviewed, and manage the data without needing complex server setups.

## ✨ Key Features

### 🧠 Study & Practice
* **🌍 Instant Translation:** Select a target language (Spanish, French, Chinese, etc.) and click the language icon <i class="fa fa-language"></i> to instantly translate the term, meaning, and synonym. Click again to revert to the original text.
* **Practice Mode (Quiz):** A focused flashcard-style interface. It picks a random word, hides the meaning/synonym, and lets you reveal the answer.
* **View Tracking:** Automatically increments the "view count" for words you study in Practice Mode, helping you identify your most-reviewed terms.
* **Text-to-Speech (TTS):** Click the speaker icon 🔊 to hear the pronunciation of any term (original or translated) using the browser's native speech engine.

### 🛠 Data Management
* **Full CRUD:** Add, Edit, and Delete words directly within the app.
* **Permanent Favorites:** Mark words as favorites; the app remembers them even after you close the browser.
* **Backup & Restore:** * **Export:** Download your entire dictionary (including your edits) as a `.json` file.
    * **Import:** Restore your data on a different device or browser.
* **Smart Reset:** A "panic button" to wipe local changes and revert to the original `data-json.js` source file.

### 🎨 UI & UX
* **Dark/Light Mode:** Toggle between themes with a single click. Preferences are saved automatically.
* **Advanced Filtering:** Filter by Type, Name, Meaning, or a Global search that scans all fields at once.
* **Sorting:** Sort by Favorites, A-Z, Z-A, Newest, or Most Viewed.

## 🚀 Tech Stack

This project is built to be **zero-dependency** and **serverless**. You do not need Node.js, NPM, or a backend database.

* **Vue.js 3:** For reactive data binding and component logic.
* **Bootstrap 5:** For modern, responsive styling and modals.
* **FontAwesome:** For UI icons.
* **LocalStorage API:** For saving your data and preferences directly in the browser.
* **MyMemory API:** Used for the client-side translation feature (requires internet connection).

## 📦 How to Run

1.  Download the files to a folder.
2.  Ensure `index.html` and `data-json.js` are in the same directory.
3.  **Simply open `index.html` in your web browser.**

*No installation or local server required.*

## 📂 Data Structure

The app loads default data from `data-json.js`. The variable must be named `Dictionary`.

**Example:**
```javascript
var Dictionary = [
  {
    "id": 1,
    "type": "bioMed",
    "name": "Hypertension",
    "meaning": "High blood pressure",
    "synonym": "HBP",
    "views": 5,
    "fav": true
  },
  // ... more words
];