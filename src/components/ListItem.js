import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ListItem extends Component {
	render() {
		return (
			<Link to={`/details/${this.props.item.id}`}>
				<div
					key={this.props.item.id}
					className="list-item"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.props.item.poster_path})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
			</Link>
		);
	}
}
