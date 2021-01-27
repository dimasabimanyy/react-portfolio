import React from "react";

const YoutubeModal = ({ closeModal }) => {
  return (
    <div className="youtube-video">
      <div className="youtube-video-wrap">
        <div className="close-modal" onClick={closeModal}>
          <div></div>
          <div></div>
        </div>
        <div className="youtube-box"></div>
      </div>
    </div>
  );
};

export default YoutubeModal;
