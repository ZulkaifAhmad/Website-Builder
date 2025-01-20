import React from 'react';
import './AboutParts.css'

function AboutText({ state }) {
  return (
    <>
      {state.map((e, i) => {
        return (
          <div className="aboutTextPart" key={i}>
            <div>
              <h2>{e.heading}</h2>
              <p>{e.description}</p>
            </div>
            <div>
              <h2>{e.heading2}</h2>
              <p>{e.description2}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AboutText;
