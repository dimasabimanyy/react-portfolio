import React from "react";
import youtubeImg from "../../images/youtube.png";
import playIt from "../../images/play-it.png";

const Youtube = ({ openModal }) => {
  return (
    <div id="youtube">
      <div className="youtube container">
        <div className="youtube-text">
          <h1 data-aos="fade-up-right" data-aos-duration="600">
            Youtube
          </h1>
          <p data-aos="fade-up-right" data-aos-duration="600">
            Recently, i start to create videos around programming (especially
            web developement) where i build small to intermediate projects and
            posted it on youtube. Apart from the desire to help others learn
            about the web, I found the benefit of learning by teaching others is
            extremely effective. Especially to sharpen our understanding.
          </p>
          <a
            href="https://www.youtube.com/channel/UC9RHCbCEj0UxDhj0y__MIRA"
            alt="Youtube Channel"
            data-aos="fade-up-right"
            data-aos-duration="600"
            target="_blank"
            rel="noreferrer"
          >
            Check out my channel
          </a>
        </div>
        <div
          className="youtube-image"
          data-aos="fade-up-left"
          data-aos-duration="600"
        >
          <img src={youtubeImg} alt="Night Coder Channel" />
          <div className="play-button" onClick={openModal}>
            <img
              src={playIt}
              alt="Play Button"
              className="play-it"
              onClick={openModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
