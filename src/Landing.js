import './Landing.scss';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import { Helmet } from 'react-helmet';
import logo from "./assets/images/logo-main.svg";
import MenuIcon from "./assets/images/menu.svg";
import {React, useEffect} from "react";
import mines from "./assets/images/mines-img.png";
import collageoption from "./assets/images/collage-option-new.png";
import factory from "./assets/images/factory-img.png";
import rescue from "./assets/images/rescue.png";
import twitter from "./assets/images/twitter-new.svg";
import discord from "./assets/images/discord-new.svg";
import medium from "./assets/images/medium-new.svg";
import footerlogo from './assets/images/logo-main.svg';
import ArcText from 'arc-text';

function Landing() {
    useEffect(() => {
        const arcText = new ArcText(document.querySelector('.arcTextFactory'));

        // Set the radius to 150 pixels.
        arcText.arc(1200);
    })
  return (
    <div className="landing-page">
        <Helmet>
            <link rel="apple-touch-icon" href="https://thesolciety.gg/landing-miners.png" />
        </Helmet>
        {/* Header */}
        <div className='header'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="https://thesolciety.gg/" className='nav-logo'>
                        <img src={logo} alt='' />
                        <span>Solciety</span>
                    </Navbar.Brand>
                    <div className='mobile-btn-set'>
                        {/* <Button className='btn_sol mobile' >Connect <img src={buttonIcon} alt=""/></Button> */}
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <img src={MenuIcon} alt='' />
                        </Navbar.Toggle> */}
                    </div>
                    {/* <Navbar.Collapse className='justify-content-center' id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link >Story</Nav.Link>
                            <Nav.Link >Features</Nav.Link>
                            <Nav.Link >Roadmap</Nav.Link>
                            <Nav.Link >Rarity</Nav.Link>
                            <Nav.Link >Litepaper</Nav.Link>
                            <Nav.Link >FAQ </Nav.Link>
                            <Nav.Link  className='highlighted-nav active'>Stake</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                    {/* <Button className='btn_sol' >Connect <img src={buttonIcon} alt="asd"/></Button> */}
                </Container>
            </Navbar>
        </div>
        {/* Header end*/}

        {/* Hero */}
        <div className='hero-banner'>
            <div className='container'>
                <div className='banner-text'>
                    <h1>The Solciety</h1>
                    <h3>Find And Rescue Program</h3>
                    <div className='defult-btn'><a href='https://staking.thesolciety.gg' target='_blank'>Launch App</a></div>
                </div>
             </div>
        </div>
        {/* Hero end */}

        {/* inner section strat */}
        <div className='inner-section'>
        {/* Welcome start */}
        <section className='text-center padd-top welcome-top-sec'>
            <div className='container'>
                <h2 className='sub-heading'>Welcome</h2>
                <h3>Welcome to the Find and Rescue Program (FARP) Dashboard!</h3>
                <div className='inner-welcome'>
                    <p>With the help of our 1,444.4 freshly minted Genesis Solmates, the remaining 5,555.5 Genesis Solmates stranded in various parts of the new world will be found and rescued. </p>
                    <p>The lost Genesis Solmates  will be distributed weekly over a period of roughly 26 weeks. To participate in the FARP, you will need to obtain Find and Rescue Raffle Tickets (FARRT). To purchase FARRTs, you will need to accumulate $CIETY tokens. </p>
                    <p>Follow instructions below to get started!</p>
                </div>
            </div>
        </section>
         {/* Welcome end */}
         {/* the-mines-sec start */}
        <section className='text-center padd-top the-mines-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 left-the-mines'>
                        <img src={mines} alt='' />
                    </div>
                    <div className='col-md-6'>
                    <div className='right-the-mines'>
                        <h2 className='sub-heading'>The Mines</h2>
                        <div className='inner-welcome'>
                            <p>At the Mines, Genesis Solmates can be staked to mine $CIETY for a locking period of 1 day to 6 months (during the locked staking period your Genesis Solmate cannot be sold, withdrawn, or transferred). </p>
                            <p>All Genesis Solmates of various rarity have equal earning rates of $CIETY.<br/> $CIETY rewards can be boosted by staking Solmates for a longer duration.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        {/* the-mines-sec end */}
        {/* Introducing $CIETY  start*/}
        <section className='introducing-sciety-sec padd-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'><h2 className='sub-heading'>Introducing <br/><span>$CIETY</span></h2></div>
                    <div className='col-md-7 introducing-sciety-right'>
                        <p>$CIETY is the utility token in The Solciety that will be used in all future economic activity. Another main purpose of the $CIETY token is to incentivise members of the Solciety to hold their Solmates for longer periods. Each of the 6999.9 genesis Solmates will be able to be put to work and paid in $CIETY tokens that can be spent on activities such as this Find and Rescue Program.</p>
                    </div>
                </div>
                <div className='maximum-sciety-sec'>
                    <h5>Maximum $CIETY Supply</h5>
                    <h2>1,000,000,000</h2>
                    <p>Disclaimer: $CIETY has no inherent value. It can only be used within The Solciety ecosystem. Outside of this universe, in the “real world,” it has no economic value and cannot be redeemed for anything. 1 $CIETY = 1 $CIETY.</p>
                </div>
            </div>
        </section>
        {/* Introducing $CIETY  end*/}
        {/* The Factory start */}
        <section className='padd-top the-factory-sec'>
            <h2 className='arcTextFactory sub-heading'>The Factory</h2>
            <div className='inner-factory-sec'>
                <img src={collageoption} alt='' className='collageoption-img'/>
                <img src={factory} alt='' className='factory-img' />
            </div>
            <div className='container factor-detail'>
            <p>At The Factory, our Genesis Solmates can use the mined $CIETY to manufacture and purchase FARRTs to enter into the weekly lottery in the dashboard. </p>
            <p>Once purchased, the FARRTs will be automatically entered into the closest weekly lottery. </p>
            </div>
        </section>
         {/* The Factory end */}
        {/* Find And Rescue start */}
        <section className='find-rescue-top'> 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 left-find-rescue'><img src={rescue} alt='' /></div>
                    <div className='col-md-7 right-find-rescue'>
                        <div className='find-rescue-sec'>
                            <h2 className='sub-heading'>Find And Rescue</h2>
                            <p>FARP is conducted using a provably fair onchain lottery system. A random number of Genesis Solmates will be put up each week. Each FARRT entered into the lottery will only be burned after the weekly lottery is done, meaning each FARRT entered may win more than one Solmate NFT. Use your FARRTs wisely!</p>
                            <div className='defult-btn'><a href='https://staking.thesolciety.gg' target='_blank'>Launch App</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* footer start */}
        {/* footer start */}
        <footer className='Footer'>
            <div className='container'>
                <div className='inner-footer'>
                    <a role="button" class="nav-link" tabindex="0"><img src={footerlogo} alt='' /><span>Solciety</span></a>
                    <p> © The Solciety 2022, All Rights Reserved</p>
                    <ul>
                        <li><a href='https://twitter.com/TheSolcietyNFT' target="_blank"><img src={twitter} alt='' /></a></li>
                        <li><a href='https://discord.com/invite/cDEJS9Mwpp' target="_blank"><img src={discord} alt='' /></a></li>
                        <li><a href='https://medium.com/@thesolcietyproject/the-solciety-genesis-collection-515ec6e6d693' target="_blank"><img src={medium} alt='' /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
        {/* Find And Rescue end */}
        </div>
        {/* inner section end */}
    </div>
  );
}

export default Landing;
