import React, { createContext, useContext, useState } from 'react'
import { getTasks, deleteTask, getTask, updateTask, createTask } from '../api/task.api.js';

export const TaskContext = createContext();


export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context
}

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    async function loadTask() {
        const result = await getTasks()
        console.log(result);
        setTasks(result.data)
    }
    async function handleCreateTask(task) {
        try {
            const result = await createTask(task)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    async function handleDelete(id) {
        try {
            const result = await deleteTask(id)
            const arrTasks = tasks.filter(task => task.id !== id)
            setTasks(arrTasks)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleGetTask(id) {
        try {
            const result = await getTask(id)
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }
    async function handleUpdateTask(id, newFields) {
        try {
            const response = await updateTask(id, newFields)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, loadTask, handleDelete, handleGetTask, handleUpdateTask, handleCreateTask }}>
            {children}
        </TaskContext.Provider>
    )
}
