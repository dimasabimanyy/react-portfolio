import React from "react";

const YoutubeModal = ({ closeModal }) => {
  return (
    <div className="youtube-video">
      <div className="youtube-video-wrap">
        <div className="close-modal" onClick={closeModal}>
          <div></div>
          <div></div>
        </div>
        <div className="youtube-box">
          <iframe
            title="my youtube channel"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fqhAMkSV-bI?autoplay=0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YoutubeModal;
