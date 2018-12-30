import React from 'react'

class Footer extends React.Component{
    render(){
        return(
         //footer that should stick to bottom of screen no matter what the size of the content above
            <footer style={styles["my-footer"]}>
                {/*container fluid makes it full width of page*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-right mt-2 mb-2">
                            <a className="text-light" href="#">Footer</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

const styles = {
    "my-footer":{
        "background-color": "gray",
        "color":"white"
    }
  }

export default Footer