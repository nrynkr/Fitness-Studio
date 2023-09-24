import React, { useState, useEffect } from "react";
import { ReactComponent as ScrollIcon } from "../../assets/scroll.svg";
import "./Scroll.css";

const Scroll = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 200) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="scroll-to-top">
			{isVisible && (
				<div
					className="scroll_icon"
					onClick={scrollToTop}
				>
					<ScrollIcon className="arrow" />
				</div>
			)}
		</div>
	);
};

export default Scroll;
