import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./withdraw.css";

const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const { addWithdraw } = useContext(GlobalContext);
  const { balance } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (withdrawAmount !== "" && parseFloat(withdrawAmount) <= balance) {
      const newWithdraw = {
        id: Math.floor(Math.random() * 100000000),
        type: "withdraw",
        amount: "-" + parseFloat(withdrawAmount),
      };
      addWithdraw(-withdrawAmount);
      setWithdrawAmount("");
    }
  };

  return (
    <div className="withdraw">
      <h2 className="messagew">
        Welcome valued customer, please enter the amount you wish to withdraw:
      </h2>
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            className="inputw"
            placeholder="enter amount"
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          ></input>
          <button className="buttonw" type="submit">
            Withdraw
          </button>
        </form>
        {balance < 0 && (
          <h2 className="balance warning">
            Warning: You have overdrafted your account! Your current balance is
            ${balance}.
          </h2>
        )}
        {balance >= 0 && (
          <h2 className="balance">You have ${balance} in your account.</h2>
        )}
      </div>
    </div>
  );
};

export default Withdraw;
