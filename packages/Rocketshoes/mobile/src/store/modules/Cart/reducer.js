export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.product];
    default:
      return state;
  }
}
