import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import signature from '../images/Signature.svg'

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
	return (
		<div>
			<nav className="container-fluid">
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
						<NavLink style={{ "backgroundColor": "transparent" }} className="contrast" /*to="/projects"*/ disabled>Projects</NavLink>
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
		</div>
	);
}