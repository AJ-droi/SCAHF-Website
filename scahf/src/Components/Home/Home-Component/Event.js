import React from "react";
import "../Home.css";

function Event() {
  return (
    <div>
      <section className="Event">
        <div className="Event-Container">
          <h3>OUR EVENTS</h3>
          <p>
            Every year we have series of events scheduled <br /> to hold at different
            times of the year.
          </p>
          <a href=" ">View Events</a>
        </div>

        <div className="border-line"></div>

        <div className="Gallery-Container">
          <h3>OUR GALLERY</h3>
          <p>
            All our events are captured for all the right reasons. <br /> Visit our
            Media Gallery to see highlights of all events.
          </p>
          <a href=" ">View Gallery</a>
        </div>
      </section>
    </div>
  );
}

export default Event;
