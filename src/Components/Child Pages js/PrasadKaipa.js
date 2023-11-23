import React, { Component } from 'react';
import prasadimg from '../images/Work-child-pages/Products-mockups/prasadkaipa.png';
import prasadlogo from '../images/Work-child-pages/Products-logos/11.png';
import maroonbg from '../images/Work-child-pages/Products-bg/6.png';
import ChildPage from '../ChildWork';


const Prasadkaipa = ['Web Development', 'UI/UX'];

class PrasadKaipaPage extends Component{
	render(){
		return(
			<ChildPage backgroundBg={maroonbg} logo={prasadlogo} ProductTech={Prasadkaipa} 
			ProductImg={prasadimg} ProductName="Prasad Kaipa" ProductLocation="San Francisco" 
			ProductAbout="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
			/>
		);
	}
}

export default PrasadKaipaPage;
