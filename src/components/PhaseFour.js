import React from 'react'
import './PhaseFour.scss';
import { NavLink } from 'react-bootstrap';

function PhaseFour() {
  return (
      <section className='phase-0-main phase-4-main'>
        <div className='container small-container'>
          <div className='text-center phase-title'>
            <h2 className='sub-heading'>Phase <span>3</span></h2>
            <NavLink>Cooperation</NavLink>
            <p>The Solciety’s ultimate goal is to establish a fun and meaningful project driven by engagement events, community decisions and dynamic narratives. Everyday, our Co-operation Chapter is evolving with new ideas from our team and supportive community members.</p>
          </div>
        </div>
      </section>
  );
}

export default PhaseFour;
