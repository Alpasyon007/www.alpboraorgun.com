import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-awesome-reveal";

import helloThere from '../images/hello_there.gif';
import earsLogo from '../images/ears_logo.jfif';
import surreyLogo from '../images/uni_of_surrey_logo.jfif';
import feralLogo from '../images/feral_logo.jpg';
import alienLogo from "../images/alien_isolation.jfif";
import warhammerLogo from "../images/warhammer3.jfif";
import questionMark from "../images/question.webp";
import surreyUnion from "../images/surrey_union.jfif";
import gameDevSoc from "../images/game_dev_soc.jfif";
import stageCrew from "../images/stage_crew.jfif";
import businessSoc from "../images/business_soc.jfif";

import midtermReport from "../pdfs/midterm_report.pdf";

import '../css/timeline.css';

const fadeDelay = 1e2;

export default function AboutMe() {
	return (
		<div className="container">
			<img style={{"object-fit": "cover", "width": "150px", "height": "150px", "display":"inline", "borderRadius": "5px", "marginRight": "15px"}} src={helloThere}/>
			<h1 style={{"display":"inline", "verticalAlign":"middle"}}>Hello There! A little bit about me...</h1>
			<article>
				<blockquote style={{"marginTop": "0px"}}>
					"By the gods, what have I become?"
				<footer>
					<cite>- Kratos, God of War</cite>
				</footer>
				</blockquote>
				<hgroup style={{"margin": "0"}}>
					<h6>
						An Electronics Engineer, Programmer, Game Developer and a lot more...
					</h6>
					<h6>
						Currently located in Guildford, England, United Kingdom
					</h6>
				</hgroup>
			</article>
			<div class="main">
				<div class="timeline-container">
					<ul>
						<li>
						<Fade delay={fadeDelay} cascade damping={1e-1}>
							<article>
								<img src={feralLogo}></img>
								<hgroup style={{"display":"inline-block"}}>
									<h3>Feral Interactive</h3>
									<h4>C/C++ Game Programmer</h4>
								</hgroup>
								<p>•	Work with many programming languages such as C, Objective-C, C++, Java, Lua, JavaScript, Python and Perl with the main one being C++.</p>
								<p>•	Worked together with multiple teams including Design Teams and Quality Control teams to implement new features and fix existing bugs.</p>
								<p>•	Worked on many platforms including Windows, Linux, MacOS, iOS, Android, and Nintendo Switch.</p>
								<details>
									<summary>What I worked on</summary>
									<article style={{"padding": "0"}}>
										<header style={{"margin": "0"}}>
											<img style={{"marginBottom": "0"}} src={questionMark}></img>
											<hgroup style={{"display":"inline-block", "margin": "0"}}>
												<h5>Unannounced project</h5>
												<small>For Nintendo Switch</small>
											</hgroup>
										</header>
									</article>
									<article style={{"padding": "0"}}>
										<header style={{"margin": "0"}}>
											<img style={{"marginBottom": "0"}} src={alienLogo}></img>
											<hgroup style={{"display":"inline-block", "margin": "0"}}>
												<h5>Alien: Isolation</h5>
												<small>For iOS and Android</small>
											</hgroup>
										</header>
									</article>
									<article style={{"padding": "0"}}>
										<header style={{"margin": "0"}}>
											<img style={{"marginBottom": "0"}} src={warhammerLogo}></img>
											<hgroup style={{"display":"inline-block", "margin": "0"}}>
												<h6>Total War: Warhammer III</h6>
												<small>For MacOS and Linux</small>
											</hgroup>
										</header>
									</article>
								</details>
								<span class="circle"></span>
							</article>
						</Fade>
						</li>
						<li>
						<Fade delay={fadeDelay} cascade damping={1e-1}>
							<article>
								<img src={surreyLogo}></img>
								<hgroup style={{"display":"inline-block"}}>
									<h3>University of Surrey</h3>
									<h4>Electronic Engineering BEng</h4>
								</hgroup>
								<details>
									<summary>My studies</summary>
									<a href={midtermReport} target="_blank">
										<article style={{"padding": "0"}}>
											<header style={{"margin": "0"}}>
												<img style={{"marginBottom": "0"}} src={questionMark}></img>
												<hgroup style={{"display":"inline-block", "margin": "0"}}>
													<h5>Dissertation Project</h5>
													<a>Read more...</a>
												</hgroup>
											</header>
										</article>
									</a>
									<article style={{"padding": "0"}}>
										<header style={{"margin": "0"}}>
											<img style={{"marginBottom": "0"}} src={questionMark}></img>
											<hgroup style={{"display":"inline-block", "margin": "0"}}>
												<h5>Second Year</h5>
												<small>80% Overall Aveage Mark</small>
											</hgroup>
										</header>
									</article>
									<article style={{"padding": "0"}}>
										<header style={{"margin": "0"}}>
											<img style={{"marginBottom": "0"}} src={questionMark}></img>
											<hgroup style={{"display":"inline-block", "margin": "0"}}>
												<h6>First Year</h6>
												<small>79% Overall Aveage Mark</small>
											</hgroup>
										</header>
									</article>
								</details>
								<span class="circle"></span>
							</article>
						</Fade>
						</li>
						<li>
						<Fade delay={fadeDelay} cascade damping={1e-1}>
							<article>
								<img src={earsLogo}></img>
								<hgroup style={{"display":"inline-block"}}>
									<h3>Surrey EARS</h3>
									<h4>President</h4>
								</hgroup>
								<p>•	Organise and run the Makerspace, a small electronics lab for students.</p>
								<p>•	Organise events and courses for the members.</p>
								<p>•	Teach a 4-week beginner python course.</p>
								<p>•	Teach a 4-week Arduino course.</p>
								<p>•	Run a 3D Printing workshop.</p>
								<p>•	Invigilate an Amateur Radio Examination.</p>
								<span class="circle"></span>
							</article>
						</Fade>
						</li>
						<li>
						<Fade delay={fadeDelay} cascade damping={1e-1}>
							<article>
								<img src={gameDevSoc}></img>
								<hgroup style={{"display":"inline-block"}}>
									<h3>Game Dev Society</h3>
									<h4>Founder & President</h4>
								</hgroup>
								<p>•	Organise an introduction and further training sessions for game development.</p>
								<p>•	Organise a Surrey Gam Jam 2020</p>
								<span class="circle"></span>
							</article>
						</Fade>
						</li>
						<li>
						<Fade delay={fadeDelay} cascade damping={1e-1}>
							<article>
								<img src={stageCrew}></img>
								<hgroup style={{"display":"inline-block"}}>
									<h3>Surrey Stage Crew</h3>
									<h4>Wellbeing Champion</h4>
								</hgroup>
								<p>•	Went under training to be able to cope with wellbeing situations.</p>
								<p>•	Responsible for members wellbeing both mentally and physically.</p>
								<span class="circle"></span>
							</article>
						</Fade>
						</li>
						<li>
						<Fade delay={fadeDelay} cascade damping={1e-1}>
							<article>
								<img src={businessSoc}></img>
								<hgroup style={{"display":"inline-block"}}>
									<h3>Surrey Business Society</h3>
									<h4>Technical Manager</h4>
								</hgroup>
								<p>•	Setup, develop and maintain the society website</p>
								<p>•	Manage Society Event’s <a href="https://www.youtube.com/@surreybusinesssociety3837/streams" target="_blank">YouTube Live Broadcasts</a></p>
								<p>•	Help with any technical requirements of society events.</p>
								<span class="circle"></span>
							</article>
						</Fade>
						</li>
						<li>
						<Fade delay={fadeDelay} cascade damping={1e-1}>
							<article>
								<img src={surreyUnion}></img>
								<hgroup style={{"display":"inline-block"}}>
									<h3>UoS Students' Union</h3>
									<h4>Course Representative</h4>
								</hgroup>
								<p>•	Collected valuable feedback from the cohort for the department.</p>
								<p>•	Attended multiple meetings both with the department and the university to give feedback and discuss possible solutions to any issues risen by the cohort.</p>
								<span class="circle"></span>
							</article>
						</Fade>
						</li>
						<li>
						<Fade delay={fadeDelay} cascade damping={1e-1}>
							<article>
								<img src={stageCrew}></img>
								<hgroup style={{"display":"inline-block"}}>
									<h3>Surrey Stage Crew</h3>
									<h4>Crew Member</h4>
								</hgroup>
								<p>•	Setup Lighting and Sound for universities own nightclub Rubix.</p>
								<p>•	Helped with university events stage rigs such as Live from Studio X</p>
								<span class="circle"></span>
							</article>
						</Fade>
						</li>
					</ul>
				</div>
				<Fade delay={fadeDelay} cascade damping={1e-1}>
					<h1>Where it all begins!</h1>
				</Fade>
			</div>
		</div>
	);
}