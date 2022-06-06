import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SpiritAnimals.scss';
import Slider from "react-slick";
import SliderIndicator from "../assets/images/slider-indicator.svg";
import SliderArrow from '../assets/images/slider-arrow.svg';
import intjFox from '../assets/images/intj-fox.png';
import intpOwl from '../assets/images/intp-owl.png';
import entjLion from '../assets/images/entj-lion.png';
import entpMonkey from '../assets/images/entp-monkey.png';
import enfgWolf from '../assets/images/enfg-wolf.png';
import infpEle from '../assets/images/infp-ele.png';
import enfgWhale from '../assets/images/enfg-whale.png';
import enfpDolphin from '../assets/images/enfp-dolphin.png';
import istjHorse from '../assets/images/istj-horse.png';
import isfjBear from '../assets/images/isfj-bear.png';
import estjBee from '../assets/images/estj-bee.png';
import esfjDog from '../assets/images/esfj-dog.png';
import istpCat from '../assets/images/istp-cat.png';
import isfpPanda from '../assets/images/isfp-panda.png';
import estpSquirrel from '../assets/images/estp-squirrel.png';
import esfpOtter from '../assets/images/esfp-otter.png';
import hsfpApe from '../assets/images/hsfp-ape.png';
import tungsten from '../assets/images/tungsten.png';
import osmium from '../assets/images/osmium.png';

