import React, { useEffect, useState } from 'react'
import { useTask } from '../context/task.context.jsx'
import { Link, useNavigate } from 'react-router-dom'

export default function taskPage() {

  const navigate = useNavigate()
  const { tasks, loadTask, handleDelete } = useTask()

  useEffect(() => {

    loadTask()
  }, [])



  return (
    <div>
      <h1>tareas</h1>

      {
        tasks.map(x => {
          return (
            <article key={x.id}>
              <h2>{x.title}</h2>
              <p>{x.description}</p>
              <span>{x.done ? '✅' : '❌'}</span>
              <small>{x.createAt}</small>
              <button onClick={() => { handleDelete(x.id) }}>delete</button>
              <button onClick={() => { navigate(`/edit/${x.id}`) }}>edit</button>
            </article>
          )
        })
      }
    </div>
  )
}
