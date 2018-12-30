import React from 'react';

class Header extends React.Component{

    render(){
        return(
            //row for heading
            <div className="row mb-3 mt-3">
                <div className="col-12">
                    <p className="display-4 text-center">To Do List</p>
                </div>
            </div>
        )    
    }
}

export default Header;