import React, { useState } from 'react';
import './PhaseTwo.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-bootstrap';
import imbagsy from '../assets/images/imbagsy.jpg';
import cyriimm from '../assets/images/cyrii_mm.png';
import baalazamon from '../assets/images/baalazamon.png';
import xminion from '../assets/images/xminion.png';
import darrenlautf from '../assets/images/darrenlautf.png';
import deezefi from '../assets/images/deeze-fi.png';
import cyballofficial from '../assets/images/cyballofficial.png';
import redacted_j from '../assets/images/redacted_j.jpg';
import SliderArrow from '../assets/images/slider-arrow.svg';


function PhaseTwo() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  let sliderNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: nav1,
    infinite: true,
    autoplay: true,
    arrows: true,
    nextArrow: <span><img src={SliderArrow} alt="Slider Arrow" /></span>,
    prevArrow: <span><img src={SliderArrow} alt="Slider Arrow" /></span>,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  return (
      <section className='phase-0-main phase-2-main padd-top-bot'>
      <div className='container medium-container'>
        <div className='text-center phase-title'>
          <h2 className='sub-heading'>Phase <span>1.5</span></h2>
          <NavLink>Charity Auction</NavLink>
          <p>Honorary NFTs go to auction for charitable causes. 100% of the proceeds and associated royalties go to charity.</p>
        </div>
        
        <div className="nav-slider-wrapper">
          <Slider className="navSlider1" {...sliderNav} ref={(slider2) => setNav2(slider2)}>
            <div className='slide-item'>
              <div className='text-center inner-charity-auction'>
                <img src={imbagsy} alt="" className='img-width'/>
                <p>@imBagsy</p>
              </div>
            </div>
            <div className='slide-item'>
              <div className='text-center inner-charity-auction inner-charity-auction-center'>
                <img src={cyriimm} alt="" className='img-width'/>
                <p>@cyrii_MM</p>
              </div>
            </div>
            <div className='slide-item'>
              <div className='text-center inner-charity-auction'>
                <img src={baalazamon} alt="" className='img-width'/>
                <p>@baalazamon</p>
              </div>
            </div>
            <div className='slide-item'>
              <div className='text-center inner-charity-auction'>
                <img src={xminion} alt="" className='img-width'/>
                <p>@0xminion</p>
              </div>
            </div>
            <div className='slide-item'>
              <div className='text-center inner-charity-auction'>
                <img src={darrenlautf} alt="" className='img-width'/>
                <p>@Darrenlautf</p>
              </div>
            </div>
            <div className='slide-item'>
              <div className='text-center inner-charity-auction'>
                <img src={deezefi} alt="" className='img-width'/>
                <p>@DeezeFi</p>
              </div>
            </div>
            <div className='slide-item'>
              <div className='text-center inner-charity-auction'>
                <img src={redacted_j} alt="" className='img-width'/>
                <p>@redacted_j</p>
              </div>
            </div>
            <div className='slide-item'>
              <div className='text-center inner-charity-auction'>
                <img src={cyballofficial} alt="" className='img-width'/>
                <p>@CyBallOfficial</p>
              </div>
            </div>
          </Slider>        
        </div>
      </div>
     </section>
  );
}

export default PhaseTwo;
