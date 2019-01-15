import React from 'react'

//default value for TaskContext.Provider if a value isn't passed
const tasks = [{id:0,
                text:"feed cat",
                completed: false}      
              ]

const TasksContext = React.createContext(
    {tasks: tasks,
     toggleCompleteStatus: ()=>{},
     deleteTask:()=>{},
     addTask:()=>{}
    }
)

export {tasks, TasksContext};