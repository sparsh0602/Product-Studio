import React, { Component } from 'react';
import Img from '../images/Work-child-pages/Products-mockups/spacechaos.png';
import Logo from '../images/Work-child-pages/Products-logos/2.png';
import Bg from '../images/Work-child-pages/Products-bg/6.png';
import ChildPage from '../ChildWork';


const SpaceChaos = ['UI/UX', 'IOS Development'];


class SpaceChaosPage extends Component{
	render(){
		return(
			<ChildPage backgroundBg={Bg} logo={Logo} ProductTech={SpaceChaos} 
			ProductImg={Img} ProductName="Space Chaos" ProductLocation="India" 
			ProductAbout="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
			/>
		);
	}
}

export default SpaceChaosPage;
