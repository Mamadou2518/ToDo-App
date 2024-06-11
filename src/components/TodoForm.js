import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [reminder, setReminder] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            addTodo({ task: value, reminder });
            setValue('');
            setReminder('');
        }
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                placeholder="What is your task?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input
                type="datetime-local"
                className='todo-input'
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};
