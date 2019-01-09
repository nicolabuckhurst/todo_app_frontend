import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'

//default test created by create-react-app 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("the page renders correctly", ()=>{
  let component; //variable for holding testrenderer instance for App
  let tree; //variable to hold tree object created from testrenderer

  beforeAll(()=>{
     //create a test renderer instance with passed react element...doesn't use DOM but renders the component tree into memory
    component = renderer.create(<App />);
  })

  it('renders correctly onloading', ()=>{
    tree = component.toJSON();  //creates an object representing rendered tree..first time test is run this is used to create
                                //snapshot file
    expect(tree).toMatchSnapshot(); //subsequent time test is run will compare tree to snapshot..if you need to update snapshot
                                  //run jest -updatesnapshots MAKE SURE ANY FAILING SNAPSHOT TESTS DUE TO BUGS ARE FIXED FIRST
                                  //as ALL failing snapshots will be updated
  })

  it('renders correctly when a new task is added', ()=>{
    component.getInstance().addTask("feed dog"); //gets instance of root component (App.js) and manually trigger callback to add a new task
    tree = component.toJSON() //update tree object with newly rendered component and create a snapshot of 1st run
    expect(tree).toMatchSnapshot(); //compare tree with snapshot
  })  

  it('renders correctly when multiple tasks have been added', ()=>{
    component.getInstance().addTask("feed cat"); //gets instance of root component (App.js) and manually trigger callback to add a new task
    component.getInstance().addTask("feed bird");
    tree = component.toJSON() //update tree object with newly rendered component and create a snapshot of 1st run
    expect(tree).toMatchSnapshot(); //compare tree with snapshot
  })  
  
  it('renders correctly when task is completed', ()=>{
    component.getInstance().toggleCompleteStatus(0); //gets instance of root component (App.js) and manually trigger callback to add a new task
    tree = component.toJSON() //update tree object with newly rendered component and create a snapshot of 1st run
    expect(tree).toMatchSnapshot(); //compare tree with snapshot
  })  

  it('renders correctly when task is reinstated', ()=>{
    component.getInstance().toggleCompleteStatus(0); //gets instance of root component (App.js) and manually trigger callback to add a new task
    tree = component.toJSON() //update tree object with newly rendered component and create a snapshot of 1st run
    expect(tree).toMatchSnapshot(); //compare tree with snapshot
  })  

  it('renders correctly when task is deleted', ()=>{
    component.getInstance().deleteTask(0); //gets instance of root component (App.js) and manually trigger callback to add a new task
    tree = component.toJSON() //update tree object with newly rendered component and create a snapshot of 1st run
    expect(tree).toMatchSnapshot(); //compare tree with snapshot
  })  
  
})

