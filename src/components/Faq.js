import React from 'react';
import { NavLink, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import '../components/Faq.scss';
import Accordian from './Accordian/Accordian';

function Faq() {
  return (
    <div id='Faq' className='faq-main'>
        <div className="container">
          <h2>FAQ</h2>

        <Accordian title='What is The Solciety? What are Solmates?'>
            <p>The Solciety is a new community taking place on Solana, and its citizens are collectively known as the Solmates. Solmates are hand drawn, algorithmically generated characters based on an anime style artwork. They are the first NFTs ever to be imbued with personalities. </p>
        </Accordian>
        <Accordian title='How do I purchase a SOLmate NFT?'>
        <p>Our mint of 1,444.4 Solmates are now 100% sold out. You can still buy Solmates on Magic Eden, a secondary marketplace. Our collection can be found <NavLink href="https://magiceden.io/marketplace/the_solciety" target="_blank">here</NavLink></p>
        </Accordian>
        <Accordian title='How many Solmates will there be?'>
        <p>6,999.9 - There will be a collection of 1444.4 Genesis Solmates available at mint, with an additional 5,555.5 that will be raffled each week over roughly 26 weeks</p>
        </Accordian>
        <Accordian title='Will there always be 6999.9'>
        <p>There will only ever be 6999.9 Genesis Solmates. In the second phase of The Solciety, a new generation of Solmates will be introduced that will be playable. These will be a completely different set of characters that differ in both looks and utility. </p>
        </Accordian>
        <Accordian title='… 0.9?'>
        <p>Exactly.</p>
        </Accordian>
        <Accordian title='Is each SOLmate unique?'>
        <p>Each Solmate is unique in their personalities and style. We have ensured via code on the backend that no two Solmate NFTs will be the same. We will publish a tool post drop which will allow users to analyse the distributions of the different traits.</p>
        </Accordian>
        <Accordian title='What can I do within The Solciety?'>
        <p>The Solciety will be split into three phases: Genesis, Evolution and Cooperation. The Genesis phase consists of an initial drop of the 1,444.4 Genesis Solmates. Following the mint we will then raffle off 5,555.5 in weekly lotteries. During the Evolution phase we will be introducing the Mating Games™ and will post more details post mint. </p>
        </Accordian>
        <Accordian title='What is Stakelocking? '>
        <p>Stakelocking is a novel concept first introduced by Curve Finance which aligns rewards with those that show their long term commitment to the project. The longer that you commit to locking your Solmate, the greater your $CIETY token rewards will be. To learn more, read our <NavLink href="https://medium.com/@thesolcietyproject/the-solciety-genesis-collection-515ec6e6d693" target="_blank">blog post.</NavLink></p>
        </Accordian>
        <Accordian title='What is $CIETY? '>
        <p>$CIETY is our utility token that will be used in the Solciety metaverse. $CIETY will be needed to purchase Find and Rescue Raffle Tickets (FARTTs). To earn $CIETY, you will need to stakelock your Solmate.</p>
        </Accordian>
        <Accordian title='What are FARRTs?'>
        <p>FARRTs are the raffle tickets which you will need to enter our weekly lottery in our Find and Rescue program. Purchase FARRTs with $CIETY and enter them weekly to save our 5,555.5 Solmates from the old world.</p>
        </Accordian>
        
        <Accordian title='What are the economics?'>
        <p>30% of our mint proceeds will go towards our charity partner Givewell. The remaining 70% of our mint proceeds will be reserved for the community treasury for development. </p>
        </Accordian>
        <Accordian title='Will there be resale royalties?'>
        <p>6.9% royalties will be applied to all resales, 15% of this will be donated to Givewell.</p>
        </Accordian>
        <Accordian title='How do we know you actually donated to charity?'>
        <p>We will post verification via Givewell when we donate our mint proceeds. Royalty donations have been embedded into the Solmate metadata so once our Solmates have been minted, you’ll be able to crosscheck with Givewell’s official Solana address on their <NavLink href='https://www.givewell.org/about/donate/cryptocurrency?FormStack_Form_Submission__c.referrer_header=https://www.givewell.org/' target="_blank">donation page.</NavLink></p>
        </Accordian>
        <Accordian title='Why Givewell?'>
        <p>Givewell has a strong focus on in-depth research to maximize for the most amount of lives saved per dollar spent. We at The Solciety strongly believe in this mission and is the reason we have decided to go with Givewell.</p>
        </Accordian>
        <Accordian title='Get in touch with us'>
        <p>Feel free to get in touch with us on Twitter <NavLink href='https://twitter.com/TheSolcietyNFT' target="_blank">@TheSolcietyNFT </NavLink> or on <NavLink href="https://discord.com/invite/cDEJS9Mwpp" target="_blank">Discord</NavLink>.</p>
        </Accordian>
        </div>
    </div>
  )
}

export default Faq;