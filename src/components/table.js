import React from 'react'

//pass a prop which is an array of task object to table and it will create a table with the appropriate row components
//a task object will look like this {id:"number", text:"string"}
class Table extends React.Component{
    
    createRows(){
        let tableRowsToRender =[];
        for(let i=0; i<this.props.tasks.length;i++){
            tableRowsToRender.push(
                <tr key={this.props.tasks[i].id}> {/*react needs this key to identify when an aray element changes*/}
                    <td className="align-middle">{this.props.tasks[i].text}</td>
                    <td style={styles.mybuttoncolumn} className="text-right">
                        <button type="button" className="btn btn-secondary btn-sm mt-1 mb-1">Done</button>
                    </td>
                    <td style={styles.mybuttoncolumn} className="text-right">
                        <button type="button" className="btn btn-secondary btn-sm mt-1 mb-1">Delete</button>
                    </td>
                </tr>
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

const styles={
    mybuttoncolumn:{
        width:"8%"
    }
}

export default Table