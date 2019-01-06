import React from 'react'

//pass this component a prop called key as a list of these will be created and react needs a key prop to 
//tell when components change
//pass this component a prop called text which is task text you wish to appear in row
class TableRow extends React.Component{
    constructor(props){
        super(props)

        this.state={rowClass:"myRow"}

        this.handleDoneClick = this.handleDoneClick.bind(this)
    }

    handleDoneClick(event){
        event.preventDefault()
        this.setState({rowClass:"myRow myRowAfterButtonClick"})
        setTimeout(()=>{this.props.toggleCompleteStatus(this.props.task.id); 
                        this.setState({rowClass:"myRow"})}, 500)
    }

    render(){
        let textStyle = {}
        if(this.props.task.completed == true){
            textStyle = styles.completedTextStyle
        }

        return(
            <tr className={this.state.rowClass}>
                <td className="align-middle" style={textStyle}>{this.props.task.text}</td>
                <td style={styles.mybuttoncolumn} className="text-right">
                    {this.props.task.completed ? (
                        <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleDoneClick}>Reinstate Task</button>
                    ) : (
                        <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleDoneClick}>Done</button>
                    )
                    }
                </td>
                <td style={styles.mybuttoncolumn} className="text-right">
                    {this.props.task.completed ? (
                        null
                    ) :
                    (
                        <button type="button" className="btn btn-secondary btn-sm">Delete</button>
                    )
                    }
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