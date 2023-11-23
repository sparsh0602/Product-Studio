import React, {Component} from 'react';
import logo from './images/logo.png';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';


const Hamburger = () => (
	<div className="menuToggle">
	    <input type="checkbox" />
	    <div className="circle">
		    <div className="row dotRow"> 
		      	<span></span>
		        <span className="remove"></span>
		        <span></span>	
		    </div>
		    <div className="row dotRow"> 
		        <span className="remove"></span>
		        <span></span>
		        <span className="remove"></span>	
		    </div>
		    <div className="row dotRow"> 
		        <span></span>
		        <span className="remove"></span>
		        <span></span>	
		    </div>
	   	</div>
        <ul className="menu">
	        <NavLink exact to="/" onClick={() => this.reloadPage()}><li>Home</li></NavLink>
	        <NavLink to="/OurApproach" onClick={() => this.reloadPage()}><li>Our Approach</li></NavLink>
	        <NavLink to="/Services" onClick={() => this.reloadPage()}><li>Services</li></NavLink>
	        <NavLink to="/Pricing" onClick={() => this.reloadPage()}><li>Pricing and FAQs</li></NavLink>
	        <NavLink to="/OurWork" onClick={() => this.reloadPage()}><li>Our Work</li></NavLink>
	        <NavLink to="/ContactUs" onClick={() => this.reloadPage()}><li>Contact Us</li></NavLink>
	    </ul>
	</div>
);


class Header extends Component{
	constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      if (isTop !== this.state.isTop) {
        $(".ps-navbar").css({ "height":"10%", "margin-top":"-0.4em"});
        $(".contactBtn").css({"color":"#0E839F","border": "1.5px solid #0E839F","background":"white"});
        $(".menuToggle .circle .dotRow span").css("background", "#0E839F");
        $(".menuToggle .circle").css({"border":"2px solid #0E839F","background":"white"});
      }
      else{
      	$(".ps-navbar").css({"background":"transparent","margin-top":"auto"});
      	$(".contactBtn").css({"color":"white","border": "1.5px solid #ffffff","background":"transparent"});
      	$(".menuToggle .circle .dotRow span").css("background", "white");
        $(".menuToggle .circle").css({"border":"2px solid white","background":"transparent"});
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }
  	render(){
		return(
			<div>
				<nav className="ps-navbar" style={{ position: 'fixed', top: 0 }}>
			    	<div className="col-lg-12 ps-logo">
			    		<NavLink className="navbar-brand" to="/" onClick={() => this.reloadPage()}><img src={logo} alt="not available" /></NavLink>
				    	<NavLink to="/ContactUs" className="btn contactBtn" onClick={() => this.reloadPage()}>Contact Us</NavLink>
				    	<Hamburger />
				    </div>
				</nav>
			</div>
		);
	}
}

export default Header;