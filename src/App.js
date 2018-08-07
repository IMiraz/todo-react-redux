import React, { Component } from 'react';
import Header from './components/header/index'
import Taskbar from './components/taskbar/index'
import Tasklist from './components/tasklist/index'
import ReduxDemo from './reduxDemo'

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Taskbar/>
      <Tasklist/>
     <ReduxDemo/>

      </div>

          );
  }
}

export default App;
