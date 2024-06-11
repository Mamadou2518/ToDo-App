import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const timers = todos.map(todo => {
            if (todo.reminder) {
                const reminderTime = new Date(todo.reminder).getTime() - new Date().getTime();
                if (reminderTime > 0) {
                    const timer = setTimeout(() => {
                        new Notification("Task Reminder", { body: todo.task });
                    }, reminderTime);
                    return timer;
                }
            }
            return null;
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, [todos]);

    const addTodo = ({ task, reminder }) => {
        setTodos([...todos, {
            id: uuidv4(),
            task,
            reminder,
            completed: false,
            isEditing: false
        }]);
    };

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (updatedTask, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updatedTask, isEditing: false } : todo));
    };

    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={index} />
                ) : (
                    <Todo task={todo} key={index}
                          toggleComplete={toggleComplete}
                          deleteTodo={deleteTodo}
                          editTodo={editTodo} />
                )
            ))}
        </div>
    );
};
