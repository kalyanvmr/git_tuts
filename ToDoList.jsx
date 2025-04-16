import {useState} from 'react';
 export function ToDoList(){
        const [task,setTask] = useState("");
        const [tasks,setTasks] = useState([]);

        const addTask = ()=>{
            if(task.trim() !==""){
            setTasks([...tasks, task.trim()]);
                setTask("");
            }
        }

        const removeTask = (index) => {
            const updated = [...tasks];
            updated.splice(index,1);
            setTasks(updated);
        }

    return(
            <>
            <h1>To Do List</h1>
            <input type='text' onChange={(e) => setTask(e.target.value)} value={task} placeholder='Enter to do Task'/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {
                    tasks.map((task,index) => (
                        
                        <li key={index}>{task} 
                            <button onClick={()=> removeTask(index)}>Remove</button>
                        </li>
                    ))
                }

            </ul>

            </>
    );
 }