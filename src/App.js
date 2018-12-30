import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div style = {styles["transparent-box"]} className="d-flex flex-column">


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
            
        <div style={styles["content"]} className="pt-5 flex-grow-1"> {/*need padding as set navbar as fixed-top, makes it sit over the top of other content*/}
          
          <div className="container-fluid">
            <Header/>

          </div> {/*end of container-fluid...bootstrap container for laying out components within main content of page*/}

        </div> {/*end of content div that resizes to whole of screen minus footer*/}

        <Footer/>
      </div> /*end of transparent box*/
    );
  }
}

const styles = {
  "transparent-box":{
    "height":"100vh"
  },
  "content":{
    "background-color": "rgba(255,255,255,0.73)",
    "overflow-y": "auto"
  }
}

export default App;
