import React from "react";
import youtubeImg from "../../images/youtube.png";

const Youtube = () => {
  return (
    <div id="youtube">
      <div className="youtube container">
        <div className="youtube-text">
          <h1 data-aos="fade-up-right" data-aos-duration="600">
            Youtube
          </h1>
          <p data-aos="fade-up-right" data-aos-duration="600">
            Each dribbble shot is made with love and care. Do check out my work
            on Dribbble. Likes and comments are appreciated.
          </p>
          <a href="/" alt="" data-aos="fade-up-right" data-aos-duration="600">
            Follow me on Youtube
          </a>
        </div>
        <div
          className="youtube-image"
          data-aos="fade-up-left"
          data-aos-duration="600"
        >
          <img src={youtubeImg} alt="Night Coder Channel" />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
