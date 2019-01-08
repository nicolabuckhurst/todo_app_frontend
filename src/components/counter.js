import React from 'react'

//pass a prop called count to this component containing the total number of tasks remaining
class Counter extends React.Component{
   render(){
       return(
            <div className="row mb-4 justify-content-center">
                <div className="col-10 text-center">
                    <button type="button" className="btn btn-lg" style={styles.counterButton}>
                        Tasks Remaining: <span className="badge badge-light ml-2">{this.props.count}</span>
                        <span className="sr-only">tasks to do</span>
                    </button>
                </div>
            </div> 
       )
   }
}

const styles={
    counterButton: {
        backgroundColor: "midnightblue",
        color: "white"
    }
}

export default Counter