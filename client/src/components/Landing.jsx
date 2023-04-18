import React from "react";
import Button from "@mui/material/Button";

const Landing = () => {
  return (
    <>
      <div className="land">
        <div className="head">
          <h1 className="headText">Welcome to ReadNow</h1>
          <p className="head-para">
            The world's most-loved social storytelling platform ReadNow connects
            a global community of millions readers and writers through the power
            of story.
          </p>

          <div className="btns">
            <Button variant="contained">Start Reading</Button>
            <Button variant="outlined">Publish your Story</Button>
          </div>
        </div>

        <div className="image">
          <img
            src="https://www.macworld.com/wp-content/uploads/2023/01/apple-Search-Ads.jpg?resize=1200%2C675&quality=50&strip=all"
            alt=""
            className="comp"
          />
        </div>
      </div>
      <section>
        <h3 className="sec-head">we make your story...</h3>

        <div className="sec">
          <div className="icon"></div>
          <div className="text">Get produced to movie or film</div>

          <div className="icon"></div>
          <div className="text">Get adapted to a TV series</div>

          <div className="icon"></div>
          <div className="text">Get published</div>
        </div>
      </section>

  
      <section className="land">
      <div className="image">
          <img
            src="https://www.wattpad.com/img//landing/wattpadStudiosPoster.png"
            alt=""
            className="comp"
          />
        </div>

        <div className="head">
        <h3 className="headText">ReadNow Studios</h3>
          <h3 className="headText">Your story could be the next big hit</h3>
          <p className="head-para">
          Wattpad Studios discovers untapped, unsigned, and talented writers on Wattpad and connects them to global multi-media entertainment companies.
          Wattpad Studios works with partners such as:
          </p>

        </div>
      </section>
    </>
  );
};

export default Landing;
