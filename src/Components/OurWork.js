import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import leelaImg from './images/portfolio/leela.png';
import leelaLogo from './images/portfolio/Leela-Logo.png';
import impressImg from './images/portfolio/impress.png';
import impressLogo from './images/portfolio/impress-logo.png';
import poolitImg from './images/portfolio/poolit.png';
import poolitLogo from './images/portfolio/poolit-logo.png';
import birdnestImg from './images/portfolio/birdnest.png';
import birdnestLogo from './images/portfolio/birdnest-logo.png';
import snapshyftImg from './images/portfolio/snapshyft.png';

import prasadLogo from './images/portfolio/prasadkaipa-logo.png';
import frontageImg from './images/portfolio/frontage.png';
import frontageLogo from './images/portfolio/frontage-logo.png';
import mailstromImg from './images/portfolio/mailstrom.png';
import mailstromLogo from './images/portfolio/mailstrom-logo.png';
import lucidactImg from './images/portfolio/lucidact.png';
import lucidactLogo from './images/portfolio/lucidact-logo.jpg';
import tracknprotectImg from './images/portfolio/traknprotect.png';
import traknprotectLogo from './images/portfolio/traknprotect-logo.png';
import wingadoosImg from './images/portfolio/wingadoos.png';
import wingadoosLogo from './images/portfolio/wingadoos-logo.png';
import BtrImg from './images/portfolio/btr.png';
import BtrLogo from './images/portfolio/btr-logo.png';
import aquabitImg from './images/portfolio/aquabit.png';
import aquabitLogo from './images/portfolio/aquabit-logo.png';
import productcloudImg from './images/portfolio/productcloud.png';
import productcloudLogo from './images/portfolio/productcloud-logo.png';
import RZeroImg from './images/portfolio/rzero.png';
import rzeroLogo from './images/portfolio/rzero-logo.png';
import SelflesslyImg from './images/portfolio/selflessly.png';
import selflesslyLogo from './images/portfolio/selflessly-logo.png';
import VolocareImg from './images/portfolio/volocare.png';
import volocareLogo from './images/portfolio/volocare-logo.png';
import carpemedImg from './images/portfolio/carpemed.png';
import carpemedLogo from './images/portfolio/carpemed-logo.png';
import ambquadImg from './images/portfolio/ambquad.png';
import ambquadLogo from './images/portfolio/ambquad-logo.png';
import fiftypointsixImg from './images/portfolio/fiftypointsix.png';
import fiftypointsixLogo from './images/portfolio/fiftypointsix-logo.png';
import lookouthealthImg from './images/portfolio/lookouthealth.png';
import lookouthealthLogo from './images/portfolio/lookouthealth-logo.png';
import redcrewImg from './images/portfolio/redcrew.png';
import redcrewLogo from './images/portfolio/redcrew-logo.png';
import chamaeleonImg from './images/portfolio/chamaeleon.png';
import chamaeleonLogo from './images/portfolio/chamaeleon-logo.png';
import pneuraImg from './images/portfolio/pneura.png';
import pneuraLogo from './images/portfolio/pneura-logo.png';
import onrampImg from './images/portfolio/onramp.png';
import onrampLogo from './images/portfolio/onramp-logo.png';

import indiaFlag from './images/portfolio/india.png';
import australiaFlag from './images/portfolio/australia.png';
import ukFlag from './images/portfolio/uk.png';
import usaFlag from './images/portfolio/usa.png';
import nzFlag from './images/portfolio/nz.png';
import canadaFlag from './images/portfolio/canada.png';
import MetaDecorator from './util/MetaDecorator';
import metaThumbnail from "./images/metaThumbnail.png";

import simplePrintPortfolio from "./images/newly_added_portfolio/simplePrintPortfolio.png"
import simplePrintLogo from "./images/newly_added_logos/simplePrintLogo.png"

import audioTunePortfolio from "./images/newly_added_portfolio/audioTunePortfolio.png"
import AudioTuneLogo from "./images/newly_added_logos/AudioTuneLogo.png"

import citoPlusPortfolio from "./images/newly_added_portfolio/citoPlusPortfolio.png"
import citoPlusLogo from "./images/newly_added_logos/citoPlusLogo.png"

