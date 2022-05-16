
function userInfoReducer(state = [], action) {
  switch (action.type) {
    case 'SAVE_INFO':
      return [...state, action.payload]
    case 'RESET':
      return []
    default:
      return state;
  }
}

export default userInfoReducer;