const addTask = (task) => {
     return{
         type:'ADD_TASK',
         payLoad:'task'
     };

       }

      const  deleteTask = (deleteId) => {
         return{
            type:'DELETE_TASK',
            payLoad:'deleteId'
         };

     }

     export default {addTask, deleteTask};

