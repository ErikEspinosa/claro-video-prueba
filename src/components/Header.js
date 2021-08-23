import React, { Component } from "react";
import "./Header.sass";
import logo from "../assets/logo.svg";

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="logo">
					<a href="/" title="Claro Video">
						<img src={logo} alt="Claro Video" />
					</a>
				</div>
			</div>
		);
	}
}
