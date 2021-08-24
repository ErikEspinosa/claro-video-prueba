import React, { Component } from "react";
import "./TitleList.sass";
import TitleItem from "./TitleItem";

export default class TitleList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: "",
		};

		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(event) {
		this.setState({ filter: event.target.value });
		console.log(this.filter);
	}

	render() {
		return (
			<div>
				<div className="search">
					<form onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="search">Buscar:</label>
						<input
							type="text"
							value={this.state.filter}
							onChange={this.handleOnChange}
							name="search"
							autoComplete="off"
						></input>
					</form>
				</div>
				<ul className="title-list">
					{this.props.titles
						.filter(
							(item) =>
								item.title
									.toLowerCase()
									.indexOf(this.state.filter.toLowerCase()) > -1
						)
						.map((item) => (
							<TitleItem key={item.id} item={item} />
						))}
				</ul>
			</div>
		);
	}
}
