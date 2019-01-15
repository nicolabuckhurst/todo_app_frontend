import React from 'react'
import {TasksContext} from './tasks-context'

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state={value:""}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
        this.setState({value:event.target.value})
    }

    handleSubmit(event, sumbitHandler){
        event.preventDefault()
        sumbitHandler(this.state.value)
        this.setState({value:""})
    }

    render(){
        return(
            <TasksContext.Consumer>
            {({tasks,toggleCompleteStatus,deleteTask,addTask}) => (
            <form onSubmit={(event)=>{this.handleSubmit(event,addTask)}}>
                <div className="form-row justify-content-center align-items-center mb-2 pb-4">
                    <div className="col-12 col-lg-8">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="enter new task here" value={this.state.value} onChange={this.handleChange} />
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="submit">submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            )}
            </TasksContext.Consumer>
        )
    }
}



export default Form