import React from 'react'
import TableRow from './tablerow'
import { TasksContext } from './tasks-context';

//pass a prop which is an array of task object to table and it will create a table with the appropriate row components
//a task object will look like this {id:"number", text:"string", completed:"boolean"}
class Table extends React.Component{

    
    createRows(){
        let tasks = this.context.tasks

        let tableRowsToRender =[];
        for(let i=0; i<tasks.length;i++){
            //if task isn't complete add to beginning of array using unshift ...this means non completed tasks will appear most rrcently added first
            if(tasks[i].completed == false){
                tableRowsToRender.unshift(
                    <TableRow key={tasks[i].id} task={tasks[i]}  /> //react needs this key to identify when an aray element changes
                )
            } else {
            //if task is complete add to the end of the array..completed tasks will appear in order they were added most recent last
                tableRowsToRender.push(
                    <TableRow key={tasks[i].id} task={tasks[i]} /> //react needs this key to identify when an aray element changes
                )
            }
        }
        return tableRowsToRender
    }

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <p className="h3">Task List</p>
                        </div>
                    </div>
                     <div className="row justify-content-center">
                         <div className="col-12 col-lg-8">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <tbody>
                                        {this.createRows()}
                                    </tbody>
                                </table>
                            </div>
                        </div>  
                    </div>         
                </div>
            </div>
        )
    }
}

Table.contextType = TasksContext

export default Table