import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gallery } from "../ClientGallery";
import "../home.css";
const mylist = ['Ayushi Tandon','Aaron A','Shweta Kakkad','Sasha H'];
const ages = ['28','36','31','35']
const classes = ['Yoga','Gym','Zumba','Meditation']

const FifthContainer = () => {
	return (
		<section id="home_fifth_container">
			<div className="trainers-info-heading">Trainers Info</div>
			
			<div className="gallery">
				{gallery.map((image,index) => (
					<div className="image-text-div"><img
						src={image.image}
						alt="gallery"
						className="image-trainers"
					/>
					<div className="text-overlay">
						<div className="image-title">
						{mylist[index]}
							<p>{ages[index]}</p>
						</div>
						
						<div id="image-desc">{classes[index]}</div>
					</div>
					</div>
					
				))}
				
			</div>
		</section>
	);
};

export default FifthContainer;