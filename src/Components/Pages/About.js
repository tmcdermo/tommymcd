/** @format */

import React, { Component } from 'react';
import Textbox from '../TextBox';
import Accent from '../Accent';
import {
	Desktop,
	Desktop1440,
	Tablet,
	Mobile,
	Default,
	AnyDesktop,
	NotDesktop,
} from '../Layout/Responsive';

export class About extends Component {
	textBox = () => {
		return {
			backgroundColor: '#1D3557',
			color: '#F1FAEE',
			width: '90vw',
			maxHeight: '80vh',
			border: '5px solid #A8DADC',
			borderRadius: '2%',
			gridRow: 'span 2 / -2',
			gridColumn: '1',
			zIndex: '1',
			display: 'grid',
			gridTemplateRows: '5vw 1fr 5vw',
			gridTemplateColumns: '5vw 1fr 5vw',
			gridTemplateAreas:
				"'topLeft content topRight' 'left content right' 'botLeft content botRight'",
		};
	};

	content = (c) => {
		return (
			<>
				<Accent corner='topLeft' len='5vw' margin='1vw' />
				<Accent corner='topRight' len='5vw' margin='1vw' />
				{c}
				<Accent corner='bottomLeft' len='5vw' margin='1vw' />
				<Accent corner='bottomRight' len='5vw' margin='1vw' />
			</>
		);
	};

	bltnContent = (
		<div
			style={{
				gridArea: 'content',
				textAlign: 'center',
				fontSize: '0.9em',
				alignSelf: 'center',
			}}>
			<AnyDesktop>
				<h3 style={{ marginBottom: '5vh' }}>Better Late than Never</h3>
			</AnyDesktop>
			<blockquote>
				I returned to school in my mid-30s to facilitate a career change into
				something I feel more passionate about. After earning a 2nd degree in
				Computer Science with a 4.0 GPA, I've spent the past few years honing my
				skills in web design and development.
			</blockquote>
			<AnyDesktop>
				<img
					style={{
						marginTop: '5vh',
					}}
					src='./img/designer.svg'
					alt='designer'
				/>
			</AnyDesktop>
		</div>
	);

	liStyle = () => {
		return {
			listStyleType: 'none',
			textAlign: 'center',
		};
	};

	knowContent = (
		<>
			<NotDesktop>
				<div
					style={{
						gridArea: 'content',
						display: 'grid',
						gridTemplateRows: '1fr',
						gridTemplateColumns: '1fr 1fr',
						gridTemplateAreas: '"list1 list2"',
						placeItems: 'center',
						fontSize: '0.9em',
						height: '100%',
					}}>
					<ul style={{ gridArea: 'list1' }}>
						<li style={this.liStyle()}>HTML</li>
						<li style={this.liStyle()}>CSS</li>
						<li style={this.liStyle()}>Javascript</li>
						<li style={this.liStyle()}>KnockoutJS</li>
						<li style={this.liStyle()}>ReactJS</li>
						<li style={this.liStyle()}>NodeJS</li>
					</ul>
					<ul style={{ gridArea: 'list2' }}>
						<li style={this.liStyle()}>jQuery</li>
						<li style={this.liStyle()}>C#</li>
						<li style={this.liStyle()}>.Net</li>
						<li style={this.liStyle()}>MSSQL</li>
						<li style={this.liStyle()}>mySQL</li>
						<li style={this.liStyle()}>Git</li>
					</ul>
				</div>
			</NotDesktop>
			<AnyDesktop>
				<div
					style={{
						gridArea: 'content',
						display: 'grid',
						gridTemplateRows: '6vh 1fr',
						gridTemplateColumns: '1fr 1fr',
						gridTemplateAreas: '"title title" "list1 list2"',
						justifyItems: 'center',
						alignSelf: 'center',
						fontSize: '0.9em',
						height: '75%',
					}}>
					<h3 style={{ gridArea: 'title' }}>Things I Know</h3>
					<ul style={{ gridArea: 'list1' }}>
						<li style={this.liStyle()}>HTML</li>
						<li style={this.liStyle()}>CSS</li>
						<li style={this.liStyle()}>Javascript</li>
						<li style={this.liStyle()}>KnockoutJS</li>
						<li style={this.liStyle()}>ReactJS</li>
						<li style={this.liStyle()}>NodeJS</li>
					</ul>
					<ul style={{ gridArea: 'list2' }}>
						<li style={this.liStyle()}>jQuery</li>
						<li style={this.liStyle()}>C#</li>
						<li style={this.liStyle()}>.Net</li>
						<li style={this.liStyle()}>MSSQL</li>
						<li style={this.liStyle()}>mySQL</li>
						<li style={this.liStyle()}>Git</li>
					</ul>
				</div>
			</AnyDesktop>
		</>
	);

