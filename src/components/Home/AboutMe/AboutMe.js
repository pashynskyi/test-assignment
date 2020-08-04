import React from 'react';
import manLaptop from '../../../assets/images/man-laptop-v1.svg';

const AboutMe = () => {
  return (
    <article className="about-me-container">
      <h1>Let's get acquainted</h1>
      <div className="about-me">
        <img src={manLaptop} alt="manLaptopPhoto" />
        <div>
          <h2>I am cool frontend developer</h2>
          <p>
            We will evaluate how clean your approach to
            writing CSS and Javascript code is. You can use
            any CSS and Javascript 3rd party libraries without
            any restriction.
          </p>
          <p>
            If 3rd party css/javascript libraries are added to
            the project via bower/npm/yarn you will get bonus
            points. If you use any task runner (gulp/webpack)
            you will get bonus points as well. Slice service
            directory page P​SD mockup​ into HTML5/CSS3.
          </p>
          <a href="#register">
            <span>Sign up now</span>
          </a>
        </div>
      </div>
    </article >
  )
}

export default AboutMe;