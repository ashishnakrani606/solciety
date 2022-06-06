import React from 'react'
import './PhaseZero.scss';
import { NavLink } from 'react-bootstrap';
import phase from '../assets/images/phase.svg';
import phasemobile from '../assets/images/phase-mobile.png';

function PhaseZero() {
  return (
      <section className='phase-0-main padd-top'>
        <div className='container medium-container'>
          <div className='text-center phase-title'>
            <h2 className='sub-heading'>Phase <span>0</span></h2>
            <NavLink>Genesis Mint</NavLink>
            <p>Sold out in 90 seconds.<br/>Initial mint of 1444.4 Genesis Solmates. <br/><b>30% of mint proceeds go to <NavLink className='givewell-btn' target="_blank" href="https://www.givewell.org/">GiveWell</NavLink> charity.</b></p>
          </div>
          <div className='text-center phase-img'>
            <img src={phase} alt="" className='img-width desktop-view '/>
            <img src={phasemobile} alt="" className='img-width mobile-view'/>
          </div>
        </div>
      </section>
  );
}

export default PhaseZero;
