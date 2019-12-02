const postsReducer = (state = [], action) => {

    switch(action.type) {
      case 'ADD_POST':
          return [...state, action.payload]  
      default:
        return state;
    }
  }
   
  export default postsReducer;