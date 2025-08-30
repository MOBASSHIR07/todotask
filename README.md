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

## ⚛️  ES6 Features and Concepts ⚛️ 
- **Arrow Functions** :  Used extensively for concise function syntax, particularly in event handlers and map, filter, and useEffect callbacks.
  
- **Destructuring Assignment** :  Simplifies the extraction of values from objects and arrays. For example, const { addTodo, todotask } = useContext(TodoContext); pulls properties directly from the context object.

 
- **Spread Syntax (`...`)** : Used for creating copies of arrays and objects, which is crucial for immutability in React state updates. For instance, const updatedTasks = task.map(t => ({ ...t, ...updatedData })); creates a new object with updated properties without mutating the original.
-  
- **import/export** :Standard ES6 module syntax is used to manage and share components, context, and other utilities across files.
-   
- **React Hooks**  
  - `useState` → Manages component-specific state, such as form input values and UI toggles (isOpen, isupdating  
  - `useEffect` → Handles side effects, such as fetching data from local storage on component mount and updating filtered task lists when the main task state changes.  
  - `useContext` → Provides a way to pass data through the component tree without having to manually pass props down at every level. This is the core of the application's state management.

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
