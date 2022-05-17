export const add = (reward) => {
  return {
    type: 'ADD',
    payload: reward,
  }
}

export const saveScore = (score) => {
  return {
    type: 'SAVE',
    payload: score,
  }
}
export const reset = () => ({ type: 'RESET' });