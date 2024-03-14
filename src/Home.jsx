import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("Next");
  };
  return (
    <>
      <div className="home">
        <div className="image">
          <img src="\images\dices 1.png" alt="logo" />
        </div>
        <div className="heading">
          <div className="text">
            <h1 className="big">REACT THE RUMBLE</h1>
          </div>
          <div className="but1">
            <button className="play" onClick={handleClick}>
              Play Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