import prasadKaipaPortfolio1 from "./images/newly_added_portfolio/prasadKaipaPortfolio1.png"
import prasadKaipaPortfolio2 from "./images/newly_added_portfolio/prasadKaipaPortfolio2.png"
import prasadKaipalogo from "./images/newly_added_logos/prasadKaipalogo.png"

import scoachPortfolio from "./images/newly_added_portfolio/scoachPortfolio.png"
import ScoachLogo from "./images/newly_added_logos/ScoachLogo.png"
import snapShyftLogo from "./images/newly_added_logos/snapShyftLogo.png"

import worksBlitzzPortfolio1 from "./images/newly_added_portfolio/worksBlitzzPortfolio1.png"
import worksBlitzzPortfolio2 from "./images/newly_added_portfolio/worksBlitzzPortfolio2.png"
import blitzzLogo from "./images/newly_added_logos/blitzzLogo.png"

const ourWork = require("./data/OurWork.json");
/* Component for hero-bars */
const Bars = () => (
    <div className="row ps-container bbar">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-bars"> 
            <div className="row">                            
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid1 animated slideInDown animate-a"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid2 animated slideInDown animate-b"></div>
            </div>
            <div className="ps-textWrapper">
                <h1 className="animated slideInLeft"><strong>Our work</strong></h1>
                <h4 className="animated slideInLeft">Here are a few products that our team has built so far.</h4>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-bars"> 
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid3 animated slideInDown animate-c"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ps-grid grid4 img2 animated slideInDown animate-d"></div>
            </div>
        </div> 
        <Header />           
    </div>
);

const TechnologyUsed = (props) => ( 
    <div className={`tech-names ${props.count && props.count <=2? 'tech-name-block': 'tech-name-inline'}`}>
        {props.message}
    </div>
);

const Leela = ['Mobile Development', 'UI/UX', 'Testing'];
const Impress = ['Web Development', 'UI/UX', 'Testing', 'iOS Development', 'DevOps'];
const KarmaCircles = ['Web Development', 'Product Strategy', 'UI/UX', 'Mobile Development', 'DevOps','Testing'];
const POOLit = ['Web Development', 'Product Strategy', 'UI/UX', 'Mobile Development', 'DevOps','Testing'];
const BirdNest = ['Web Development', 'UI/UX', 'Testing'];
const SnapShyft = ['Web Development','UI/UX','Testing', 'Mobile Development', 'DevOps'];
const Prasadkaipa = ['Web Development', 'UI/UX', 'Testing'];
const FrontAge = ['Web Development', 'UI/UX', 'DevOps','Testing'];
const Mailstrom = ['Mobile Development', 'Testing'];
const LucidAct = ['Web Development', 'UI/UX', 'Testing'];
const TraknProtect = ['Web Development', 'Testing'];
const WingaDoos = ['Web Development', 'UI/UX', 'Testing'];
const AquaBit = ['Web Development', 'UI/UX', 'DevOps','Testing'];
const Btr = ['UI/UX'];
const ProductCloud = ['Web Development', 'UI/UX', 'Testing'];
const Selflessly = ['Web Development', 'UI/UX', 'DevOps', 'Testing'];
const Volocare = ['iOS Development', 'Testing','UI/UX','Web Development'];
const RZero = ['Mobile Development', 'Testing'];
const FiftyPointSix = ['Web Development', 'Testing'];
const LookoutHealth = ['Web Development', 'UI/UX', 'Testing'];
const CarpeMed = ['Mobile Development', 'Testing'];
const AmbQuad = ['Web Development'];
const RedCrew = ['Android Development', 'Testing', 'UI/UX'];
const Chamaeleon = ['Web Development', 'Testing', 'UI/UX'];
const pNeura = ['Mobile Development', 'DevOps','Testing'];
const OnRamp = ['UI/UX'];

const AudioRetuneData=['iOS Development','UI/UX','Testing','Web Development']
const ScoachData = ['Mobile Development', 'Testing'];
const SimplePrintsData=['Web Development','SEO','Testing','iOS Development']
const CitoPlusData=['Web Development','UI/UX','Testing']
const Blitzz=['UI/UX',"Web Development"]


const flagImage = {
    USA: usaFlag,
    UK: ukFlag,
    AUS: australiaFlag,
    CAN: canadaFlag,
    IND: indiaFlag,
    NZL: nzFlag,
};

