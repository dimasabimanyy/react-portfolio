import React from "react";

const Loading = ({ loading }) => {
  return (
    <section
      className={`loading-wrapper ${loading ? "loading-on" : "loading-off"}`}
    >
      <div className="loading">
        <div class="loading">
          <div class="finger finger-1">
            <div class="finger-item">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="finger finger-2">
            <div class="finger-item">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="finger finger-3">
            <div class="finger-item">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="finger finger-4">
            <div class="finger-item">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="last-finger">
            <div class="last-finger-item">
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
