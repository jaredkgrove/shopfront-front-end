const listingReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_SHOP_LISTINGS':
        return action.payload
      case 'ADD_IMAGES_TO_LISTING':
          let index = state.findIndex((listing) =>listing.listing_id === parseInt(action.payload.params.listing_id))
        if(index > -1){
          return [...state.slice(0, index), {...state[index], images: action.payload.results}, ...state.slice(index+1)] 
        }else{
          return state  
        }
      default:
        return state;
    }
  }
   
  export default listingReducer;