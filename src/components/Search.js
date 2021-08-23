import React, { Component } from "react";
import "./Search.sass";

export default class Search extends Component {
	render() {
		return (
			<div className="search">
				<form>
					<label htmlFor="search">Buscar:</label>
					<input type="text" name="search" autoComplete="off"></input>
				</form>
			</div>
		);
	}
}
