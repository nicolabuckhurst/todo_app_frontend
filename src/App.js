import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Counter from './components/counter';
import Table from './components/table';
import {tasks, TasksContext} from './components/tasks-context'

class App extends Component {
  constructor(props){
    super(props);

    //create a counter for unique id's when new task is created..this is not a state as it doesn't need to be monitored for
    //change by react...we will not reuse id's when a task is deleted
    this.counter = 0;

    this.addTask = this.addTask.bind(this)
    this.toggleCompleteStatus = this.toggleCompleteStatus.bind(this)
    this.deleteTask = this.deleteTask.bind(this)

    //state initially contains an empty array for the tasks
    this.state = {tasks:[],
                  toggleCompleteStatus:this.toggleCompleteStatus,
                  deleteTask:this.deleteTask,
                  addTask:this.addTask,
                  }

  }


  //function for adding a new task and updating state
  addTask(taskText){
    console.log("called")
    //create a new uncompleted task based on taskText
    const task={
      id:this.counter,
      text:taskText,
      completed: false
    }
    //get current list of tasks stored in state and push new task onto end
    let taskList = this.state.tasks;
    taskList.push(task);
    //use setState to update the taskList stored in state
    this.setState({tasks:taskList})
    this.counter ++;
  }

  //function for changing task status to completed
  toggleCompleteStatus(id){
    //find task by id and toggle the completed property
    let taskList = this.state.tasks;
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].id == id){
        taskList[i].completed = !taskList[i].completed //toggle the boolean value
      }
    }
    //use setState to update taskList stored in State
    this.setState({tasks:taskList})
  }

  //function to delete task
  deleteTask(id){
    //find task by id and delete from array
    let taskList = this.state.tasks;
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].id == id){
        taskList.splice(i,1);
      }
    }
    //use setState to update taskList stored in State
    this.setState({tasks:taskList})
  }
  
  render() {
    return (
      <div style = {styles.transparentBox} className="d-flex flex-column">


        {/*wrap all the content except the footer in a div called "content"
        this makes the footer stick to the bottom
        of the viewport even when very little content on page
        there are no Bootstrap classes to do this automatically

        make the transparentBox that holds the content and the footer
        display flex (d-flex in bootstrap makes a container display flex and
        turns direct children into flex items)
        make the flex direction column so the "content" and "footer" are added one below the
        other just like block items so won't mess up any formatting

        make "content" flex-grow-1 so it grows in size to fill all the available vertical
        space in transparentBox (which is already set to height 100vh in css file)
        just leaving space for the footer*/}
            
        <div style={styles.content} className="pt-5 flex-grow-1"> {/*need padding as set navbar as fixed-top, makes it sit over the top of other content*/}
          
          <div className="container-fluid">
          <Header/>
            <TasksContext.Provider value={this.state}>
              <Form />
              <Counter />
              <Table toggleCompleteStatus={this.toggleCompleteStatus} deleteTask={this.deleteTask}/>
            </TasksContext.Provider>.
          </div> {/*end of container-fluid...bootstrap container for laying out components within main content of page*/}

        </div> {/*end of content div that resizes to whole of screen minus footer*/}

        <Footer/>
      </div> /*end of transparent box*/
    );
  }
}

const styles = {
  transparentBox:{
    height:"100vh"
  },
  content:{
    backgroundColor: "rgba(255,255,255,0.73)",
    overflowY: "auto"
  }
}

export default App;
