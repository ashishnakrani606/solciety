import React from 'react'
import './PhaseOne.scss';
import { NavLink } from 'react-bootstrap';

function PhaseOne() {
  return (
      <section className='phase-0-main phase-1-main padd-top-bot'>
      <div className='container medium-container'>
        <div className='text-center phase-title'>
          <h2 className='sub-heading'>Phase <span>1</span></h2>
          <NavLink>The Lottery: Find and Rescue Program </NavLink>
          <p>Weekly raffles begin - Participate in our weekly Find and Rescue Programs (FARPs) by stake-locking earn <b>$CIETY tokens.</b> $CIETY tokens can be exchanged for Find and Rescue Raffle Tickets (FARRTs). Read more about the Find and Rescue Program <b><NavLink className='givewell-btn' target="_blank" href="https://medium.com/@thesolcietyproject?p=515ec6e6d693">here.</NavLink></b></p>
        </div>
      </div>
     </section>
  );
}

export default PhaseOne;
