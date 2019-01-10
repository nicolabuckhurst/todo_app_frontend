import React from 'react'
import {Transition, TransitionGroup, CSSTransition} from 'react-transition-group'

//pass this component a prop called key as a list of these will be created and react needs a key prop to 
//tell when components change
//pass this component a prop called text which is task text you wish to appear in row
class TableRow extends React.Component{
    constructor(props){
        super(props)

        this.deleteTask=true;

        //set className as a state so you can change the classname of <tr> and trigger an animation...see app.css for class definitions
        this.state={rowClass:"myRow"}

        this.handleCompletionToggleClick = this.handleCompletionToggleClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleCompletionToggleClick(event){
        event.preventDefault()
       //toggle completion status of the task ..this will moidify the key of this table row so its removed from 
       //the virtual DOM and replaced with a new one with a completed task and a new key..this means that the
       //transition animation gets triggered as it will only get triggered on appear or on the change of value of in prop...
       //problem is we don't want to cange the show state as the task is still show==true...its just changed a property
        this.props.toggleCompleteStatus(this.props.task.id)
    }


    handleDeleteClick(event){
        event.preventDefault()
        //delete the task ...no animation
        this.props.deleteTask(this.props.task.id);
    }

    render(){
        let textStyle = {}
        if(this.props.task.completed == true){
            textStyle = styles.completedTextStyle
        }

        return(
                <Transition in={this.props.task.show} appear={true} timeout={750}>
                {(state)=>(
                <tr className={"myfade myfade-" +state}>
                    <td className="align-middle" style={textStyle}>{this.props.task.text}</td>
                    <td style={styles.mybuttoncolumn} className="text-right">
                        {this.props.task.completed ? (
                            <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleCompletionToggleClick}>Reinstate Task</button>
                        ) : (
                            <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleCompletionToggleClick}>Done</button>
                        )
                        }
                    </td>
                    <td style={styles.mybuttoncolumn} className="text-right">
                        <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleDeleteClick}>Delete</button>
                    </td>
                </tr> 
                )}
                </Transition> 
        
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