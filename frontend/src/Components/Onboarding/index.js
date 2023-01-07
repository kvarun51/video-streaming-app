import { css } from "@emotion/css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlignItemsCenter,
  Flex,
  FlexColumn,
  JustifyContentCenter,
} from "../../styles";
import { logoContainer, mainContainer } from "./style";
import "./style.css";
import axios from "axios";

function Onboarding() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = () => {
    axios
      .post(`${process.env.REACT_APP_PUBLIC_URL}/user/create`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div
      className={css(
        mainContainer,
        FlexColumn,
        AlignItemsCenter,
        JustifyContentCenter
      )}
    >
      <div className={logoContainer}>
        <Link to="/">
          <img
            height={"40px"}
            width="auto"
            id="logo"
            src="/Images/logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="signIn-container">
        <form
          class="signIn-form"
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <h1>Sign In</h1>
          <br />
          {error ? (
            <p
              style={{
                "background-color": "rgb(230,61,58)",
                padding: "0.5rem",
                "border-radius": "0.2rem",
              }}
            >
              {error}
            </p>
          ) : (
            ""
          )}
          <br />
          <input
            className="input-field"
            type="email"
            placeholder="Enter Email-Id"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <input
            className="input-field"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <input
            className="submit-field"
            value={"Sign In"}
            type="submit"
          ></input>
        </form>
        <br />
        <br />
        <div className="signIn-form-footer">
          <p style={{ color: "rgb(113,111,115)" }}>New To NetFlix? &nbsp;</p>{" "}
          <Link to="/signUp">
            <p className="signUp-hyperlink">Sign Up Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
