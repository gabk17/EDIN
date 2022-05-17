
const add = (state, reward) => {
  return state + reward;
}

const reset = () => {
  return 0;
}


function scoreReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      let reward = action.payload
      return add(state, reward)
    case 'SAVE':
      return action.payload
    case 'RESET':
      return reset();
    default:
      return state;
  }
}

export default scoreReducer;