function SpiritAnimals() {  
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  let settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,    
  };

  let sliderNav = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: nav1,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    infinite: true,
    autoplay: false,
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
      }
    ]
  }

  return (
    <div className="SpiritAnimals">
      <h2 className="section-header text-center">Spirit Animals</h2>
      <p className="section-subheading text-center">Personalities of Solmate NFTs</p>
      <div className="nav-slider-wrapper">
        <span className='indicator-top'>
            <img src={SliderIndicator} alt='' />
        </span>
        <Slider className="navSlider" {...sliderNav} ref={(slider2) => setNav2(slider2)}>
          <div className='slide-item'>
            <img className='slide-img' src={intjFox} alt="INTJ Fox" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={intpOwl} alt="INTP Owl" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={entjLion} alt="Entj Lion" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={entpMonkey} alt="Entp Monkey" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={enfgWolf} alt="Enfg Wolf" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={infpEle} alt="INFP Elephant" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={enfgWhale} alt="ENFG Whale" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={enfpDolphin} alt="ENFP Dophin" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={istjHorse} alt="istj-horse" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={isfjBear} alt="isfj-bear" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={estjBee} alt="estj-bee" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={esfjDog} alt="esfj-dog" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={istpCat} alt="istp-cat" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={isfpPanda} alt="isfp-panda" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={estpSquirrel} alt="estp-squirrel" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={esfpOtter} alt="esfp-otter" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={hsfpApe} alt="hsfp-ape" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={tungsten} alt="tungsten" />
          </div>
          <div className='slide-item'>
            <img className='slide-img' src={osmium} alt="osmium" />
          </div>
        </Slider>        
        <span className='indicator-bottom'>
            <img src={SliderIndicator} alt='' />
        </span>
      </div>
      <Slider className='mainSlider' {...settings} ref={(slider1) => setNav1(slider1)}>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              INTJ FOX
            </p>
            <p className="content-subheading">
              The Architect
            </p>
            <span className='content-rate'>
              2.40%
            </span>
            <p className='content-description'>
              Imaginative and strategic planners, with a knack for solving Solciety’s problems
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              INTP OWL
            </p>
            <p className="content-subheading">
              The Thinker
            </p>
            <span className='content-rate'>
              3.77%
            </span>
            <p className='content-description'>
            Innovative Inventors with an unquenchable thirst for knowledge of the new world
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ENTJ LION
            </p>
            <p className="content-subheading">
              The Commander
            </p>
            <span className='content-rate'>
              2.46%
            </span>
            <p className='content-description'>
              Bold, strong-willed leaders, always finding a way within The Solciety - or making one
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ENTP MONKEY
            </p>
            <p className="content-subheading">
              The Debater
            </p>
            <span className='content-rate'>
              3.52%
            </span>
            <p className='content-description'>
              Smart and curious thinkers who cannot resist the Proof of Puzzles challenges
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              INFJ WOLF
            </p>
            <p className="content-subheading">
              The Advocate
            </p>
            <span className='content-rate'>
              1.54%
            </span>
            <p className='content-description'>
              Quiet and mystical, yet very wise and tireless idealists, building dreams in Solciety
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              INFP ELEPHANT
            </p>
            <p className="content-subheading">
              The Mediator
            </p>
            <span className='content-rate'>
              4.49%
            </span>
            <p className='content-description'>
            Poetic, kind and altruistic Solmates, always eager to donate – a Solciety ethos
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ENFJ WHALE
            </p>
            <p className="content-subheading">
              The Protagonist
            </p>
            <span className='content-rate'>
              2.92%
            </span>
            <p className='content-description'>
              Charismatic and inspiring leaders, able to charm all those in the Solciety
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ENFP DOLPHIN
            </p>
            <p className="content-subheading">
              The Champion
            </p>
            <span className='content-rate'>
              8.72%
            </span>
            <p className='content-description'>
              Enthusiastic, creative and sociable free spirits, who keep the Solciety smiling
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ISTJ HORSE
            </p>
            <p className="content-subheading">
              The Inspector
            </p>
            <span className='content-rate'>
              11.43%
            </span>
            <p className='content-description'>
              Practical and fact-minded individuals, the most reliable ones in the Solciety
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ISFJ BEAR
            </p>
            <p className="content-subheading">
              The Protector
            </p>
            <span className='content-rate'>
              9.37%
            </span>
            <p className='content-description'>
              Very dedicated and warm protectors, always ready to defend the Solciety
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ESTJ BEE
            </p>
            <p className="content-subheading">
              The Director
            </p>
            <span className='content-rate'>
             8.89%
            </span>
            <p className='content-description'>
              Excellent administrators, proficient in managing day-to-day affairs in the Solciety
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ESFJ DOG
            </p>
            <p className="content-subheading">
              The Caregiver
            </p>
            <span className='content-rate'>
             11.66%
            </span>
            <p className='content-description'>
              Extraordinarily caring, social and popular, always helping fellow Solmates
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ISTP CAT
            </p>
            <p className="content-subheading">
              The Crafter
            </p>
            <span className='content-rate'>
              5.37%
            </span>
            <p className='content-description'>
              Bold and practical experimenters, masters of all kinds of Solciety’s tools
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ISFP PANDA
            </p>
            <p className="content-subheading">
              The Artist
            </p>
            <span className='content-rate'>
             9.40%
            </span>
            <p className='content-description'>
              Flexible and charming adventurers, always searching for Ponpu Island
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ESTP FLYING SQUIRREL
            </p>
            <p className="content-subheading">
              The Persuader
            </p>
            <span className='content-rate'>
              4.32%
            </span>
            <p className='content-description'>
              Smart, energetic and very perceptive people, truly living on the edge of Solciety
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              ESFP OTTER
            </p>
            <p className="content-subheading">
              The Performer
            </p>
            <span className='content-rate'>
              8.86%
            </span>
            <p className='content-description'>
              Spontaneous and enthusiastic people - reason why Solciety is never boring
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              HSFP APE
            </p>
            <p className="content-subheading">
              The Degen
            </p>
            <span className='content-rate'>
             0.31%
            </span>
            <p className='content-description'>
              Passionate gamblers with a penchant for the Solciety’s decentralization
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              TUNGSTEN
            </p>
            <p className="content-subheading">
              NGMI
            </p>
            <span className='content-rate'>
             0.43%
            </span>
            <p className='content-description'>
              Crowd-pleasers with all the latest Solciety gossip, have major FOMO
            </p>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <p className="content-heading">
              OSMIUM
            </p>
            <p className="content-subheading">
              WGMI
            </p>
            <span className='content-rate'>
             0.14%
            </span>
            <p className='content-description'>
              Classic Diamond (or Osmium) hands. Never loses faith in the Solciety
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SpiritAnimals;
