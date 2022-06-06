import React from 'react'
import './Minting.scss';
import seveimg from '../assets/images/serve-img.png';


function Minting() {
  return (
      <section className='minting-top'>
        <div className='container text-center small-container'>
          <img src={seveimg} alt="" className='seveimg'/>
          <h4>Minting: First Come First Serve with BOT prevention</h4>
          <p>BOT Prevention at the smart contract layer </p>
        </div>
      </section>
  );
}

export default Minting;
