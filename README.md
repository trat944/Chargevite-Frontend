# Task Manager

Welcome to **Task Manager**! This web application is designed to help you efficiently manage your tasks. With Task Manager, you can view, modify, add statuses, add new tasks, and delete existing ones in real-time and get notified by mail, thanks to WebSockets integration and nodemailer.

## 🔧 Features
- **View Tasks**: Display a list of all tasks, categorized by status.
- **Modify Tasks**: Update task details such as title, description, and status.
- **Add Tasks**: Create new tasks with specific details.
- **Delete Tasks**: Remove tasks from the list.


## 🚀 Getting Started

To get started with Task Manager, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone git@github.com:trat944/Chargevite-Frontend.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd Chargevite-Frontend
    ```
3. **Install dependencies:**
    ```bash
    pnpm install
    ```
4. **Create the .env file in your root directory with the following content:**
    ```bash
    Create a file called .env and copy the content from .env.example.
    ```
    By default, the backend URL is set to `http://localhost:3000`. You can modify this in the `main.ts` file of the backend if needed.

5. **Run the development server:**
    ```bash
    pnpm dev
    ```


## 💻 Technologies Used

### Frontend:
- **[Vue.js](https://vuejs.org/)**: Building user interfaces with component-based architecture.
- **[Vue Router](https://router.vuejs.org/)**: Navigation and routing within the Vue application.
- **[Axios](https://axios-http.com/)**: Making HTTP requests to interact with the backend API.
- **[Vite](https://vitejs.dev/)**: Fast development server supporting modern JavaScript features and quick refresh times.

### Development Tools:
- **[TypeScript](https://www.typescriptlang.org/)**: Adding static types to JavaScript for improved development experience and code reliability.