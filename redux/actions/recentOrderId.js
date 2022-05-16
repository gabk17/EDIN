export const saveRecent = (id) => {
  return {
    type: 'SAVE_RECENT',
    payload: id,
  }
}

export const resetRecent = () => ({ type: 'RESET' });
