import React from 'react';
import { NavLink } from 'react-bootstrap';
import logo from '../assets/images/logo-main.svg';
import twitte from '../assets/images/twitter.svg';
import discord from '../assets/images/discord.svg';
import medium from '../assets/images/medium.svg';
import instagram from '../assets/images/instagram.svg';
import '../components/Footer.scss';

function Footer() {
  return (
    <div className='Footer'>
        <div className='container'>
          <NavLink>
            <img src={logo} alt='' />
            <span>Solciety</span>
          </NavLink>
          <p> © The Solciety 2022, All Rights Reserved</p>
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
    </div>
  )
}

export default Footer;