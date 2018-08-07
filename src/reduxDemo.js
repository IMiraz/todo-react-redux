import React, {Component} from 'react'
import {createStore} from 'redux'
import reducers from './components/Reducer';

 class Redux  extends Component {

    render() {
        //step 2 reducer : state & action

 const reducer = function(state, action) {
    if(action.type === 'ATTACT')
    {
        return action.payLoad
    }
    if(action.type === 'AGE')
    {
        return action.payLoad
    }
    return state;
     }

 //Step 1 store: reducer state

 const store = createStore(reducer,"peace")


 //step3 : subscribe
store.subscribe( () => {
 console.log("store is now", store.getState());
})

//step 4: dispatch  action

store.dispatch({type:"ATTACT", payLoad:"IRON MAN"})
store.dispatch({type:"AGE", payLoad:"34"})



         return(
<div></div>
         )
    }

 }

 export default  Redux;