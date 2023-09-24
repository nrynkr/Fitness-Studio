import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Scroll from "./components/scroll/Scroll";
import Home from "./components/home/Home";
import Classes from "./components/classes/classes";

import About from "./components/About us/About";
import Contact from "./components/contact us/Contact";
import Footer from "./components/footer/Footer";
import EnrollNow from "./components/Enroll Now/EnrollNow";
import Register from "./components/Enroll Now/pages/Register";
import Login from "./components/Enroll Now/pages/Login";
import Discount from "./components/Enroll Now/pages/Discount";
import UserDetails from "./components/Enroll Now/pages/UserDetails";

import NoteFound from "./NoteFound";


const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Scroll />
			<Routes>
				<Route
					path="/" // i am change to "/home" to "/" because i want to show home page first @aknandan
					element={<Home />}
				/>

				
				<Route
					path="/classes"
					element={<Classes />}
				/>


				<Route
					path="/about"
					element={<About />}
				/>

				{'start of contact us path'} 
				<Route
					path="/contact"
					element={<Contact />}
				/>

				{'This is All indside Enroll Now path'}
				<Route
					path="/enroll"
					element={<EnrollNow />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/discount"
					element={<Discount />}
				/>
				<Route
					path="/userdetails"
					element={<UserDetails />}
				/>
				<Route
					path="/notfound"
					element={<NoteFound />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
