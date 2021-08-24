import React, { Component } from "react";
import Return from "../components/Return";

export default class NotFound extends Component {
	render() {
		return (
			<div className="container">
				<Return />
				<h1>No se encontró esta página</h1>
			</div>
		);
	}
}
