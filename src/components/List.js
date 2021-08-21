import React, { Component } from "react";
import ListItem from "../components/ListItem";

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
		};
	}

	getList() {
		fetch(
			"https://api.themoviedb.org/3/discover/movie?api_key=756e1622851086c3d011b8461693b962&language=es-ES&sort_by=popularity.desc"
		)
			.then((response) => response.json())
			.then((data) => this.setState({ list: data.results }));
	}

	componentDidMount() {
		this.getList();
	}

	render() {
		return (
			<div className="content-list">
				{this.state.list.map((item) => (
					<ListItem item={item} />
				))}
			</div>
		);
	}
}
