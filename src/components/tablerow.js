import React from 'react'

//pass this component a prop called key as a list of these will be created and react needs a key prop to 
//tell when components change
//pass this component a prop called text which is task text you wish to appear in row
class TableRow extends React.Component{
    constructor(props){
        super(props)

        //set className as a state so you can change the classname of <tr> and trigger an animation...see app.css for class definitions
        this.state={rowClass:"myRow"}

        this.handleCompletionToggleClickAsync = this.handleCompletionToggleClickAsync.bind(this)
        this.handleDeleteClickAsync = this.handleDeleteClickAsync.bind(this);
    }

    async handleCompletionToggleClickAsync(event){
        console.log("called")
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
        setTimeout(async()=>{await this.props.toggleCompleteStatusAsync(this.props.task.taskId);
                        setTimeout(()=>{this.setState({rowClass:"myRow"})}, 10);
                        }, 500)
    }


     async handleDeleteClickAsync(event){
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
        setTimeout(async()=>{await this.props.deleteTaskAsync(this.props.task.taskId)}, 500)
    }
 
    render(){
        let textStyle = {}
        if(this.props.task.taskCompleted == true){
            textStyle = styles.completedTextStyle
        }

        return(
            <tr className={this.state.rowClass}>
                <td className="align-middle" style={textStyle}>{this.props.task.taskDescription}</td>
                <td style={styles.mybuttoncolumn} className="text-right">
                    {this.props.task.taskCompleted ? (
                        <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleCompletionToggleClickAsync}>Reinstate Task</button>
                    ) : (
                        <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleCompletionToggleClickAsync}>Done</button>
                    )
                    }
                </td>
                <td style={styles.mybuttoncolumn} className="text-right">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleDeleteClickAsync}>Delete</button>
                </td>
            </tr> 
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