import React, { Component } from "react";
import List from "../components/List";
import Search from "../components/Search";
import "../styles/Components.sass";

export default class ContentList extends Component {
	render() {
		return (
			<div className="container">
				<Search />
				<List />
			</div>
		);
	}
}
