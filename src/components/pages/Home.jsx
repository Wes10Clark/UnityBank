import React from "react";
import "./home.css";
import Bank from "../images/bank.jpg";

const Home = () => {
  return (
    <div className="home">
      <h2 className="welcome">Welcome to Unity Bank </h2>
      <h5 className="promise">We promise to always put you first</h5>
      <div className="img-container">
        <img className="image" src={Bank} alt="bank image" />
      </div>
      <div className="account">
        <h5>Thank you for choosing Unity Bank</h5>
        <p>
          At Unity Bank, we believe that everyone should have access to the
          financial tools they need to succeed. That's why we're proud to be a
          crypto-friendly bank, offering a range of services to help you manage
          your traditional and digital assets in one place. Our easy-to-use
          platform lets you buy, sell, and hold cryptocurrencies securely and
          with peace of mind. With our competitive fees and top-notch security
          measures, you can trust us to be your partner in the world of crypto.
          Whether you're a seasoned trader or just getting started, we're here
          to help you achieve your financial goals. Join us today and discover
          the power of crypto-friendly banking at Unity Bank!
        </p>
      </div>
    </div>
  );
};

export default Home;
