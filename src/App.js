import React from "react";

import "@picocss/pico"

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about-me" element={<AboutMe />} />
				<Route exact path="/cv" element={<Home />} />
				<Route exact path="/projects" element={<Home />} />
				<Route exact path="/contact" element={<Home />} />

			</Routes>
		</div>
	);
};

export default App;