import React from 'react';
import { useContext } from 'react';

import { TaskContext } from './context/TaskContext';
import Task from '../components/Task';


const TaskList = () => {

    const { tasks } = useContext(TaskContext);

    return (
        <div>
            {tasks.length ?
                <ul className="list">
                    {tasks.map(task =>
                        <Task task={task} key={task.id} />
                    )}
                </ul>
                : <div className="no-tasks">No Tasks</div>}
        </div>
    )
}

export default TaskList
