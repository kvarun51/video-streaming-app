import React, { useEffect, useState } from "react";
import ContentCarousel from "../../SubComponents/ContentCarousel";
import { css } from "@emotion/css";
import axios from "axios";
import Navbar from "../../SubComponents/Navbar";

function MainFeed() {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}/get/movie-list`)
      .then((res) => {
        setMovieList(res.data);
        console.log(res.data);
      });
  }, []);

  if (movieList)
    return (
      <div className={css(mainContainer)}>
        <Navbar />
        <ContentCarousel contentList={movieList} />
      </div>
    );
}

export default MainFeed;

const mainContainer = css`
  position: relative;
  height: 100vh;
  background: black;
  // background: url("/public/images/homepage_bg.jpg");
  // background-size: cover;
`;
