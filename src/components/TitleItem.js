import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TitleItem.sass";

export default class TitleItem extends Component {
	render() {
		return (
			<Link to={`/title/${this.props.item.id}`}>
				<img
					key={this.props.id}
					src={this.props.item.image_small}
					alt={this.props.item.title}
				/>
			</Link>
		);
	}
}
