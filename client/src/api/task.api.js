import axios from 'axios'


export const getTasks = async () => {
    return await axios.get('http://localhost:4000/tasks')
}
export const createTask = async (task) => {
    await axios.post('http://localhost:4000/tasks', task)
}

export const deleteTask = async (id) => {
    return await axios.delete(`http://localhost:4000/tasks/${id}`)
}

export const getTask = async (id) => {
    return await axios.get(`http://localhost:4000/tasks/${id}`)
}

export const updateTask = async (id, newFields) => {
    return await axios.put(`http://localhost:4000/tasks/${id}`, newFields)
}