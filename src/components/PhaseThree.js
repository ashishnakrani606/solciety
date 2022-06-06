import React from 'react'
import './PhaseThree.scss';
import { NavLink } from 'react-bootstrap';
import option from '../assets/images/Option.gif';
import option1 from '../assets/images/Option1.gif';
import playicon from '../assets/images/play-icon.svg';
import lovecalculator from "../assets/images/love-calculator.png";

function PhaseThree() {
  return (
      <section className='phase-0-main phase-3-main padd-top-bot'>
        <div className='container small-container'>
          <div className='text-center phase-title'>
            <h2 className='sub-heading'>Phase <span>2</span></h2>
            <NavLink>Evolution</NavLink>
            <p><b>Mating games™</b> begin.<br></br> Time to populate the next generation of The Solciety</p>
          </div>
          <div className='charity-auction-main'>
            <div className='text-center inner-charity-auction'>
              <div className='video-main'>
              <img src={lovecalculator} alt=""/>
              </div>
              <p>Love calculator</p>
            </div>
            <div className='text-center inner-charity-auction inner-charity-auction1'>
              <div className='video-main'>
                <img src={option1} alt=""/>
              </div>
              <p>The Mating Games</p>
            </div>
          </div>
          <div className='text-center evolution-solmates-sec'>
            <h2>Evolution Solmates</h2>
            <p>Finding your other half was not an easy task in the old world, and it is just as hard in The Solciety. Compatibility scores, breeding success rates and inheritance probabilities will determine the rare traits Evolution Solmates will inherit from Genesis Solmates.</p>
          </div>
        </div>
      </section>
  );
}

export default PhaseThree;