const headingContent = (product, flag) => {
    return(
        <div className="product-heading-container">
            <div className="heading">
                {product}
            </div>
            <div className="flag-container">
                <img className="flag-img-style" alt="Flag" src={flagImage[flag]}/>
                <div className="flag-text">{flag}</div>
            </div>
        </div>
    )
}

class OurWork extends Component {
	render() {
		return (
			<div className="container-fluid ps-bg">
                <MetaDecorator 
                title={ourWork.pageTitle}
                description={ourWork.pageDescription}
                imageUrl={metaThumbnail}/>
				<Bars />
                <div className="our-work-cards">
                
                    <div className = "card-row">   
                        <div className="card hvr-float">
                            <div className="card-img productcloud-img-bg">
                                <img className="productcloud-img-style" alt="ProductCloud" src={productcloudImg}/>
                                <img className= "productcloud-logo-style" alt="productCloud Logo" src={productcloudLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('ProductCloud', 'AUS')}
                                <div className="technologies">
                                    {ProductCloud.map((message, index) => <TechnologyUsed key={index} message={message} count={ProductCloud.length} />)}    
                                </div>
                            </div>
                        </div>  

                        <div className="card  hvr-float">
                            <div className="card-img impress-img-bg">
                                <img className="impress-img-style" alt="Impress" src={impressImg}/>
                                <img className= "impress-logo-style" alt="Impress Logo" src={impressLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Impress', 'USA')}
                                <div className="technologies">
                                    {Impress.map((message, index) => <TechnologyUsed key={index} message={message} count={Impress.length} />)}    
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className = "card-row">   

                    <div className="card hvr-float">
                            <div className="card-img simplePrints-img-bg">
                                <img className="simplePrints-img-style" alt="simplePrints" src={simplePrintPortfolio} />
                                <img className="simplePrints-logo-style" alt="simplePrints Logo" src={simplePrintLogo} />
                            </div>
                            <div className="card-content">
                                {headingContent('SimplePrints', 'USA')}
                                <div className="technologies">
                                    {SimplePrintsData.map((message, index) => <TechnologyUsed key={index} message={message} count={SimplePrintsData.length} />)}
                                </div>
                            </div>
                        </div>

                        <div className="card hvr-float">
                            <div className="card-img fiftypoint6-img-bg">
                                <img className="selflessly-img-style" alt="FiftyPoint6" src={fiftypointsixImg}/>
                                <img className="fiftypoint6-logo-style" alt="FiftyPoint6 Logo" src={fiftypointsixLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('FIFTYPOINT6', 'UK')}
                                <div className="technologies">
                                    {FiftyPointSix.map((message, index) => <TechnologyUsed key={index} message={message} count={FiftyPointSix.length} />)}    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className = "card-row">  


                        <div className="card hvr-float">
                            <div className="card-img redcrew-img-bg">
                                <img className="redcrew-img-style" alt="RedCrew" src={redcrewImg}/>
                                <img className= "redcrew-logo-style" alt="RedCrew Logo" src={redcrewLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('RedCrew', 'AUS')}
                                <div className="technologies">
                                    {RedCrew.map((message, index) => <TechnologyUsed key={index} message={message} count={RedCrew.length} />)}    
                                </div>
                            </div>
                        </div>  


                        

                        <div className="card hvr-float">
                            <div className="card-img citoPlus-img-bg">
                                <img className="citoPlus-img-style" alt="WingaDoos" src={citoPlusPortfolio} />
                                <img className="citoPlus-logo-style" alt="Wingadoos Logo" src={citoPlusLogo} />
                            </div>
                            <div className="card-content">
                                {headingContent('CitoPlus', 'AUS')}
                                <div className="technologies">
                                    {CitoPlusData.map((message, index) => <TechnologyUsed key={index} message={message} count={CitoPlusData.length} />)}
                                </div>
                            </div>
                        </div>
                      
                    </div>

                    <div className = "card-row">
                        <div className="card hvr-float">
                            <div className="card-img audioRetune-bg">
                                <img className="audioTune-img-style" alt="audioTune" src={audioTunePortfolio}/>
                                <img className="audioTune-logo-style" alt="audioTune Logo" src={AudioTuneLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('AudioRetune', 'USA')}
                                <div className="technologies">
                                    {AudioRetuneData.map((message, index) => <TechnologyUsed key={index} message={message} count={AudioRetuneData.length} />)}    
                                </div>
                            </div>
                        </div>

                        <div className="card hvr-float">
                            <div className="card-img scoach-bg">
                                <img className="scoach-img-style" alt="scoach" src={scoachPortfolio}/>
                                <img className="scoach-logo-style" alt="scoach Logo" src={ScoachLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Scoach', 'AUS')}
                                <div className="technologies">
                                    {ScoachData.map((message, index) => <TechnologyUsed key={index} message={message} count={ScoachData.length} />)}    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className = "card-row">   
                     
                        <div className="card hvr-float">
                            <div className="card-img volocare-img-bg">
                                <img className="impress-img-style" alt="Volocare" src={VolocareImg}/>
                                <img className="volocare-logo-style" alt="Volocare Logo" src={volocareLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Volocare', 'USA')}
                                <div className="technologies">
                                    {Volocare.map((message, index) => <TechnologyUsed key={index} message={message} count={Volocare.length} />)}    
                                </div>
                            </div>
                        </div> 

                        <div className="card hvr-float">
                            <div className="card-img blitzz-bg">
                                <img className="blitzz1-img-style" alt="Prasad Kaipa" src={worksBlitzzPortfolio1}/>
                                <img className="blitzz2-img-style" alt="Prasad Kaipa" src={worksBlitzzPortfolio2}/>
                                <img className="blitzz-logo-style" alt="Prasad Kaipa Logo" src={blitzzLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Blitzz', 'USA')}
                                <div className="technologies">
                                    {Blitzz.map((message, index) => <TechnologyUsed key={index} message={message} count={Blitzz.length} />)}    
                                </div>
                            </div>
                        </div>

                     

                    </div>
                    
                  
                    <div className = "card-row">
                    <div className="card hvr-float">
                            <div className="card-img poolit-img-bg">
                                <img className="impress-img-style" alt="POOLit" src={poolitImg}/>
                                <img className="volocare-logo-style" alt="POOLit Logo" src={poolitLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('POOLit', 'USA')}
                                <div className="technologies">
                                    {POOLit.map((message, index) => <TechnologyUsed key={index} message={message} count={POOLit.length} />)}    
                                </div>
                            </div>
                        </div>
                  
                    <div className="card hvr-float">
                            <div className="card-img snapshyft-img-bg">
                                <img className="impress-img-style" alt="Snapshyft" src={snapshyftImg}/>
                                <img className="snapshyft-logo-style" alt="Snapshyft Logo" src={snapShyftLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('SnapShyft', 'USA')}
                                <div className="technologies">
                                    {SnapShyft.map((message, index) => <TechnologyUsed key={index} message={message} count={SnapShyft.length} />)}    
                                </div>
                            </div>
                        </div> 



                    </div>

                    <div className="card-row">

                    <div className="card hvr-float">
                            <div className="card-img pneura-img-bg">
                                <img className="pneura-img-style" alt="pNeura" src={pneuraImg}/>
                                <img className= "pneura-logo-style" alt="pNeura Logo" src={pneuraLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('pNeura', 'AUS')}
                                <div className="technologies">
                                    {pNeura.map((message, index) => <TechnologyUsed key={index} message={message} count={pNeura.length} />)}    
                                </div>
                            </div>
                        </div>  
                        <div className="card hvr-float">
                            <div className="card-img selflessly-img-bg">
                                <img className="selflessly-img-style" alt="Selflessly" src={SelflesslyImg}/>
                                <img className="productcloud-logo-style" alt="Selflessly Logo" src={selflesslyLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Selfless.ly', 'USA')}
                                <div className="technologies">
                                    {Selflessly.map((message, index) => <TechnologyUsed key={index} message={message} count={Selflessly.length} />)}    
                                </div>
                            </div>
                        </div>  

                    
                    </div>

                    <div className = "card-row">

                    <div className="card  hvr-float">
                            <div className="card-img onramp-img-bg">
                                <img className="onramp-img-style" alt="OnRamp" src={onrampImg}/>
                                <img className= "onramp-logo-style" alt="OnRamp Logo" src={onrampLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('OnRamp', 'USA')}
                                <div className="technologies">
                                    {OnRamp.map((message, index) => <TechnologyUsed key={index} message={message} count={OnRamp.length} />)}    
                                </div>
                            </div>
                        </div> 


                    <div className="card  hvr-float">
                            <div className="card-img chamaeleon-img-bg">
                                <img className="chamaeleon-img-style" alt="Chamaeleon" src={chamaeleonImg}/>
                                <img className= "chamaeleon-logo-style" alt="Chamaeleon Logo" src={chamaeleonLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Chamaeleon', 'USA')}
                                <div className="technologies">
                                    {Chamaeleon.map((message, index) => <TechnologyUsed key={index} message={message} count={Chamaeleon.length} />)}    
                                </div>
                            </div>
                        </div> 
                
                    


                        
                    </div>
                    
                    <div className="card-row">

                    <div className="card hvr-float">
                            <div className="card-img lookouthealth-img-bg">
                                <img className="selflessly-img-style" alt="Lookout Health" src={lookouthealthImg}/>
                                <img className="about-logo-style img-resize-height" alt="Lookout Health Logo" src={lookouthealthLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Lookout Health', 'USA')}
                                <div className="technologies">
                                    {LookoutHealth.map((message, index) => <TechnologyUsed key={index} message={message} count={LookoutHealth.length} />)}    
                                </div>
                            </div>
                        </div>
                    <div className="card hvr-float">
                            <div className="card-img aquabit-img-bg">
                                <img className="impress-img-style" alt="AquaBit" src={aquabitImg}/>
                                <img className="aquabit-logo-style" alt="Aquabit Logo" src={aquabitLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('AquaBit', 'USA')}
                                <div className="technologies">
                                    {AquaBit.map((message, index) => <TechnologyUsed key={index} message={message} count={AquaBit.length} />)}    
                                </div>
                            </div>
                        </div> 

                     

                     
                    </div>


                    <div className = "card-row">

                    <div className="card hvr-float">
                            <div className="card-img frontage-bg">
                                <img className="frontage-img-style" alt="FrontAge" src={frontageImg} />
                                <img className="volocare-logo-style" alt="FrontAge Logo" src={frontageLogo} />
                            </div>
                            <div className="card-content">
                                {headingContent('Frontage Consulting', 'AUS')}
                                <div className="technologies">
                                    {FrontAge.map((message, index) => <TechnologyUsed key={index} message={message} count={FrontAge.length} />)}
                                </div>
                            </div>
                        </div>

<div className="card hvr-float">
                            <div className="card-img carpemed-img-bg">
                                <img className="impress-img-style" alt="CarpeMed" src={carpemedImg}/>
                                <img className="volocare-logo-style" alt="CarpeMed Logo" src={carpemedLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('CarpeMed', 'USA')}
                                <div className="technologies">
                                    {CarpeMed.map((message, index) => <TechnologyUsed key={index} message={message} count={CarpeMed.length} />)}    
                                </div>
                            </div>
                        </div> 


                 


                    </div>

                    <div className = "card-row">

                    <div className="card hvr-float">
                            <div className="card-img ambquad-img-bg">
                                <img className="wingadoos-img-style" alt="AmbQuad" src={ambquadImg} />
                                <img className="fiftypoint6-logo-style" alt="AmbQuad Logo" src={ambquadLogo} />
                            </div>
                            <div className="card-content">
                                {headingContent('AmbQuad', 'NZL')}
                                <div className="technologies">
                                    {AmbQuad.map((message, index) => <TechnologyUsed key={index} message={message} count={AmbQuad.length} />)}
                                </div>
                            </div>
                        </div>
                        <div className="card hvr-float">
                            <div className="card-img btr-img-bg">
                                <img className="btr-img-style" alt="BTR" src={BtrImg}/>
                                <img className="volocare-logo-style" alt="BTR Logo" src={BtrLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('BTR', 'USA')}
                                <div className="technologies">
                                    {Btr.map((message, index) => <TechnologyUsed key={index} message={message} count={Btr.length} />)}    
                                </div>
                            </div>
                        </div>

                    
                    </div>

                    <div className = "card-row">

                    <div className="card hvr-float">
                            <div className="card-img rzero-img-bg">
                                <img className="impress-img-style" alt="R-Zero" src={RZeroImg} />
                                <img className="volocare-logo-style" alt="R-zero Logo" src={rzeroLogo} />
                            </div>
                            <div className="card-content">
                                {headingContent('R-Zero', 'USA')}
                                <div className="technologies">
                                    {RZero.map((message, index) => <TechnologyUsed key={index} message={message} count={RZero.length} />)}
                                </div>
                            </div>
                        </div>
                        <div className="card hvr-float">
                            <div className="card-img lucidact-img-bg">
                                <img className="lucidact-img-style" alt="LucidAct" src={lucidactImg}/>
                                <img className="about-logo-style img-resize-height" alt="LucidAct Logo" src={lucidactLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('LucidAct', 'USA')}
                                <div className="technologies">
                                    {LucidAct.map((message, index) => <TechnologyUsed key={index} message={message} count={LucidAct.length} />)}    
                                </div>
                            </div>
                        </div>

                      
                    </div>

                    <div className = "card-row">
                    <div className="card hvr-float">
                            <div className="card-img traknprotect-img-bg">
                                <img className="traknprotect-img-style" alt="TraknProtect" src={tracknprotectImg} />
                                <img className="about-logo-style" alt="TraknProtect Logo" src={traknprotectLogo} />
                            </div>
                            <div className="card-content">
                                {headingContent('TraknProtect', 'USA')}
                                <div className="technologies">
                                    {TraknProtect.map((message, index) => <TechnologyUsed key={index} message={message} count={TraknProtect.length} />)}
                                </div>
                            </div>
                        </div>
                        <div className="card hvr-float">
                            <div className="card-img leela-img-bg">
                                <img className="impress-img-style" alt="Leela" src={leelaImg}/>
                                <img className="about-logo-style" alt="Leela Logo" src={leelaLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Leela', 'CAN')}
                                <div className="technologies">
                                    {Leela.map((message, index) => <TechnologyUsed key={index} message={message} count={Leela.length} />)}    
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className = "card-row">

                    <div className="card hvr-float">
                            <div className="card-img birdnest-img-bg">
                                <img className="birdnest-img-style" alt="BirdNest" src={birdnestImg} />
                                <img className="about-logo-style" alt="BirdNest Logo" src={birdnestLogo} />
                            </div>
                            <div className="card-content">
                                {headingContent('BirdNest', 'USA')}
                                <div className="technologies">
                                    {BirdNest.map((message, index) => <TechnologyUsed key={index} message={message} count={BirdNest.length} />)}
                                </div>
                            </div>
                        </div>
                        <div className="card hvr-float">
                            <div className="card-img prasadkaipa-bg">
                                <img className="prasadkaipa1-img-style" alt="Prasad Kaipa" src={prasadKaipaPortfolio1}/>
                                <img className="prasadkaipa2-img-style" alt="Prasad Kaipa" src={prasadKaipaPortfolio2}/>
                                <img className="prasadkaipa-logo-style" alt="Prasad Kaipa Logo" src={prasadLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Prasad Kaipa', 'USA')}
                                <div className="technologies">
                                    {Prasadkaipa.map((message, index) => <TechnologyUsed key={index} message={message} count={Prasadkaipa.length} />)}    
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className = "card-row">


                    <div className="card hvr-float">
                            <div className="card-img wingadoos-img-bg">
                                <img className="wingadoos-img-style" alt="WingaDoos" src={wingadoosImg} />
                                <img className="productcloud-logo-style" alt="Wingadoos Logo" src={wingadoosLogo} />
                            </div>
                            <div className="card-content">
                                {headingContent('WingaDoos', 'USA')}
                                <div className="technologies">
                                    {WingaDoos.map((message, index) => <TechnologyUsed key={index} message={message} count={WingaDoos.length} />)}
                                </div>
                            </div>
                        </div>
                        <div className="card hvr-float">
                            <div className="card-img mailstrom-img-bg">
                                <img className="mailstrom-img-style" alt="MailStrom" src={mailstromImg}/>
                                <img className="about-logo-style img-resize-height" alt="MailStrom Logo" src={mailstromLogo}/>
                            </div>
                            <div className="card-content">
                                {headingContent('Mailstrom', 'USA')}
                                <div className="technologies">
                                    {Mailstrom.map((message, index) => <TechnologyUsed key={index} message={message} count={Mailstrom.length} />)}    
                                </div>
                            </div>
                        </div>
   
                    </div>
                </div>

        
				<Footer />
			</div>
		);
	}
}


export default OurWork;