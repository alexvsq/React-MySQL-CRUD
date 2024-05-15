import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskPage from './pages/taskPage.jsx'
import TaskForm from './pages/taskForm.jsx'
import NotFound from './pages/notFound.jsx'
import Navbar from './components/navbar.jsx'
import { TaskProvider } from './context/task.context.jsx'

export default function App() {
  return (
    <TaskProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='/edit/:id' element={<TaskForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TaskProvider>
  )
}
