# Simple Todo App

A lightweight, responsive task-manager you can open in any modern browser.
Add tasks, set optional due dates, mark items complete, and keep track of your progress—all with zero build steps or backend.

## Functionality

When you click the “+ Add Todo” button, a small modal opens so you can enter a task name and, if you like, assign a due date. Submitted items appear immediately in the list below, each with its own checkbox and delete icon. Checking an item strikes it out and updates the banner at the top of the page, which always tells you exactly how many tasks are finished versus how many remain. If you change your mind, you can uncheck the box to restore the task or click the trash button to remove it entirely.

## Technology

The project is written in plain HTML, CSS, and modern JavaScript shipped as an ES module, so there is no need for bundlers or transpilers. The markup follows semantic HTML5 elements and the BEM naming convention, making the structure clear and styles easy to maintain. CSS custom properties and Flexbox handle the responsive layout, while a handful of utility classes keep the codebase small. All state changes are managed directly in the DOM with JavaScript, which also handles persistence by reading from and writing to the browser’s localStorage.

## Deployment

This project is deployed on GitHub Pages:

- [https://ivan-kwetey.github.io/se_project_todo-app/]
