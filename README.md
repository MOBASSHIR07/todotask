# Live Demo : https://tasktodo.surge.sh/ , https://animated-donut-733dca.netlify.app/ 

React Todo Application
!

This is a modern, responsive todo application built with React.js. It features a clean user interface, local storage persistence, and essential task management functionalities like adding, editing, deleting, and filtering tasks. The application uses a custom context provider for state management, making it easy to share data across components.

Features ✨
Add Tasks: Quickly add new tasks with a title, description, and due date.

Edit Tasks: Update existing tasks with new information.

Delete Tasks: Remove tasks you've completed or no longer need.

Mark as Complete: Toggle the completion status of a task.

Local Storage Persistence: Your tasks are saved in your browser's local storage, so they're still there when you refresh the page.

Task Filtering: View all tasks, only active tasks, or only completed tasks.

Search Functionality: Easily find tasks by searching their titles.

Responsive Design: The app is optimized for both mobile and desktop screens.

Animations: Smooth transitions and animations powered by Framer Motion.

Technologies and Libraries 📦
This project leverages the following key technologies and libraries:

React: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

DaisyUI: A Tailwind CSS component library that provides pre-built, stylized components.

React Icons: A library for including popular icons in your React projects.

Framer Motion: A powerful and simple animation library for React to create dynamic UI.

Date-fns: A modern JavaScript date utility library for formatting dates.

ES6 Features and Concepts ⚛️
The codebase uses several modern JavaScript (ES6) features to ensure a clean and efficient development experience:

Arrow Functions: Used extensively for concise function syntax, particularly in event handlers and map, filter, and useEffect callbacks.

Destructuring Assignment: Simplifies the extraction of values from objects and arrays. For example, const { addTodo, todotask } = useContext(TodoContext); pulls properties directly from the context object.

Spread Syntax (...): Used for creating copies of arrays and objects, which is crucial for immutability in React state updates. For instance, const updatedTasks = task.map(t => ({ ...t, ...updatedData })); creates a new object with updated properties without mutating the original.

import and export: Standard ES6 module syntax is used to manage and share components, context, and other utilities across files.

useState Hook: Manages component-specific state, such as form input values and UI toggles (isOpen, isupdating).

useEffect Hook: Handles side effects, such as fetching data from local storage on component mount and updating filtered task lists when the main task state changes.

useContext Hook: Provides a way to pass data through the component tree without having to manually pass props down at every level. This is the core of the application's state management.

Functionality in Detail ⚙️
The application's logic is primarily handled within the TodoProvider.jsx file, which acts as the central state manager using React's Context API.

TodoProvider.jsx
This file exports the TodoContext and TodoProvider components, which encapsulate the application's state and logic.

State Management:

todotask: An array that holds all the tasks. This is the source of truth for the application's data.

completed and active: Derived states that are automatically updated whenever todotask changes, thanks to a useEffect hook.

filter: A string ("all", "completed", "active") that controls which tasks are displayed.

taskToDisplay: The array of tasks currently being rendered, which changes based on the filter and search input.

Core Functions:

getTask(): A utility function that retrieves tasks from local storage.

addTodo(item): Adds a new task to the todotask array and updates local storage.

deleteTodo(id): Removes a task by its ID and updates local storage.

editTodo(id, updatedData): Finds and updates a task by its ID, then saves the changes.

toggleComplete(id): Toggles the completed status of a task.

filterCategory(type): Updates the filter state to show a different category of tasks.

handleSearchTask(title): Filters the taskToDisplay based on the search input.

AddTodo.jsx
This component is responsible for rendering the task list and managing the "add/edit task" modal.

State: Uses useState to control the visibility of the modal (isOpen) and whether it's in "add" or "update" mode (isupdating).

Form Handling: Manages the form for adding and updating tasks. It uses e.preventDefault() to prevent the default form submission behavior and calls the appropriate context functions (addTodo or editTodo).

Animations: The task list is wrapped in AnimatePresence and each task item uses motion.div from Framer Motion to create dynamic enter and exit animations.

Props: It uses useContext(TodoContext) to access and use the shared state and functions.
# Project Structure :
```bash
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
    └── vite.svg
├── src
    ├── App.css
    ├── App.jsx
    ├── Context
    │   └── TodoProvider.jsx
    ├── assets
    │   ├── react.svg
    │   └── vistasystech_logo.jpg
    ├── components
    │   ├── AddTodo.jsx
    │   ├── Banner.jsx
    │   ├── Header.jsx
    │   ├── Loader.jsx
    │   ├── Spinner.jsx
    │   ├── TaskCard.jsx
    │   └── TaskDescription.jsx
    ├── index.css
    └── main.jsx
├── tailwind.config.js
└── vite.config.js


/.gitignore:
```

