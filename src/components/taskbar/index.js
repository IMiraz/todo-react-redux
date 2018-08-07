import React from 'react'
import {connect} from 'react-redux'
import{bindActionCreators} from 'redux'
import {addTask} from '../action/index'

 class Taskbar extends React.Component{

  render() {
       return(
     <div>
     <input type="text" placeholder="Add Your Task"/>
     <button>Add Task</button>
      </div>
       )
  };

// function mapDispatchToProps(dispatch) {
// return  bindActionCreators({addTask},dispatch);

// }

}

export default connect(()=>{})(Taskbar);