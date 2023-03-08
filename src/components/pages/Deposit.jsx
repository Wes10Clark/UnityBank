import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./deposit.css";

const Deposit = () => {
  const [depositeAmount, setDepositeAmount] = useState("");
  const { addDeposit } = useContext(GlobalContext);
  const { balance } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newDeposit = {
      id: Math.floor(Math.random() * 100000000),
      depositeAmount: +depositeAmount,
    };
    addDeposit(depositeAmount);
    setDepositeAmount("");
  };
  return (
    <div className="deposit">
      <h2 className="message">
        Welcome valued customer thank you for making a deposit with us
      </h2>
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            placeholder="enter amount"
            type="number"
            value={depositeAmount}
            onChange={(e) => setDepositeAmount(e.target.value)}
          ></input>
          <button type="submit">Deposit</button>
        </form>
        <h2 className="balance">You have ${balance} in your account </h2>
      </div>
    </div>
  );
};

export default Deposit;
