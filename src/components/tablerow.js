import React from 'react'
import {TasksContext} from './tasks-context'

//pass this component a prop called key as a list of these will be created and react needs a key prop to 
//tell when components change
//pass this component a prop called text which is task text you wish to appear in row
class TableRow extends React.Component{
    constructor(props){
        super(props)

        //set className as a state so you can change the classname of <tr> and trigger an animation...see app.css for class definitions
        this.state={rowClass:"myRow"}

        this.handleCompletionToggleClick = this.handleCompletionToggleClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleCompletionToggleClick(event, completionToggler){
        event.preventDefault()
        //change the className using setState so render is called with new className and css transition is triggered
        this.setState({rowClass:"myRow myRowAfterButtonClick"})
        //the animations to shrink row takes 0.5s to complete so use setTimeout to delay next steps from being 
        //executed until animation is complete
        //once animation is complete change task status to complete ..this changes state in app conponent and page is
        //rerendered ... remember to set classNames back at end otherwise this row won't appear as completed at bottom 
        //of table as it will be shrunk and invisible 
        //had some difficulty calling this inside setTimeout due to this having context of winow not this object...solved by
        //using arrow functions which don't have their own this but inherit from the enclosing lexical context.
        //added an extra 10ms delay between toggling status of completion and making row reappear in animation....without this
        //safari does not render the css transition properly...I DON'T REALLY KNOW
        setTimeout(()=>{completionToggler(this.props.task.id); 
                      setTimeout(()=>{this.setState({rowClass:"myRow"})}, 10);}, 500) 
    }


    handleDeleteClick(event, deleteHandler){
        event.preventDefault()
        //change the className using setState so render is called with new className and css transition is triggered
        this.setState({rowClass:"myRow myRowAfterButtonClick"})
        //the animations to shrink row takes 0.5s to complete so use setTimeout to delay next steps from being 
        //executed until animation is complete
        //once animation is complete change task status to complete ..this changes state in app conponent and page is
        //rerendered ... remember to set classNames back at end otherwise this row won't appear as completed at bottom 
        //of table as it will be shrunk and invisible 
        //had some difficulty calling this inside setTimeout due to this having context of winow not this object...solved by
        //using arrow functions which don't have their own this but inherit from the enclosing lexical context.
        setTimeout(()=>{deleteHandler(this.props.task.id)}, 500)
    }

    render(){
        let textStyle = {}
        if(this.props.task.completed == true){
            textStyle = styles.completedTextStyle
        }

        return(
            <TasksContext.Consumer>
            {({tasks,toggleCompleteStatus,deleteTask,addTask}) => (
            <tr className={this.state.rowClass}>
                <td className="align-middle" style={textStyle}>{this.props.task.text}</td>
                <td style={styles.mybuttoncolumn} className="text-right">
                    {this.props.task.completed ? (
                        <button type="button" className="btn btn-secondary btn-sm" onClick={(event)=>{this.handleCompletionToggleClick(event,toggleCompleteStatus)}}>Reinstate Task</button>
                    ) : (
                        <button type="button" className="btn btn-secondary btn-sm" onClick={(event)=>{this.handleCompletionToggleClick(event, toggleCompleteStatus)}}>Done</button>
                    )
                    }
                </td>
                <td style={styles.mybuttoncolumn} className="text-right">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={(event)=>{this.handleDeleteClick(event,deleteTask)}}>Delete</button>
                </td>
            </tr> 
            )}
            </TasksContext.Consumer>
        )
    }

}

const styles={
    mybuttoncolumn:{
        width:"8%"
    },
    completedTextStyle:{
        color:"darkgray",
        textDecoration: "line-through"
    }
}


export default TableRow