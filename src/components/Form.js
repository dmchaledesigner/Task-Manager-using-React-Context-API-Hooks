import React, { useState } from 'react';
import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';


const Form = () => {


    const { addTaskHandler } = useContext(TaskContext);



    const [title, setTitle] = useState('');


    const formSubmitHandler = (e) => {
        e.preventDefault();
        addTaskHandler(title);

        setTitle('');


    }


    return (
        <form className="form" onSubmit={formSubmitHandler}>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Add Task..."
                required
                className="task-input"
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task</button>
                <button className="btn clear-btn">Clear Task</button>
            </div>




        </form>
    )
}


export default Form
