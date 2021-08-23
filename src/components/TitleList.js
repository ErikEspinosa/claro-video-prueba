import React, { Component } from "react";
import "./TitleList.sass";
import Search from "../components/Search";
import TitleItem from "./TitleItem";

export default class TitleList extends Component {
	render() {
		return (
			<div>
				<Search />
				<ul className="title-list">
					{this.props.titles.map((item) => (
						<TitleItem key={item.id} item={item} />
					))}
				</ul>
			</div>
		);
	}
}
