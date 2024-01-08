import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const [typingVisible, setTypingVisible] = useState(false);

  useEffect(() => {
    setTypingVisible(true);
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h5>
          Your Trailblazing Full-Stack Software Engineer and Solution-Oriented I.T. Professional!
        </h5>
        <h5 className={typingVisible ? 'text-light' : ''}>Full Stack Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          I do free consultations!
        </a>
      </div>
    </header>
  );
};

export default Header;
