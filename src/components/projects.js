import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Here, we display our Navbar
export default function Projects() {
	return (
		<div className="container">
			<div className="grid">
				<div>
					<article style={{ "padding": "0" }}>
						<img style={{"borderRadius": "0.25rem 0.25rem 0px 0px"}} src="https://i.imgur.com/reLQDJf.png"></img>
						<hgroup style={{ "padding": "20px 20px 0px 20px" }}>
							<b >Pandemonium Engine</b>
							<p ><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Alpasyon007/Pandemonium" target="_blank">Github</a></p>
						</hgroup>
						<p style={{ "padding": "0px 20px 20px 20px" }}>
							<small>Pandemonium Engine is a C++ Game Engine, It is currently under development and can render 2D Graphics using OpenGL.</small>
						</p>
					</article>
				</div>
				<div>
					<article style={{ "padding": "0" }}>
						<img style={{"borderRadius": "0.25rem 0.25rem 0px 0px"}} src="https://i.imgur.com/8SAZGDM.png"></img>
						<hgroup style={{ "padding": "20px 20px 0px 20px" }}>
							<b >Third Eye</b>
							<p ><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Alpasyon007/optical-recognition" target="_blank">Github</a></p>
						</hgroup>
						<p style={{ "padding": "0px 20px 20px 20px" }}>
							<small>A compact capture and measurement system that helps visually impaired individuals navigate and understand their environment through text and object recognition and distance measurement.</small>
						</p>
					</article>
				</div>
				<div><article>I'm a card!</article></div>
			</div>
			<div className="grid">
				<div>
					<article style={{ "padding": "0" }}>
						<img style={{"borderRadius": "0.25rem 0.25rem 0px 0px"}} src="https://i.imgur.com/reLQDJf.png"></img>
						<hgroup style={{ "padding": "20px 20px 0px 20px" }}>
							<b >Pandemonium Engine</b>
							<p ><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Alpasyon007/Pandemonium" target="_blank">Github</a></p>
						</hgroup>
						<p style={{ "padding": "0px 20px 20px 20px" }}>
							<small>Pandemonium Engine is a C++ Game Engine, It is currently under development and can render 2D Graphics using OpenGL.</small>
						</p>
					</article>
				</div>
				<div>
					<article style={{ "padding": "0" }}>
						<img style={{"borderRadius": "0.25rem 0.25rem 0px 0px"}} src="https://i.imgur.com/8SAZGDM.png"></img>
						<hgroup style={{ "padding": "20px 20px 0px 20px" }}>
							<b >Third Eye</b>
							<p ><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/Alpasyon007/optical-recognition" target="_blank">Github</a></p>
						</hgroup>
						<p style={{ "padding": "0px 20px 20px 20px" }}>
							<small>Pandemonium Engine is a C++ Game Engine, It is currently under development and can render 2D Graphics using OpenGL.</small>
						</p>
					</article>
				</div>
				<div><article>I'm a card!</article></div>
			</div>
		</div>
	);
}