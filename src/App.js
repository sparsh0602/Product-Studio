import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ScrollToTopRoute from './ScrollToTopRoute';


//App components
import Home from './Components/Home';
import OurApproach from './Components/OurApproach';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import ContactUs from './Components/ContactUs';
import OurWork from './Components/OurWork';
import NotFound from './Components/NotFound';
import SnapshyftPage from './Components/Child Pages js/SnapShyft';
import PrasadKaipaPage from './Components/Child Pages js/PrasadKaipa';
import LucidActPage from './Components/Child Pages js/LucidAct';
import MailstromPage from './Components/Child Pages js/Mailstrom';
import FrontAgePage from './Components/Child Pages js/FrontAge';
import SpaceChaosPage from './Components/Child Pages js/SpaceChaos';
import TraknProtectPage from './Components/Child Pages js/TraknProtect';
import WingaDoosPage from './Components/Child Pages js/WingaDoos';
import JantaPage from './Components/Child Pages js/Janta';
import LeelaPage from './Components/Child Pages js/Leela';
import BirdNestPage from './Components/Child Pages js/BirdNest';
import PooLitPage from './Components/Child Pages js/PooLit';
import KarmaCirclesPage from './Components/Child Pages js/KarmaCircles';
import ImpressPage from './Components/Child Pages js/Impress';


class App extends Component {
    reloadPage () {
      window.location.reload()
    }
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <ScrollToTopRoute exact path="/" component={Home} />
                        <ScrollToTopRoute path="/OurApproach" component={OurApproach} />
                        <ScrollToTopRoute path="/Services" component={Services} />
                        <ScrollToTopRoute path="/Pricing" component={Pricing} />
                        <ScrollToTopRoute path="/ContactUs" component={ContactUs} />
                        <ScrollToTopRoute path="/OurWork" component={OurWork} />

                        <ScrollToTopRoute path="/Snapshyft" component={SnapshyftPage} />
                        <ScrollToTopRoute path="/Prasad-Kaipa" component={PrasadKaipaPage} />
                        <ScrollToTopRoute path="/LucidAct" component={LucidActPage} />
                        <ScrollToTopRoute path="/Mailstrom" component={MailstromPage} />
                        <ScrollToTopRoute path="/Space-Chaos" component={SpaceChaosPage} />
                        <ScrollToTopRoute path="/TraknProtect" component={TraknProtectPage} />
                        <ScrollToTopRoute path="/WingaDoos" component={WingaDoosPage} />
                        <ScrollToTopRoute path="/Janta" component={JantaPage} />
                        <ScrollToTopRoute path="/Impress" component={ImpressPage} />
                        <ScrollToTopRoute path="/Front-Age" component={FrontAgePage} />
                        <ScrollToTopRoute path="/Leela" component={LeelaPage} />
                        <ScrollToTopRoute path="/BirdNest" component={BirdNestPage} />
                        <ScrollToTopRoute path="/PooLit" component={PooLitPage} />
                        <ScrollToTopRoute path="/KarmaCircles" component={KarmaCirclesPage} />

                        <ScrollToTopRoute component={NotFound} />
                    </Switch>        
                </div>    
            </BrowserRouter>
        );
    }
}

export default App;

