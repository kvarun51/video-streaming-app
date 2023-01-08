import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {

  function handleSignOut() {
    // removeCookie("loggedUser");
    // logOut();
    // history.push("/");
    window.location.reload();
    // console.log(cookie);
  }

  const [value, setValue] = useState("");

  function onChangeHandler(event) {
    setValue(event.target.value);
    if (value.length >= 2) {
      // history.push("/browse/search");
    } else {
      // history.push("/browse");
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link id="navbar-logo" to="/browse">
          <img className="navbar-logo" src="/Images/logo.svg" />
        </Link>
        <div className="navbar-categories">
          <Link to="/browse">Home</Link>
          <Link to="/browse/movies">Movies</Link>
          <Link to="/browse/tv">TV Shows</Link>
        </div>
      </div>

      <div className="navbar-right">
        <input
          className="search-bar"
          type="text"
          id="searchID"
          placeholder="Search"
          onChange={onChangeHandler}
          value={value}
        />
        <br />
        <div class="popover__wrapper">
          <button className="dropbtn">
            {/* {cookie[cookie["loggedUser"]] */}
            {/* // ? cookie[cookie["loggedUser"]] */}
            Profile
          </button>
          <div class="popover__content" onClick={handleSignOut}>
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
