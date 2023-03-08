export default (state, action) => {
  switch (action.type) {
    case "ADD_DEPOSIT":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        balance: state.balance + parseFloat(action.payload.amount),
      };
    case "ADD_WITHDRAW":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        balance: state.balance - parseFloat(action.payload.amount),
      };
    default:
      return state;
  }
};
