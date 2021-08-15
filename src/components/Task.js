import React from 'react';
import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';

const Task = ({ task }) => {

    const { removeTaskHandler, editTaskHandler } = useContext(TaskContext);

    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button
                    onClick={() => removeTaskHandler(task.id)}
                    className="btn-delete task-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>

                <button
                    onClick={() => editTaskHandler(task.id)}
                    className="btn-edit task-btn">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li >
    )
}

export default Task
