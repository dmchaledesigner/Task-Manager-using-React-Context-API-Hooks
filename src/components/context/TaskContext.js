import { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';



export const TaskContext = createContext();



const TaskContextProvider = ({ children }) => {



    const [tasks, setTasks] = useState([
        {
            title: 'read a book',
            id: uuidv4(),

        },

        {
            title: 'wash the car',
            id: uuidv4(),

        },
        {
            title: 'write some code',
            id: uuidv4(),

        },
    ]);




    const removeTaskHandler = (id) => {
        const getTask = tasks.filter(task => task.id !== id);
        setTasks(getTask);
    }


    const addTaskHandler = (field) => {
        setTasks([...tasks, { title: field, id: uuidv4(), }]);
    }


    // add vbalues jhere to pass into the Provided
    const values = { tasks, setTasks, removeTaskHandler, addTaskHandler }

    return (
        <TaskContext.Provider value={values}>
            {children}
        </TaskContext.Provider>
    )
}



export default TaskContextProvider;
