import React from 'react';
import Nav from '../components/Nav';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEnvelope, faMobileScreenButton, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
	<div>
		<Nav />
		<main className="index-main">
			<section className="help-1">
				<h3 className="help-h3">Contact</h3>
				<div className="contact-grid">
					<div className="contact-card">
						<FontAwesomeIcon icon={faMobileScreenButton} className="card-icon" />
						<h4 className="card-h4">Products & Orders</h4>
						<p className="card-p">1-800-555-5555</p>
						<p className="card-p">9 am - 9pm ET</p>
						<p className="card-p">Mon - Fri</p>
					</div>
					<div className="contact-card">
						<FontAwesomeIcon icon={faEnvelope} className="card-icon" />
						<h4 className="card-h4">Company Info & Inquiries</h4>
						<p className="card-p">EMAIL US</p>
						<p className="card-p">support@homexgrown.com</p>
						<p className="card-p">Mon - Fri</p>
					</div>
					<div className="contact-card">
						<FontAwesomeIcon icon={faLocationDot} className="card-icon" />
						<h4 className="card-h4">Location</h4>
						<p className="card-p">CHARLOTTE, N.C.</p>
					</div>
				</div>
			</section>

			<section className="help-2">
				<h2 className="help-h2">Get Help</h2>
				<form className="searchbar">
					<input className="search" type="search" placeholder="Search.."/>
					<button className="search-icon" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
				</form>
			</section>

			<section className="help-3">
				<h3 className="help-h3">FAQ</h3>
				<div className="faq-grid">
					<div className="faq-card">
						<h4 className="faq-h4">Shipping & Delivery</h4>
						<p className="card-p">What are HG's shipping options?</p>
						<p className="card-p">How long do orders take to ship out?</p>
					</div>
					<div className="faq-card">
						<h4 className="faq-h4">Orders</h4>
						<p className="card-p">Where is my order?</p>
						<p className="card-p">Can I cancel my order?</p>
						<p className="card-p">How do I find the right size and fit?</p>
					</div>
					<div className="faq-card">
						<h4 className="faq-h4">Returns</h4>
						<p className="card-p">What is HG's return?</p>
						<p className="card-p">How do I return my HG order?</p>
						<p className="card-p">Where is my refund?</p>
					</div>
				</div>
			</section>

			<section className="contact-section">
				<div className="contact-two">
					<div className="contact-left">
						<h3 className="contact-h3-left">Contact Us</h3> 
					</div>
					<div className="contact-right">
						<form className="contact-form" action="submit">
							<div className="form-input-field">   
								<label for="fname">First Name:</label>
								<input type="text" name="fname" id="fname" placeholder="Your first name..." required/>
							</div>
		
							<div className="form-input-field">
								<label for="lname">Last Name:</label>
								<input type="text" name="lname" id="lname" placeholder="Your last name..." required/>
							</div>
		
							<div className="form-input-field">
								<label for="email">Email Address:</label>
								<input type="email" name="email" id="email" placeholder="Email address..." required/>
							</div>
		
							<div className="form-input-field">
								<label for="phone">Phone Number:</label>
								<input type="text" name="phone" id="phone" placeholder="(optional) phone number here..."/>
							</div>
							
							<div className="form-input-field">
								<label for="message">Message</label>
								<textarea id="message" name="message" rows="5" cols="33" placeholder="Enter your message here..." required></textarea>
							</div>
		
							<button className="form-button" type="submit">Submit</button>
						</form>
					</div>
				</div>
			</section>

		</main>
	</div>
  )
}

export default Contact
