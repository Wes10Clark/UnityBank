import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  transactions: [],
  balance: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addDeposit(deposit) {
    dispatch({
      type: "ADD_DEPOSIT",
      payload: {
        id: uuidv4(),
        type: "deposit",
        amount: parseFloat(deposit),
      },
    });
  }

  function addWithdraw(withdraw) {
    dispatch({
      type: "ADD_WITHDRAW",
      payload: {
        id: uuidv4(),
        type: "withdraw",
        amount: parseFloat(withdraw),
      },
    });
  }

  const balance = state.transactions.reduce((acc, transaction) => {
    const transactionAmount = parseFloat(transaction.amount);
    if (isNaN(transactionAmount)) {
      return acc;
    } else {
      return acc + transactionAmount;
    }
  }, 0);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addDeposit,
        addWithdraw,
        balance,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
