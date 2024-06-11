# React ToDo App

This application is a ToDo list built with React. It allows you to create, read, update, and delete tasks with reminders and notifications.

## Prerequisites

- Node.js (version 16 or higher)
- npm (version 7 or higher)
- Docker (optional for running with Docker)

## Installation and Running Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/Mamadou2518/ToDo-App.git
    cd react-todo-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Using Docker

### Building the Docker Image

1. Make sure Docker is installed and running on your machine.

2. Clone the repository (if not already done):

    ```bash
    git clone https://github.com/your-username/react-todo-app.git
    cd react-todo-app
    ```

3. Build the Docker image:

    ```bash
    docker build -t react-todo-app .
    ```

### Running the Docker Container

1. Run the container with the following command:

    ```bash
    docker run -p 3000:80 react-todo-app
    ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Nginx Configuration

The `nginx.conf` file is used to configure Nginx to serve the React application. Here is the content of this file:

```nginx
server {
    listen 80;

    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
