import React, { Component } from 'react';
import Img from '../images/Work-child-pages/Products-mockups/snapshyft.png';
import Logo from '../images/Work-child-pages/Products-logos/14.png';
import Bg from '../images/Work-child-pages/Products-bg/10.png';
import ChildPage from '../ChildWork';


const SnapShyft = ['Mobile Development', 'UI/UX','Web Development'];

class SnapShyftPage extends Component{
	render(){
		return(
			<ChildPage backgroundBg={Bg} logo={Logo} ProductTech={SnapShyft} 
			ProductImg={Img} ProductName="SnapShyft" ProductLocation="San Francisco" 
			ProductAbout="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
			/>
		);
	}
}

export default SnapShyftPage;
