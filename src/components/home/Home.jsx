import React from "react";
import "./home.css";
import FirstContainer from "./containers/FirstContainer";
import SecondContainer from "./containers/SecondContainer";

import FifthContainer from "./containers/FifthContainer";

const Home = () => {
	return (
		<div className="home-container">
			<FirstContainer />
			<SecondContainer />

			<FifthContainer />
		</div>
	);
};

export default Home;