	useContent = (
		<>
			<NotDesktop>
				<div
					style={{
						gridArea: 'content',
						display: 'grid',
						gridTemplateRows: '1fr',
						gridTemplateColumns: '1fr',
						justifyItems: 'center',
						alignSelf: 'center',
						fontSize: '0.9em',
					}}>
					<AnyDesktop>
						<h3>Things I Use</h3>
					</AnyDesktop>
					<ul>
						<li style={this.liStyle()}>Microsoft Visual Studio</li>
						<li style={this.liStyle()}>Visual Studio Code</li>
						<li style={this.liStyle()}>SQL Server Management Studio</li>
						<li style={this.liStyle()}>Figma / Adobe XD</li>
						<li style={this.liStyle()}>Adobe Photoshop</li>
					</ul>
				</div>
			</NotDesktop>
			<AnyDesktop>
				<div
					style={{
						gridArea: 'content',
						display: 'grid',
						gridTemplateRows: '8vh 1fr',
						gridTemplateColumns: '1fr',
						justifyItems: 'center',
						alignSelf: 'center',
						fontSize: '0.9em',
						height: '75%',
					}}>
					<AnyDesktop>
						<h3>Things I Use</h3>
					</AnyDesktop>
					<ul>
						<li style={this.liStyle()}>Microsoft Visual Studio</li>
						<li style={this.liStyle()}>Visual Studio Code</li>
						<li style={this.liStyle()}>SQL Server Management Studio</li>
						<li style={this.liStyle()}>Figma / Adobe XD</li>
						<li style={this.liStyle()}>Adobe Photoshop</li>
					</ul>
				</div>
			</AnyDesktop>
		</>
	);

	headerStyle = () => {
		return {
			color: '#F1FAEE',
			gridArea: 'header',
			textAlign: 'end',
			marginRight: '2vw',
			marginTop: '1vw',
			fontStyle: 'italic',
		};
	};

	tabletGrid = () => {
		return {
			display: 'grid',
			gridTemplateRows: '1fr 1fr',
			gridTemplateColumns: '1fr 1fr',
			gridTemplateAreas: "'bltn bltn' 'tik tiu'",
		};
	};

	desktopGrid = () => {
		return {
			height: '90vh',
			width: '90vw',
			display: 'grid',
			justifyItems: 'center',
			alignItems: 'center',
			gridTemplateRows: '85vh',
			gridTemplateColumns: '1fr 200px 200px 1fr',
			maxWidth: '90vw',
		};
	};

