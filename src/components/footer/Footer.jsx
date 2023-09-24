import React from "react";
import "./Footer.css";
import logo from "../../assets/gym.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<div className="footer_container">
				<div className="about">
					<img src={logo}  alt="logo"/>
					<p>A Fitness Studio Mern Stack Web Application for class registration with calendar schedule </p>

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

				<div className="quicklinks">
					<h2><b>Quick Links</b></h2>
					<ul>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">FAQ</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Help</a>
						</li>
						<li>
							<a href="#">Terms & Conditions</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div className="contact">
					<h2><b>Contact Us</b></h2>
					<ul className="info">
						<li>
							<span></span>
							<span>
								BMS Institute of Technology and Management
								<br />
								Avalahalli , Bengaluru Rural
								<br />
								Karnataka , India
							</span>
						</li>
						
						
					</ul>
				</div>
				<div className="map">
					<h1>Location</h1>
					<p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.459932041766!2d77.56480187507928!3d13.133362987197104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18a5c54ece35%3A0x49c4c47a68a60b9c!2sBMS%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1694949496261!5m2!1sen!2sin"
							width="300"
							height="150"
							// style="border:0;"
							allowFullScreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
						</p>
				</div>
			</div>
			<div style={{ textAlign: "center" }}>
				<p>Copyright ©️ BMSIT Quick-Learners. All Right Reserved @ 2023</p>
			</div>
		</footer>
	);
};

export default Footer;
