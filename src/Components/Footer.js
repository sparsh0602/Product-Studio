import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
	
class Footer extends Component{
	render() {
		const year = new Date().getFullYear();
		return(
			<div>
				<div className="row ps-footer">
			        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 footer-hide-mobile">
			            <h4>GET IN TOUCH</h4>
			            <h5><a href="mailto:hello@productstudio.us">hello@productstudio.us</a></h5>
			        </div>
			        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
			            <div className="col-lg-12 lwt">
			                <p>Let’s work together</p>
			            </div>
			            <h2><strong><NavLink to="/ContactUs">HOW CAN WE HELP ?</NavLink></strong></h2>
			        </div>
			        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 footer-hide-web">
			            <h4>GET IN TOUCH</h4>
			            <a href="mailto:hello@productstudio.us">hello@productstudio.us</a>
			        </div>
			       	<div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 ps-ft-items">
			            <ul>
			               	<li><NavLink exact to="/" onClick={() => this.reloadPage()}>Home</NavLink></li>
							<li><NavLink to="/OurApproach" onClick={() => this.reloadPage()}>Our Approach</NavLink></li>
							<li><NavLink to="/Services" onClick={() => this.reloadPage()}>Services</NavLink></li>
							<li><NavLink to="/Pricing" onClick={() => this.reloadPage()}>Pricing and FAQs</NavLink></li>
							<li><NavLink to="/OurWork" onClick={() => this.reloadPage()}>Our Work</NavLink></li>
							<li><NavLink to="/ContactUs" onClick={() => this.reloadPage()}>Contact Us</NavLink></li>
			            </ul>
			        </div>
			    </div>
			    <footer className="row">
			        <div className="ps-copyRight">
			            <h5>&copy;{year} ProductStudio All rights reserved.</h5>
			        </div>
			    </footer>   
		    </div>
		);
	}
}

export default Footer;