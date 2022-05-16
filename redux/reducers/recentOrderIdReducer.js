
function recentOrderIdReducer(state = 0, action) {
  switch (action.type) {
    case 'SAVE_RECENT':
      return action.payload
    case 'RESET':
      return 0
    default:
      return state;
  }
}

export default recentOrderIdReducer;