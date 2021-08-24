import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TitleItem.sass";

export default class TitleItem extends Component {
	render() {
		const poster = {
			backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.props.item.backdrop_path})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		};
		return (
			<Link to={`/title/${this.props.item.id}`}>
				<li key={this.props.id} className="title-item" style={poster}>
					<span className="title">{this.props.item.title}</span>
				</li>
			</Link>
		);
	}
}
