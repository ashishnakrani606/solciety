import React from 'react';
import { NavLink, Card } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import '../components/Provenance.scss';


function Provenance() {
  return (
    
    <div id='about-main'>
      <Header/>
       <section className='phase-0-main padd-top-bot about-top'>
          <div className='container medium-container'>
            <div className='text-center phase-title'>
              <h2 className='sub-heading'>The Solciety Roadmap</h2>
              <p>This page shows the provenance record of each Solmate that will ever exist. Each Solmate image was hashed using the SHA-256 algorithm. The concatenated string of all the hashes is then hashed again to provide us with the Final Proof Hash. This is the final provenance record that proves the order of Solmates in which they are minted. Credit to <b><NavLink className='givewell-btn' href="https://boredapeyachtclub.com/#/provenance" target="_blank">BAYC</NavLink></b> for their work in pioneering provable fairness into the NFT landscape.</p>
            </div>
            <div className='text-center relevant-title'>
              <h4>Relevant information</h4>
              <p>The Solciety Solana contract address: Coming soon FINAL PROOF HASH	: 255410ea8325686c50244f660fbea15d24ca77536cfc21c7ee7ad1dca5707d3d</p>
            </div>
            <div className='text-center relevant-title'>
              <h4>Concatenated Hash String</h4>
              <p>Please see concatenated-prov.txt <b><NavLink className='givewell-btn' href="https://drive.google.com/drive/folders/1iDNl0e4FfIAs4X5q9dxAMkFzwoyyFsXb" target="_blank"> here</NavLink></b></p>
            </div>
          </div>
      </section>
      <Footer/> 
    </div>
  );
}

export default Provenance;
