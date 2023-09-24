import React from "react";
import "./Contact.css";
import contact from "../../assets/contact-us-banner.jpeg";
import mail from "../../assets/emailicon.png";
import call from "../../assets/white_phone_icon2.png";
import location from "../../assets/location-image.jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
	return (
		<div className="contact-container">
			<img src={contact} alt="contact"/>
			<div className="contact-content">
				<div className="contact-item">
				<div className="email-top-block"></div>
					<div className="z-index-top"><img src={mail} alt="mail"/>
					<p className="profile-name">Karthik Prabhu</p>
					<p>karthikprabhu2541@gmail.com</p>
					</div>
				</div>
				<div className="contact-item">
				<div className="email-top-block"></div>
					<div className="z-index-top"><img src={mail} alt="mail"/>
					<p  className="profile-name">Lakshmi Narayana K R</p>
					<p>lakshminarayan4907@gmail.com</p>
					</div>
				</div>
				<div className="contact-item">
					<div className="email-top-block"></div>
					<div className="z-index-top">
					<img src={mail} alt="mail"/>
					<p  className="profile-name">Prajwal Naveen</p>
					<p>prajwalnaveen19@gmail.com</p>
					</div>
				</div>
			</div>
			
			<div className="contactUs">
				<div className="contact-via-social">
					<h1>Our Contact</h1>
					<h2>
						<span> Get in touch with us</span><br/>
						<span>Let us know about any queries </span><br/>
						<span>you might have for us about the studio</span>
					</h2>
	
					<div className="social">
						<a href="https://ww.facebook.com">
							<FaFacebook />
						</a>
						<a href="https://www.twitter.com">
							<FaTwitter />
						</a>
						<a href="https://www.youtube.com">
							<FaYoutube />
						</a>
					</div>
				</div>

				<div className="contact-via-form">
					<form
						action="https://getform.io/f/198fcf81-6593-4bce-a4ef-c202a68a5449"
						method="POST"
					>
						<input
							placeholder="First Name"
							type="text"
							name="First-name"
						/>
						<input
							placeholder="Last Name"
							type="text"
							name="Last-name"
						/>
						<input
							placeholder="Email"
							type="email"
							name="Email"
						/>
						<textarea
							placeholder="Message"
							type="text"
							name="Message"
						/>
						<button>Send Message</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
