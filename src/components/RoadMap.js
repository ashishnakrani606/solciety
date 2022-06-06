import React from 'react'
import './RoadMap.scss';
import solcietysyad from '../assets/images/solcietysyad.png';

function RoadMap() {
  return (
      <section id='Roadmap' className='solciety-roadmap-main padd-top'>
        <div className='container small-container'>
          <div className='text-center solciety-roadmap-title'>
            <h2 className='sub-heading'>The Solciety Roadmap</h2>
            <p>In the Good Book of The Solciety, the Genesis chapter of the new world is being written. Our collection of <b>6,999.9</b> Genesis Solmates is broken down into <b>2 parts:</b></p>
          </div>
          <div className='mint-serve'>
            <div className='inner-mint'>
              <p>SOLD OUT</p>
              <h5>1,444.4</h5>
            </div>
            <div className='inner-mint raffle-mining'>
              <p>Raffle Mining</p>
              <h5>5,555.5</h5>
            </div>
          </div>
          <div className='text-center'>
            <img src={solcietysyad} alt="" className='me-2 img-width'/>
          </div>
        </div>
      </section>
  );
}

export default RoadMap;
