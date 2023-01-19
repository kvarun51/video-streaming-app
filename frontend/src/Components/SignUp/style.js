import { css } from "@emotion/css";

export const mainContainer = css`
  position: relative;
  height: 100vh;
  overflow: scroll;
  color: white;
  background: white;
`;

export const logoContainer = css`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const inputField = css`
  padding: 0.8rem;
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  background-color: rgb(51, 50, 50);
  font-size: medium;
  color: white;
  :focus {
    outline-width: 0;
  }
`;
