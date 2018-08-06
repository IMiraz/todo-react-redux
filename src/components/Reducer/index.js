import {combineReducers} from 'redux'

const taskReducer = (state=[], action) =>{

    switch(action.type) {
         case 'ADD_TASK':
         state = state.concat(action.payLoad);
         break;
         case 'DELETE_TASK':
         state = state.slice();
         state.splice(action.payLoad,1);
         break;
 }
return state;

},
reducers =combineReducers({
    task:taskReducer,
})
export default reducers