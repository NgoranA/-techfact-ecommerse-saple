import React from "react";
import { useCountdown } from "../hooks/useCountdown";

const Feature = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className="deal d-flex justify-content-end ">
      <div>
        <div className="container pt-5  d-flex mr-5  flex-column align-items-center">
          <h1>Deal Of The Week</h1>
          <div className="trait"></div>
          {days + hours + minutes + seconds <= 0 ? (
            <div className="d-flex numb0 align-items-center justify-content-end">
              {" "}
              <h1 className="expired">EXPIRED !!!!!! </h1>{" "}
            </div>
          ) : (
            <div className="numb0">
              <span className="numb">
                {days} <p>Days</p>
              </span>
              <span className="numb">
                {hours}
                <p>Hours</p>
              </span>
              <span className="numb">
                {minutes} <p>Minutes</p>
              </span>
              <span className="numb">
                {seconds} <p>Seconds</p>
              </span>
            </div>
          )}

          <button className="shopnow2 mb-5">
            SHOP NOW <i className="fa-solid fa-circle-arrow-right "></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
