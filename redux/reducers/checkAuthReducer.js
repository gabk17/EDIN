function authReducer(state = false, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return true;
    case 'SIGN_OUT':
      return false
    default:
      return state;
  }
}

export default authReducer;