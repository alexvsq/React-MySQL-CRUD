import React, { useContext, useEffect } from 'react'
import { Form, Formik } from 'formik'
import { useTask } from '../context/task.context.jsx';
import { useParams } from 'react-router-dom';

export default function taskForm() {

  const { handleCreateTask, handleGetTask, handleUpdateTask } = useTask()
  const { id } = useParams();

  useEffect(() => {
    handleGetTask(id)

  }, [])

  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        onSubmit={async (values, actions) => {
          if (id) {
            await handleUpdateTask(id, values)
            return
          }
          try {
            const result = await handleCreateTask(values)
            actions.resetForm()
            console.log(result);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {
          ({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <h1>{id ? 'Editar' : 'Nueva tarea'}</h1>
              <label>title</label>

              <input
                type="text" name='title' placeholder='title'
                onChange={handleChange}
                value={values.title}
              />

              <label>description</label>
              <textarea
                name="description"
                id=""
                cols='10' rows='3'
                placeholder='description'
                onChange={handleChange}
                value={values.description}
              ></textarea>

              <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'saving...' : 'save'}</button>
            </Form>
          )
        }

      </Formik>
    </div>
  )
}
