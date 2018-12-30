import React from 'react'

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

    handleSubmit(event){
        event.preventDefault()
        alert("you submitted the following task:" +  this.state.value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div class="form-row justify-content-center align-items-center mb-2 pb-4">
                    <div class="col-12 col-lg-8">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="enter new task here" value={this.state.value} onChange={this.handleChange} />
                            <div class="input-group-append">
                                <button class="btn btn-secondary" type="submit">submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form