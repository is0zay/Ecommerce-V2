import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
	return ( 
		<footer class="main-footer">
			<div class="footer-top">
				<ul class="foot-list-vert">
					<li><a href="#" class="footer-link1">Gift Cards</a></li>
					<li><a href="#" class="footer-link1">Promotions</a></li>
					<li><a href="#" class="footer-link1">Find a store</a></li>
					<li><a href="#" class="footer-link1">sign up for email</a></li>
					<li><a href="#" class="footer-link1">become a member</a></li>
					<li><a href="#" class="footer-link1">homexgrown book</a></li>
					<li><a href="#" class="footer-link1">send us feedback</a></li>
				</ul>

				<ul class="foot-list-vert">
					<li><a href="/contact" class="footer-link1 test-footer">GET HELP</a></li>
					<li><a href="#" class="footer-link2">Order Status</a></li>
					<li><a href="#" class="footer-link2">Shipping and Delivery</a></li>
					<li><a href="#" class="footer-link2">Returns</a></li>
					<li><a href="#" class="footer-link2">Order Cancellation</a></li>
					<li><a href="#" class="footer-link2">Payment Options</a></li>
					<li><a href="#" class="footer-link2">Contact Us</a></li>
				</ul>

				<ul class="foot-list-vert">
					<li><a href="#" class="footer-link1">About HomeGrown</a></li>
					<li><a href="#" class="footer-link2">News</a></li>
					<li><a href="#" class="footer-link2">Careers</a></li>
					<li><a href="#" class="footer-link2">Investors</a></li>
					<li><a href="#" class="footer-link2">Purpose</a></li>
					<li><a href="#" class="footer-link2">Sustainability</a></li>

				</ul>

				<ul class="footer-list-social">
					<li class="footer-item"><a href="https://www.facebook.com/" target="_blank" aria-label="facebook link" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a></li>
					<li class="footer-item"><a href="https://twitter.com/" target="_blank" aria-label="twitter link" class="social-icon"><i class="fa-brands fa-twitter"></i></a></li>
					<li class="footer-item"><a href="https://www.instagram.com/thehomexgrown/" target="_blank" aria-label="instagram link" class="social-icon"><i class="fa-brands fa-instagram"></i></a></li>
				</ul>
			</div>
			<div class="footer-bottom">
				<div class="footer-bottom-left">
					<div class="fbl-left1">
						<i class="fa-solid fa-location-dot"></i>
						<p class="fblp">United States</p>
					</div>
					<div class="fbl-left2">
						<p class="copyright">&copy; 2023 HomexGrown All Rights Reserved</p>
					</div>
				</div>
				<div class="footer-bottom-right">
					<div class="fbr-top">
						<ul class="fbr-list">
							<li><p>Terms of Sale</p></li>
							<li><p>Terms of Use</p></li>
							<li><p>HxG Privacy Policy</p></li>
							<li><p>Your Privacy Choices</p></li>
						</ul>
					</div>
					<div class="fbr-bottom">
						<p>CA Supply Chains Act</p>
					</div>

				</div>
			</div>
   		</footer>
	 );
}

export default Footer;