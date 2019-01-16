import React from 'react'

 //as a default this has context has an empty task list and empty functions...in reality these will be 
 //passsed into TaskContext as an object passed as value prop        
const TasksContext = React.createContext(
    {tasks: [],
     toggleCompleteStatus: ()=>{},
     deleteTask:()=>{},
     addTask:()=>{}
    }
)

 export default TasksContext;