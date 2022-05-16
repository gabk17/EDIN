export const saveUserInfo = (info) => {
  return {
    type: 'SAVE_INFO',
    payload: info
  }
}

export const resetUserInfo = () => ({ type: 'RESET' });



