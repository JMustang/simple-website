import React, { useState, useEffect } from 'react';
import { getTaskById, putTask } from "../services/TaskService";

export default function TaskEdit({history}) {
    const { id } = history.location.state
    const [task, setTask] = useState({})
    const [taskError, setTaskError] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        getTaskById(id)
            .then(res => {
                setTask(res)
                setTitle(res.title)
                setDescription(res.description)
            })
            .catch(err => setTaskError(err))
    }, [id])

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const toEdit = (event) => {
        event.preventDefault()
        task.title = title
        task.description = description


        putTask(id, task)
            .then(() => history.push('/task-list'))
            .catch(err => setTaskError(err))
    }

    if (taskError) {
        return(
            <div>
                <h2 className="text-danger">Something is not working well, notify the tac guy.</h2>
            </div>
        )
    } else {
        return(
            <div className="row p-2">
                <div className="col-md-4 p-2"></div>
                <div className="col-md-4 p-2">
                    <div className="card bg-info text-white">
                        <div className="card-header text-center">
                            <h4 className="card-text">Edit tasks</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title" className="form-control-label">Title</label>
                                    <input 
                                        type="text"
                                        id="title"
                                        className="form-control"
                                        value={title}
                                        onChange={onChangeTitle}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" className="form-control-label">Description</label>
                                    <textarea 
                                        name="description"
                                        id="description"
                                        cols="30"
                                        rows="5"
                                        className="form-control"
                                        value={description}
                                        onChange={onChangeDescription}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-light btn-lg btn-block" onClick={toEdit}>Edit</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2"></div>
            </div>
        )
    }   
}