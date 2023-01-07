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