	render() {
		return (
			<>
				<Mobile>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '85vh',
						}}>
						<div>
							<h3
								style={{
									...this.headerStyle(),
									...{ marginTop: '0' },
								}}>
								Better Late than Never
							</h3>
							<Textbox
								id='bltnBox'
								content={this.content(this.bltnContent)}
								textbox={{
									...this.textBox(),
									...{
										gridTemplateAreas:
											"'topLeft . topRight' 'left content right' 'botLeft . botRight'",
									},
								}}
							/>
						</div>
						<div>
							<h3 style={this.headerStyle()}>Things I Know</h3>
							<Textbox
								id='tikBox'
								content={this.content(this.knowContent)}
								textbox={{
									...this.textBox(),
									...{
										gridTemplateAreas:
											"'topLeft . topRight' 'left content right' 'botLeft . botRight'",
									},
								}}
							/>
						</div>
						<div>
							<h3 style={this.headerStyle()}>Things I Use</h3>
							<Textbox
								id='tiuBox'
								content={this.content(this.useContent)}
								textbox={{
									...this.textBox(),
									...{
										gridTemplateAreas:
											"'topLeft . topRight' 'left content right' 'botLeft . botRight'",
									},
								}}
							/>
						</div>
					</div>
				</Mobile>
				<Tablet>
					<div style={this.tabletGrid()}>
						<div style={{ gridArea: 'bltn' }}>
							<h3
								style={{
									...this.headerStyle(),
									...{ marginTop: '0' },
								}}>
								Better Late than Never
							</h3>
							<Textbox
								id='bltnBox'
								content={this.content(this.bltnContent)}
								textbox={{
									...this.textBox(),
									...{
										height: '400px',
										maxHeight: '400px',
										fontSize: '1.5em',
									},
								}}
							/>
						</div>
						<div style={{ gridArea: 'tik' }}>
							<h3
								style={{
									...this.headerStyle(),
									...{ textAlign: 'start', marginLeft: '2vw' },
								}}>
								Things I Know
							</h3>
							<Textbox
								id='tikBox'
								content={this.content(this.knowContent)}
								textbox={{
									...this.textBox(),
									...{
										width: '44vw',
										height: '400px',
										maxHeight: '400px',
										fontSize: '1.5em',
										gridTemplateAreas:
											"'topLeft . topRight' 'left content right' 'botLeft . botRight'",
									},
								}}
							/>
						</div>
						<div style={{ gridArea: 'tiu' }}>
							<h3 style={this.headerStyle()}>Things I Use</h3>
							<Textbox
								id='tiuBox'
								content={this.content(this.useContent)}
								textbox={{
									...this.textBox(),
									...{
										marginLeft: '1vw',
										width: '44vw',
										height: '400px',
										maxHeight: '400px',
										fontSize: '1.5em',
										gridTemplateAreas:
											"'topLeft . topRight' 'left content right' 'botLeft . botRight'",
									},
								}}
							/>
						</div>
					</div>
				</Tablet>
				<Desktop>
					<div style={this.desktopGrid()}>
						<div style={{ gridColumn: '2 / 4' }}>
							<Textbox
								id='bltnBox'
								content={this.content(this.bltnContent)}
								textbox={{
									...this.textBox(),
									...{
										height: '900px',
										fontSize: '1.5em',
										width: '40vw',
										maxWidth: '500px',
									},
								}}
							/>
						</div>
						<div style={{ gridColumn: '1', gridRow: '1' }}>
							<Textbox
								id='tikBox'
								content={this.content(this.knowContent)}
								textbox={{
									...this.textBox(),
									...{
										width: '30vw',
										height: '400px',
										maxHeight: '400px',
										fontSize: '1.5em',
									},
								}}
							/>
						</div>
						<div style={{ gridColumn: '4', gridRow: '1' }}>
							<Textbox
								id='tiuBox'
								content={this.content(this.useContent)}
								textbox={{
									...this.textBox(),
									...{
										width: '30vw',
										height: '400px',
										maxHeight: '400px',
										fontSize: '1.5em',
									},
								}}
							/>
						</div>
					</div>
				</Desktop>
				<Desktop1440>
					<div style={this.desktopGrid()}>
						<div style={{ gridColumn: '2 / 4' }}>
							<Textbox
								id='bltnBox'
								content={this.content(this.bltnContent)}
								textbox={{
									...this.textBox(),
									...{
										height: '900px',
										fontSize: '1.5em',
										width: '500px',
									},
								}}
							/>
						</div>
						<div style={{ gridColumn: '1', gridRow: '1' }}>
							<Textbox
								id='tikBox'
								content={this.content(this.knowContent)}
								textbox={{
									...this.textBox(),
									...{
										width: '30vw',
										height: '400px',
										maxHeight: '400px',
										fontSize: '1.5em',
									},
								}}
							/>
						</div>
						<div style={{ gridColumn: '4', gridRow: '1' }}>
							<Textbox
								id='tiuBox'
								content={this.content(this.useContent)}
								textbox={{
									...this.textBox(),
									...{
										width: '30vw',
										height: '400px',
										maxHeight: '400px',
										fontSize: '1.5em',
									},
								}}
							/>
						</div>
					</div>
				</Desktop1440>
			</>
		);
	}
}

export default About;
