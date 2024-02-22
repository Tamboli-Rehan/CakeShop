const initialState = {
  item: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        item: [...state.item, action.payload],
      };
      case "CLEAR_CART":
        return{
          ...state,
          item:[],
        };
        case "BUY_NOW":
          return{
            ...state,
            item:[]
          }
    default:
      return state;
  }
};
export default cartReducer;
