import React, { useState, useEffect } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);
    const [reminder, setReminder] = useState(task.reminder);

    useEffect(() => {
        setValue(task.task);
        setReminder(task.reminder);
    }, [task]);

    const handleSubmit = e => {
        e.preventDefault();
        editTodo({ task: value, reminder }, task.id);
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                placeholder="Update Task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input
                type="datetime-local"
                className='todo-input'
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    );
};
