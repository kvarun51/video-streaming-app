import { css } from "@emotion/css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlignItemsCenter,
  Flex,
  FlexColumn,
  JustifyContentCenter,
} from "../../styles";
import { inputField, logoContainer, mainContainer } from "./style";
import "./style.css";
import axios from "axios";
import { setLocalData } from "../../utils/localStorage";

function SignUp() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const submitHandler = () => {
    axios
      .post(`${process.env.REACT_APP_PUBLIC_URL}/user/create`, {
        email: loginData.email,
        password: loginData.password,
      })
      .then((res) => {
        setLocalData("user_auth", res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
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
          <h1>Sign Up</h1>
          <br />
          {error ? (
            <p
              style={{
                "background-color": "rgb(230,61,58)",
                padding: "0.5rem",
                "border-radius": "0.2rem",
              }}
            >
              {JSON.stringify(error)}
            </p>
          ) : (
            ""
          )}
          <br />
          <input
            className={inputField}
            type="email"
            placeholder="Enter Email-Id"
            value={loginData.email}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                email: e.target.value,
              });
            }}
          ></input>
          <br />
          <br />
          <input
            className={inputField}
            type="password"
            placeholder="Enter Password"
            value={loginData.password}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                password: e.target.value,
              });
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
          <p style={{ color: "rgb(113,111,115)" }}>
            Already a customer? &nbsp;
          </p>{" "}
          <Link to="/login">
            <p className="signUp-hyperlink">Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
