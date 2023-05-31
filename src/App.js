import React, {useState} from 'react';
import { Element } from "react-scroll";
import Bounce from 'react-reveal/Bounce';

import './css/style.scss';

import Navigation from "./components/navbar";


const App = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <Navigation />
      <div className="container">
        <Element className="section" name="section-1">
          <div className='home_container'>
            <p className='main_title extra-light-font'>empowering education, one innovation at a time</p>
            <p className='sub_title extra-light-font'>Based at the heart of Ghana 🇬🇭 </p>
            <div>
              <button className='btn_invest extra-light-font'>Invest</button>
              <button className='btn_about extra-light-font' onClick={() => setModalState(true)}>About us</button>
            </div>
          </div>
          <Bounce>
            <div className='home-about_container' style={{display: modalState ? 'block' : 'none' }}>
              <p className='extra-light-font'>About</p>
              <div className='close_btn' onClick={() => setModalState(false)}>
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20.4258L6 7.06548M18 7.06548L6 20.4259" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className='thin-font'>
                Our mission at thinkAble is to transform education through technology.
                We are dedicated to creating innovative, user friendly products and services that empower educators and learners worldwide.
                Our team of passionate professionals brings a unique perspective and skillset to the challenges of creating effective education technology solutions.
                We are committed to quality, innovation, and user centered design, and we believe that education is one of the most important investments we can make in our future.
                Together, we are on a journey to make that investment as effective and accessible as possible.
              </p>
            </div>
          </Bounce>
        </Element>
        <Element className="section" name="section-2">
          <h2>Section 2</h2>
        </Element>
        <Element className="section" name="section-3">
          <h2>Section 3</h2>
        </Element>
        <Element className="section" name="section-4">
          <h2>Section 4</h2>
        </Element>
      </div>
      <div className='company_mark'>
        <p>© 2023 thinkAble </p>
        <p className='thin-font'>All rights reserved</p>
      </div>
    </>
  )
}

export default App;
