import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActionButton from "../../SubComponents/ActionButton";

export default function HomePage() {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="hp-main">
      <div className="loginPage_bg">
        <Link to="/">
          <img
            height={"40px"}
            width="auto"
            id="logo"
            src="/Images/logo.svg"
            alt="logo"
          />
        </Link>
        <Link to="/login">
          <button className="login-sigin-btn">Sign In</button>
        </Link>
      </div>
      <div className="login-Img-Bg">
        <div className="main-content-centre">
          <h1 className="main-body-title">
            Unlimited movies, TV shows and more.
          </h1>
          <p className="main-subtitle">Watch anywhere. Cancel anytime.</p>
          <form className="signup-form">
            <p style={{ "font-size": "1.3rem" }}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="form-input-submit">
              <Link to="/sign-up">
                {" "}
                <button className="submit-email-btn">{`Get Started `}</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
