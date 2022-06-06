import React, {useState, useEffect} from 'react'
import './ImageGallery.scss';
import collageoption from '../assets/images/collage-option.png';
import collageoption1 from '../assets/images/collage-option1.png';
import Marquee from "react-fast-marquee";

function ImageGallery() {
  const [speed,setSpeed] = useState(50);
  const [speed2, setSpeed2] = useState(30)
  useEffect(() => {
    if(window.screen.width <=1024 ) {
      setSpeed(10)
      setSpeed2(10)
    } else {
      setSpeed(40)
      setSpeed2(30)
    }  
  });

  return (
      <section className='world-first-main padd-top'>
        <Marquee gradient={false} speed={speed} className='marquee-top-sec '>
            <img src={collageoption} alt="" className='me-2'/>
            <img src={collageoption} alt="" className='me-2'/>
        </Marquee>
        <Marquee gradient={false} speed={speed2} className='marquee-top-sec ' direction="right">
            <img src={collageoption1} alt="" className='me-2'/>
            <img src={collageoption1} alt="" className='me-2'/>
        </Marquee>
      </section>
  );
}

export default ImageGallery;
