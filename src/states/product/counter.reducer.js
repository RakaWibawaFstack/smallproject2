const initialState = {
  counter: 0,
  carts: [],
}

const counterReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  else if  (action.type === 'ADD_CART') {
  return {
    ...state,
    carts: [...state.carts, action.product]
  }
}
  else if (action.type === 'PENGURANGAN_COUNTER') {
    return {
      ...state,
      counter: state.counter - action.value
    }
  }
  else {
    return state;
  }
}
export default counterReducer;