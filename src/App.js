import React, { Component } from 'react';
import Header from './components/header/index'
import Taskbar from './components/taskbar/index'
import Tasklist from './components/tasklist/index'


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Taskbar/>
      <Tasklist/>

      </div>

          );
  }
}

export default App;
