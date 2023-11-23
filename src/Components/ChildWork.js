import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


const Bars = () => (
    <div className="row ps-container bbar">
		
        <Header />           
    </div> 
);

const Technology = (props) => (
    
	<div className="tech-Names">
		{props.message}
	</div>

);


class ChildPage extends Component{
	constructor(props) {
		super(props);
		this.state = {}
	}
	render(){
		return(
		<div>
			<div className="container-child-page">
    			<div style={{backgroundImage:`url(${this.props.backgroundBg})`}} className="flex-product-info">
        			<div className="heading-product">
            			<div className="logo-part">
                			<img alt="" className="logo-Img-style" src={this.props.logo}/>
            			</div>
            			<div className="technology">
							{this.props.ProductTech.map((message) => <Technology message={message} />)} 
            			</div>
        			</div>
        
        			<div className="product-image">
            			<img alt="" className="product-image-style" src={this.props.ProductImg}/>
        			</div>
    			</div>


    			<div className="product-content">
        			<div>
                		<p className="client-location"><span className="font-weight-600">Client : </span>{this.props.ProductName}</p>
                		<p className="client-location"><span className="font-weight-600">Location : </span>{this.props.ProductLocation}</p>
                		<p className="client-about">
                        	{this.props.ProductAbout}
                		</p>
            		</div>
        		</div>

    		</div>

			<div className="container-fluid">
				<Bars />

				<Footer />
			</div>

		</div>
		);
	}
}




export default ChildPage;

