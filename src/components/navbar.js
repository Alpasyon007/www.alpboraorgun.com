import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import signature from '../images/Signature.svg'

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import '../css/navbar.css';

// Here, we display our Navbar
export default function Navbar() {
	const [showAside, setShowAside] = useState(false);

	const toggleAside = () => {
	  setShowAside(!showAside);
	};

	return (
		<div>
			<nav className="container-fluid navigation-menu">
				<ul>
					<li>
						<NavLink style={{ "backgroundColor": "transparent" }} to="/">
							<img style={{"filter": "invert(100%)"}} src={signature} width="200"></img>
						</NavLink>
					</li>
				</ul>
				<ul>
					<li>
						<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" to="/about-me">About Me</NavLink>
					</li>
					<li>
						<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" /*to="/cv"*/ disabled><i>Curriculum vitae</i></NavLink>
					</li>
					<li>
						<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" to="/projects">Projects</NavLink>
					</li>
					<li>
						<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" /*to="/contact"*/ disabled>Contact</NavLink>
					</li>
					<li>
						<a className="contrast" href="https://github.com/Alpasyon007" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
					</li>
					<li></li>
				</ul>
			</nav>
			<nav className="container hamburg">
				<ul>
					<li>
						<NavLink style={{ "backgroundColor": "transparent" }} to="/">
							<img style={{"filter": "invert(100%)"}} src={signature} width="200"></img>
						</NavLink>
					</li>
				</ul>
				<ul>
					<li>
						<a className="contrast hamburg-toggle" onClick={toggleAside}>{ showAside ? (<FontAwesomeIcon style={{fontSize:"56px"}} icon={faXmark}/>) : (<FontAwesomeIcon style={{fontSize:"48px"}} icon={faBars}/>)}</a>
					</li>
					<li>

					</li>
				</ul>
			</nav>
			{showAside && (
			<aside className={`hamburg ${showAside ? "hamburg-visible" : ""}`}>
				<nav className="container" style={{textAlign:"center"}}>
					<ul>
						<li>
							<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" to="/about-me">About Me</NavLink>
						</li>
						<li>
							<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" /*to="/cv"*/ disabled><i>Curriculum vitae</i></NavLink>
						</li>
						<li>
							<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" to="/projects">Projects</NavLink>
						</li>
						<li>
							<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" /*to="/contact"*/ disabled>Contact</NavLink>
						</li>
						<li>
							<a className="contrast" href="https://github.com/Alpasyon007" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
						</li>
					</ul>
				</nav>
			</aside>
			)}
		</div>
	);
}