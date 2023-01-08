import { css } from "@emotion/css";

export const mainContainer = css`
  position: relative;
  height: 100vh;
  overflow: scroll;
  color: white;
  //   background-image: url('/public/Images/netflxBg.jpg');
  //   background-size: cover;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
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
