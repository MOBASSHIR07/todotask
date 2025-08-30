# 🚀 React Todo Application  

🔗 **Live Demo**:  
- [Surge Deploy](https://tasktodo.surge.sh/)  
- [Netlify Deploy](https://animated-donut-733dca.netlify.app/)  

---

## 📖 About  
This is a modern, responsive **Todo Application** built with **React.js**.  
It features a clean UI, task management (add, edit, delete, complete),  
local storage persistence, filtering, search, and smooth animations.  

The app uses a **custom Context Provider** for global state management,  
making data easily shareable across components.  

---

## ✨ Features  
- ➕ **Add Tasks** with title, description, and due date  
- ✏️ **Edit Tasks** anytime  
- ❌ **Delete Tasks** that are no longer needed  
- ✅ **Mark as Complete** / toggle task status  
- 💾 **Local Storage Persistence** (keeps tasks after refresh)  
- 🔍 **Search Tasks** by title  
- 🔄 **Task Filtering** → All | Active | Completed  
- 📱 **Responsive Design** (mobile & desktop)  
- 🎞️ **Animations** with Framer Motion  

---

## 🛠️ Technologies Used  
- ⚛️ **React.js**  
- 🎨 **Tailwind CSS**  
- 🌼 **DaisyUI**  
- 🔗 **React Icons**  
- 🎞️ **Framer Motion**  
- 📅 **date-fns**  

---

## ⚛️ ES6 & React Concepts Used  
- **Arrow Functions**  
- **Destructuring Assignment**  
- **Spread Syntax (`...`)** for immutability  
- **import/export** for modular code  
- **React Hooks**  
  - `useState` → local component state  
  - `useEffect` → side effects (localStorage sync, filtering)  
  - `useContext` → global state with Context API  

---

## ⚙️ Functionality Breakdown  

### 📌 `TodoProvider.jsx`  
- **State Management**  
  - `todotask` → source of truth for tasks  
  - `completed`, `active` → derived states via `useEffect`  
  - `filter` → "all" | "completed" | "active"  
  - `taskToDisplay` → dynamic list (filter + search)  

- **Core Functions**  
  - `getTask()` → load from localStorage  
  - `addTodo(item)` → add new task  
  - `deleteTodo(id)` → remove task  
  - `editTodo(id, updatedData)` → update task info  
  - `toggleComplete(id)` → toggle done/undone  
  - `filterCategory(type)` → filter tasks  
  - `handleSearchTask(title)` → search tasks  

---

### 📌 `AddTodo.jsx`  
- Modal for **adding/updating tasks**  
- State control: `isOpen`, `isupdating`  
- Submits tasks via Context functions  
- Smooth **Framer Motion animations**  

---

## 📂 Project Structure  

```bash
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── Context
│   │   └── TodoProvider.jsx
│   ├── assets
│   │   ├── react.svg
│   │   └── vistasystech_logo.jpg
│   ├── components
│   │   ├── AddTodo.jsx
│   │   ├── Banner.jsx
│   │   ├── Header.jsx
│   │   ├── Loader.jsx
│   │   ├── Spinner.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskDescription.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
