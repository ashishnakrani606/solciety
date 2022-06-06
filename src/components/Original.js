import React, {useEffect} from 'react'
import { NavLink } from 'react-bootstrap';
import original from '../assets/images/Original.png';
import playicon from '../assets/images/play-icon.svg';
import '../components/Original.scss';
import zombie from '../assets/images/zombie.mp4';
import rarityPdf from '../assets/images/rarity.pdf';

function Original() {
    useEffect(() => {
        document.getElementById('play-btn2').addEventListener('click', function(e) {
          document.getElementById('myVid2').play();
          document.getElementById('video-bg2').classList.add('d-none');
          e.target.classList.add('d-none');
        });

      })
  return (
    <div id='Rarity' className='original-main'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 original-text'>
                    <h2>Original Art</h2>
                    <p>Our creative team worked hard to hand draw and paint various attributes for each Solmate. Here’s a sneak peek of the behind-the-scenes process!</p>
                </div>
                <div className='col-md-6 img-text'>
                    <div className='video-main'>
                        <span id='play-btn2' className='play-icon'><img src={playicon} alt=""/></span>
                        <div id='video-bg2' className='video-img' style={{ backgroundImage: `url(${original})` }}></div>
                        <video width="100%" loop autoPlay id='myVid2'>
                        <source src={zombie} type="video/mp4" />
                        <source src={zombie} type="video/ogg" />
                        Your browser does not support HTML video.
                        </video>
                    </div>
                </div>
            </div>
            <div className='rarity text-center'>
                <h2>Rarity</h2>
                <NavLink href={rarityPdf} target="_blank">Check here</NavLink>
            </div>

        </div>
    </div>
  )
}

export default Original;