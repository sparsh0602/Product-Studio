import React, { Component } from 'react';
import Img from '../images/Work-child-pages/Products-mockups/poolit.png';
import Logo from '../images/Work-child-pages/Products-logos/4.png';
import Bg from '../images/Work-child-pages/Products-bg/4.png';
import ChildPage from '../ChildWork';


const PooLit = ['Web Development', 'Product Strategy', 'Mobile Development', 'UI/UX'];


class MailstromPage extends Component{
	render(){
		return(
			<ChildPage backgroundBg={Bg} logo={Logo} ProductTech={PooLit} 
			ProductImg={Img} ProductName="KarmaCircles" ProductLocation="India" 
			ProductAbout="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
			/>
		);
	}
}

export default MailstromPage;
