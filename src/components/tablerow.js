import React from 'react'

//pass this component a prop called key as a list of these will be created and react needs a key prop to 
//tell when components change
//pass this component a prop called text which is task text you wish to appear in row
class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td className="align-middle">{this.props.text}</td>
                <td style={styles.mybuttoncolumn} className="text-right">
                    <button type="button" className="btn btn-secondary btn-sm mt-1 mb-1">Done</button>
                </td>
                <td style={styles.mybuttoncolumn} className="text-right">
                    <button type="button" className="btn btn-secondary btn-sm mt-1 mb-1">Delete</button>
                </td>
            </tr> 
        )
    }

}

const styles={
    mybuttoncolumn:{
        width:"8%"
    }
}


export default TableRow