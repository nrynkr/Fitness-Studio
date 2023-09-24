import React, { useEffect, useState } from "react";
import yoga from "../../../assets/yoga.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import zumba from "../../../assets/zumba.jpg";
import Nutrition from "../../../assets/Nutrition.jpg";
import meditation from "../../../assets/meditation.jpg";
import gym from "../../../assets/pilates.jpg";
import "../home.css";
import { useNavigate } from "react-router-dom";

const SecondContainer = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [slidesToShow, setSlidesToShow] = useState(3); // Default value

	const handleScroll = () => {
		const secondContainer = document.getElementById("home_second_container");
		const rect = secondContainer.getBoundingClientRect();
		const isVisible = rect.top <= window.innerHeight - 100;

		setIsVisible(isVisible);
	};

	const handleResize = () => {
		if (window.innerWidth < 768) {
			setSlidesToShow(1);
		} else {
			setSlidesToShow(3);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		handleScroll();
		handleResize();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const carouselSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
	};

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/notfound");
	};

	return (
		<section
			id="home_second_container"
			className={isVisible ? "visible" : ""}
		>
			<h1 className="classses-offered">Classes offered</h1>
			<Slider {...carouselSettings}>
			<div className="carousel-card">
					<img src={yoga} alt="yoga-img" />
					<div className="hide">
 						<h3>Yoga</h3>
 						<p>
						 Yoga is a meditative process of self-discovery and liberation.
						</p>
						<button onClick={handleClick}>Join</button>
					</div>
				</div>
				<div className="carousel-card">
					<img src={gym} alt="pilate-img" />
					<div className="hide">
						<h3>Gym</h3>
						<p>
						A place or club where you can go to exercise using machines, weights, and other equipment.
						</p>
						<button onClick={handleClick}>Join</button>
					</div>
				</div>
				<div className="carousel-card">
					<img src={zumba} alt="zumba-img" />
					<div className="hide">
						<h3>Zumba</h3>
						<p>
						Zumba is a fun, high-energy workout experience that keeps you excited to exercise.
 						</p>
						 <button onClick={handleClick}>Join</button>
 					</div>
				</div>
				<div className="carousel-card">
					<img src={meditation} alt="meditation-img"/>
 					<div className="hide">
 						<h3>Meditation</h3>
						<p>
						Meditation is a practice that involves focusing or clearing your mind using a combination of mental and physical techniques. 
						</p>			
						<button onClick={handleClick}>Join</button>							
						</div>
			</div>
			
			</Slider>
		</section>
	);
};

export default SecondContainer;
