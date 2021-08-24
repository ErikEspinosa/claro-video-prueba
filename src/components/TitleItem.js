import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TitleItem.sass";

export default class TitleItem extends Component {
	render() {
		return (
			<Link to={`/title/${this.props.item.id}`}>
				<li
					key={this.props.id}
					className="title-item"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.props.item.poster_path})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<h2>{this.props.item.title}</h2>
				</li>
			</Link>
		);
	}
}
