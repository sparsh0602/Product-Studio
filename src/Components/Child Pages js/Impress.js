import React, { Component } from 'react';
import Img from '../images/Work-child-pages/Products-mockups/impress.png';
import Logo from '../images/Work-child-pages/Products-logos/6.png';
import Bg from '../images/Work-child-pages/Products-bg/7.png';
import ChildPage from '../ChildWork';


const Impress = ['Web Development', 'IOS Development', 'UI/UX'];


class ImpressPage extends Component{
	render(){
		return(
			<ChildPage backgroundBg={Bg} logo={Logo} ProductTech={Impress} 
			ProductImg={Img} ProductName="Impress" ProductLocation="San Francisco" 
			ProductAbout="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
			/>
		);
	}
}

export default ImpressPage;
