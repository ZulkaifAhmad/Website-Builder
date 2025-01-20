import React, { useState } from 'react';
import './About.css';

import { aboutPageData , aboutPageData2 , aboutPageData3 } from './aboutData';
import AboutImage from '../components/AboutImage';
import AboutText from '../components/AboutText';

function About() {
  const [state, setState] = useState(aboutPageData);
  const [state2, setState2] = useState(aboutPageData2);
  const [state3, setState3] = useState(aboutPageData3);

  return (
    <div className="about">
      <div className="knowaboutWe">
        <p>Know About</p>
        <h2>Who we are!</h2>
      </div>

      <div className="aboutHero">
        <AboutText state={state}/>
        <AboutImage state={state} />
      </div>
      <div className="aboutHero">
        <AboutImage state={state2} />
        <AboutText state={state2}/>
      </div>
      <div className="aboutHero">
        <AboutText state={state3}/>
        <AboutImage state={state3} />
      </div>
    </div>
  );
}

export default About;
