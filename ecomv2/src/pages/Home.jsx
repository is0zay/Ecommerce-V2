import React from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import './Home.css';
import Slideshow from '../components/Slideshow';

const Home = () => {
  return (
	<div>
		<Nav />
		<div className="index-main">
			
			<section className="hero1">
				<h2 className="hero1-h2">HomeXGrown</h2>
				<p className="hero1-p1">"Rooted in faith, true to who we are"</p>
				<Link to="/shop" className="shop-btn1">Shop</Link>  
			</section>
			
			<section className="home-section2">
				<h2 className="section2-h2">Season Looks</h2>
				<div className="twosection2">
					<div className="section2-left">
						<h3 className="s2-h3-left">Get Cozy for<br/> the Cold</h3>
						<Link to="/shop" className="shop-btn1 s2-leftbtn">Shop</Link> 

					</div>
					<div className="section2-right">
						<h3 className="s2-h3-right">Hot Arrivals for<br/> the Heat</h3>
						<Link to="/shop" className="shop-btn1 s2-rightbtn">Shop</Link> 
						
					</div>
				</div>
			</section>

			<section className="home-section3">
				<h2 className="section2-h3">Recent Drops</h2>
				<Slideshow />
				
			</section>

			<section className="home-section4">
				<div className="hgbanner"></div>
			</section>

		</div>
	</div>
  )
}

export default Home
