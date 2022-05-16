export const add = (reward) => {
  return {
    type: 'ADD',
    payload: reward,
  }
}
export const reset = () => ({ type: 'RESET' });