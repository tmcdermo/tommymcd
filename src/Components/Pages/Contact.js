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

export class Contact extends Component {
	state = { name: '', email: '', phone: '', message: '' };

	changeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({ [name]: value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		alert('Message Sent!');
	};

	textBox = () => {
		return {
			backgroundColor: '#1D3557',
			color: '#F1FAEE',
			width: '90vw',
			height: '85vh',
			border: '5px solid #A8DADC',
			borderRadius: '2%',
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

	formStyle = () => {
		return {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			maxWidth: '500px',
		};
	};

	inputStyle = () => {
		return {
			height: '6vh',
			maxHeight: '50px',
			width: '100%',
			backgroundColor: '#1D3557',
			color: '#F1FAEE',
			border: '5px solid #F1FAEE',
			borderRadius: '2%',
		};
	};

	inputStyleLarge = () => {
		return {
			height: '6vh',
			maxHeight: '50px',
			width: '100%',
			backgroundColor: '#457B9D',
			color: '#F1FAEE',
			border: '5px solid #F1FAEE',
			borderRadius: '2%',
			textAlign: 'center',
		};
	};

	contactStyle = () => {
		return {
			gridArea: 'content',
			textAlign: 'start',
			fontSize: '1.2em',
			alignSelf: 'center',
			display: 'flex',
			flexDirection: 'column',
			placeItems: 'center',
			maxHeight: '65vh',
		};
	};
	contactStyleLarge = () => {
		return {
			textAlign: 'start',
			fontSize: '1.2em',
			display: 'flex',
			flexDirection: 'column',
			maxHeight: '60vh',
			width: '80%',
			justifyContent: 'center',
		};
	};
	contactContent = (
		<div style={this.contactStyle()}>
			<form
				style={this.formStyle()}
				method='POST'
				action='https://formspree.io/tommy@tommymcd.com'>
				<div style={{ display: 'none' }}>
					<label>
						<input name='_gotcha' />
					</label>
				</div>
				<div>
					<p>Name</p>
					<input
						type='text'
						name='name'
						style={this.inputStyle()}
						onChange={this.changeHandler}
					/>
				</div>
				<div style={{ marginTop: '1vh' }}>
					<p>Email</p>
					<input
						type='text'
						name='email'
						style={this.inputStyle()}
						onChange={this.changeHandler}
					/>
				</div>
				<div style={{ marginTop: '1vh' }}>
					<p>Phone</p>
					<input
						type='text'
						name='phone'
						style={this.inputStyle()}
						onChange={this.changeHandler}
					/>
				</div>
				<div style={{ marginTop: '1vh' }}>
					<p>Message</p>
					<textarea
						type='text'
						name='message'
						rows='5'
						style={{
							width: '100%',
							backgroundColor: '#1D3557',
							color: '#F1FAEE',
							border: '5px solid #F1FAEE',
							borderRadius: '2%',
							padding: '2vw',
						}}
						onChange={this.changeHandler}
					/>
				</div>

				<input
					type='submit'
					style={{
						height: '6vh',
						marginTop: '3vh',
						backgroundColor: '#F1FAEE',
						color: '#1D3557',
						fontSize: '1.0em',
					}}
					value='SEND MESSAGE'
				/>
				<p style={{ marginTop: '1vh' }}>OR EMAIL ME AT: </p>
				<a
					href='mailto:tommy@tommymcd.com'
					style={{
						textAlign: 'end',
						color: '#F1FAEE',
						fontStyle: 'italic',
					}}>
					TOMMY@TOMMYMCD.COM
				</a>
			</form>
		</div>
	);

	contactContentLarge = (
		<div style={this.contactStyleLarge()}>
			<form
				style={{ ...this.formStyle(), ...{ color: '#F1FAEE' } }}
				method='POST'
				action='https://formspree.io/tommy@tommymcd.com'>
				<div style={{ display: 'none' }}>
					<label>
						<input name='_gotcha' />
					</label>
				</div>
				<div>
					<h3>Name</h3>
					<input
						type='text'
						name='name'
						style={this.inputStyleLarge()}
						onChange={this.changeHandler}
					/>
				</div>
				<div style={{ marginTop: '1vh' }}>
					<h3>Email</h3>
					<input
						type='text'
						name='email'
						style={this.inputStyleLarge()}
						onChange={this.changeHandler}
					/>
				</div>
				<div style={{ marginTop: '1vh' }}>
					<h3>Phone</h3>
					<input
						type='text'
						name='phone'
						style={this.inputStyleLarge()}
						onChange={this.changeHandler}
					/>
				</div>
				<div style={{ marginTop: '1vh' }}>
					<h3>Message</h3>
					<textarea
						type='text'
						name='message'
						rows='5'
						style={{
							width: '100%',
							backgroundColor: '#457B9D',
							color: '#F1FAEE',
							border: '5px solid #F1FAEE',
							borderRadius: '2%',
							padding: '2vw',
						}}
						onChange={this.changeHandler}
					/>
				</div>

				<input
					type='submit'
					style={{
						height: '6vh',
						marginTop: '3vh',
						backgroundColor: '#F1FAEE',
						color: '#1D3557',
						fontSize: '1.0em',
					}}
					value='SEND MESSAGE'
				/>
				<h3 style={{ marginTop: '1vh' }}>OR EMAIL ME AT: </h3>
				<a
					href='mailto:tommy@tommymcd.com'
					style={{
						textAlign: 'end',
						color: '#F1FAEE',
						fontStyle: 'italic',
					}}>
					TOMMY@TOMMYMCD.COM
				</a>
			</form>
		</div>
	);

	headerStyle = () => {
		return {
			color: '#F1FAEE',
			gridArea: 'header',
			textAlign: 'end',
			marginRight: '3vw',
			marginTop: '1vw',
			fontStyle: 'italic',
		};
	};

	render() {
		return (
			<>
				<NotDesktop>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '85vh',
							placeItems: 'end',
							placeContent: 'center',
						}}>
						<h3 style={this.headerStyle()}>SEND ME A MESSAGE</h3>
						<Textbox
							id='contactBox'
							content={this.content(this.contactContent)}
							textbox={{
								...this.textBox(),
								...{
									gridTemplateAreas:
										"'topLeft . topRight' 'left content right' 'botLeft . botRight'",
								},
							}}
						/>
					</div>
				</NotDesktop>
				<AnyDesktop>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 5px 1fr',
							gridTemplateRows: '1fr',
							gap: '10vw',
							height: '85vh',
						}}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-around',
							}}>
							<div
								style={{
									fontSize: '5em',
									color: '#F1FAEE',
									textAlign: 'end',
									minWidth: '408px',
								}}>
								<p>SEND ME</p>
								<p>A MESSAGE</p>
							</div>
							<img
								style={{
									maxHeight: '30vh',
									alignSelf: 'end',
								}}
								src='./img/contact.svg'
								alt='contact'
							/>
						</div>
						<div
							style={{
								backgroundColor: '#F1FAEE',
								height: '100%',
							}}></div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignContent: 'start',
							}}>
							{this.contactContentLarge}
						</div>
					</div>
				</AnyDesktop>
			</>
		);
	}
}

export default Contact;
