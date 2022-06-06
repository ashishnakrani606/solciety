import React from 'react';
import { NavLink } from 'react-bootstrap';
import slogan from '../assets/images/solana.svg';
import twitte from '../assets/images/twitter.svg';
import discord from '../assets/images/discord.svg';
import medium from '../assets/images/medium.svg';
import single from '../assets/images/single.png';
import instagram from '../assets/images/instagram.svg';
import './Hero.scss';

function Hero() {
  return (
    <div className='hero-banner'>
      <div className='container'>
        <div className='row' >
            <div className='col-md-6 banner-text'>
              <h1 className=''>Solciety</h1>
              <div className='slogan'>
                <span>Built on</span>
                <img src={slogan} alt='' />
              </div>
              <p className='slogan-text'>Madam and Steve are about to play: Feeling myself by Nicki Minaj (ft. Beyonce) on repeat and embark on a repopulation mission.</p>
              <p className='time-date'>100% MINTED OUT IN 90 SECONDS</p>
              <div className='social-icon'>
                  <ul>
                    <li>
                      <NavLink href="https://twitter.com/TheSolcietyNFT" target="_blank">
                        <img src={twitte} alt='' />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="https://discord.com/invite/cDEJS9Mwpp" target="_blank">
                        <img src={discord} alt='' />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="https://medium.com/@thesolcietyproject/the-solciety-genesis-collection-515ec6e6d693" target="_blank">
                        <img src={medium} alt='' />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="https://www.instagram.com/thesolcietynft" target="_blank">
                        <img src={instagram} alt='' />
                      </NavLink>
                    </li>
                  </ul>
              </div>
            </div>
            <div className='col-md-6 banner-img'>
                <div className='banner-img-main text-center'>
                  <img src={single} alt='' />
                </div>
                <div className='mint-btn text-center' >
                  <NavLink href="https://magiceden.io/marketplace/the_solciety" target="_blank">Buy on Magic Eden</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
