import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { Link, useNavigate } from "react-router-dom";

function ContentCarousel({ contentList }) {
  const navigate = useNavigate();

  return (
    <div className={carouselContainer}>
      {contentList.map((content) => {
        return content ? (
          <div
            className={css(contentCard)}
            onClick={() => {
              if (content.backdrop_path)
                navigate(
                  `/browse/${content.id}/${Boolean(content["release_date"])}`
                );
            }}
          >
            <div className={contentImage}>
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  content.backdrop_path
                    ? content.backdrop_path
                    : content.poster_path
                }`}
              />
            </div>
            <p className={contentTitle}>
              {content.title ? content.title : content.name}
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
}

export default ContentCarousel;

const imageWidth = "250px";

const carouselContainer = css`
  height: 100%;
  padding: 120px 25px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const contentCard = css`
  width: ${imageWidth};
  margin-bottom: 20px;
  p {
    color: white;
  }
  transition: all 0.5s;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const contentImage = css`
  width: ${imageWidth};
  height: auto;
  img {
    height: 100%;
    width: 100%;
  }
`;

const contentTitle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
