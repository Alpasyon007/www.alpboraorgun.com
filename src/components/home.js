import React from "react";

// Here, we display our Navbar
export default function Home() {
	return (
		<div className="container">
			<h1>Welcome to my website!</h1>
			I'm Alp,
			<blockquote>
				"Just a simple droid here, m'am. Nothing to see. Move along"
				<footer>
					<cite>- HK-47, Knights of the Old Republic</cite>
				</footer>
			</blockquote>
			I try to document my academic, professional and hobby progression here as I strive to be above average. Nothing too interesting going on but you can check out what I have been upto. With that said I leave you with...
			<article>
				<blockquote>
					"I think that inside every adult is the heart of a child. We just gradually convince ourselves that we have to act more like adults."
					<footer>
						<cite>- Shigeru Miyamoto</cite>
					</footer>
				</blockquote>
			</article>
		</div>
	);
}