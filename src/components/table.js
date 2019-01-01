import React from 'react'
import TableRow from './tablerow'

//pass a prop which is an array of task object to table and it will create a table with the appropriate row components
//a task object will look like this {id:"number", text:"string"}
class Table extends React.Component{
    
    createRows(){
        let tableRowsToRender =[];
        for(let i=0; i<this.props.tasks.length;i++){
            tableRowsToRender.push(
                <TableRow key={this.props.tasks[i].id} text={this.props.tasks[i].text} /> //react needs this key to identify when an aray element changes
            )
        }
        return tableRowsToRender
    }

    render(){
        return(
            <div class="row">
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

export default Table