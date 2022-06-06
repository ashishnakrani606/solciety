import React from 'react'
import './TheStory.scss';
import bannerholdinghands from '../assets/images/banner-holding-hands.png';


function TheStory() {
  return (
    <div className="the-story-main" id='the-story'>
      {/* The story start */}
        <section className='inner-the-story padd-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 left-the-story'>
                <img src={bannerholdinghands} className="banner-holding-img" alt="" />
              </div>
              <div className='col-md-6 right-story-main'>
                <div className='right-the-story'>
                  <h2 className='sub-heading'>The story</h2>
                  <p>The year is 2069. Civilization as we know it is all but gone, leaving two remaining survivors on Earth, Madam and Steve. It is up to these two to repopulate the human race and begin the new era of dating. The repopulation mission begins on Solana. Our evolved primates, the newborn Solmates, will build a brand new world called The Solciety.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* The story end */}
    </div>
  );
}

export default TheStory;
