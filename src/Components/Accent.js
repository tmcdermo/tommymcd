/** @format */

import React, { Component } from 'react';

export class Accent extends Component {
	corner = () => {
		var style;
		var border = '2px solid #a8dadc';

		switch (this.props.corner) {
			case 'topRight':
				style = {
					borderRight: border,
					borderTop: border,
					width: this.props.len,
					height: this.props.len,
					gridArea: 'topRight',
					justifySelf: 'end',
				};
				break;
			case 'topLeft':
				style = {
					borderLeft: border,
					borderTop: border,
					width: this.props.len,
					height: this.props.len,
					gridArea: 'topLeft',
				};
				break;
			case 'bottomLeft':
				style = {
					borderLeft: border,
					borderBottom: border,
					width: this.props.len,
					height: this.props.len,
					gridArea: 'botLeft',
					alignSelf: 'end',
				};
				break;
			case 'bottomRight':
				style = {
					borderRight: border,
					borderBottom: border,
					width: this.props.len,
					height: this.props.len,
					gridArea: 'botRight',
					alignSelf: 'end',
					justifySelf: 'end',
				};
				break;
			default:
				console.log('Uh oh. This is embarrassing.');
				break;
		}

		return style;
	};

	render() {
		return (
			<div style={{ ...this.corner(), ...{ margin: this.props.margin } }}></div>
		);
	}
}

export default Accent;
