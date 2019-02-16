import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Counter from './components/counter';
import Table from './components/table';
import axios from 'axios';
import TaskService from './service/tasks'

class App extends Component {
  constructor(props){
    super(props);

    //create a counter for unique id's when new task is created..this is not a state as it doesn't need to be monitored for
    //change by react...we will not reuse id's when a task is deleted
    this.counter = 0;

    //create an empty array to hold tasks as state
    this.state = {tasks:[]}

    //bind add task function to this object
    this.addTaskAsync = this.addTaskAsync.bind(this)
    this.toggleCompleteStatusAsync = this.toggleCompleteStatusAsync.bind(this)
    this.deleteTaskAsync = this.deleteTaskAsync.bind(this)
  }

  getTaskById(id){
    for(let i=0; i<this.state.tasks.length; i++){
      if(this.state.tasks[i].taskId == id){
        return this.state.tasks[i]
      }
    }
  }

  async componentDidMount() {
    let tasks = []
    try{
      tasks = await TaskService.getTasksAsync();
    }catch(e){
      console.log(e)
    }
    this.setState({tasks: tasks});
  }

  //function for adding a new task and updating state..it returns a promise that resolves to undefined once new task is added and then tasks are rechecked (as nothing is returned from function)
  async addTaskAsync(taskText){
    //create a new uncompleted task based on taskText
    const task={
      'taskDescription': taskText,
      'taskCompleted': 0,
      'userId': 1
    }
    
    let tasks =[]
    try{
      //wait for the promise returned from addTaskAsync to resolve
      await TaskService.addTaskAsync(task)
      //THEN wait for getTasksAsync to reolve
      tasks = await TaskService.getTasksAsync()
    } catch(e){
      console.log(e)
    }
    this.setState({tasks:tasks})
  }

  //function for changing task status to completed ..it returns a promise that resolves to undefined once new task is added and task is rechecked (but we don't return anything from this function)
  async toggleCompleteStatusAsync(id){
    console.log("toggle called")
    let newCompletionStatus = this.getTaskById(id).taskCompleted == 0 ? 1 : 0

    let task = {}
    try{
      //wait for completion status to be changed
      await TaskService.changeCompletionStatusAsync(id, newCompletionStatus)
      //THEN get the task back from database
      task = await TaskService.getTaskAsync(id)
    } catch(e){
      console.log(e)
    }
   
    let newTaskList =[]
    for(let i=0; i<this.state.tasks.length; i++){
      if(this.state.tasks[i].taskId == id){
        newTaskList.push(task)
      } else {
        newTaskList.push(this.state.tasks[i])
      }
    }

    //use setState to update taskList stored in State
    this.setState({tasks:newTaskList})
  }

  //function to delete task ...returns a promise that resolves to undefined when task is deleted as this fiunction doesnt return anything
  async deleteTaskAsync(id){

    try{
      //wait for task to be deleted
      await TaskService.deleteTaskAsync(id)
    } catch (e){
      console.log(e)
    }

    let newTaskList =[]
    for(let i=0; i<this.state.tasks.length; i++){
      if(this.state.tasks[i].taskId != id){
        newTaskList.push(this.state.tasks[i])
      }
    }
      //use setState to update taskList stored in State
    this.setState({tasks:newTaskList})
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
            <Form addTaskAsync={this.addTaskAsync}/>
            <Counter count={this.state.tasks.filter(function(element){return(element.taskCompleted==false)}).length} />
            <Table tasks={this.state.tasks} toggleCompleteStatusAsync={this.toggleCompleteStatusAsync} deleteTaskAsync={this.deleteTaskAsync}/>
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
