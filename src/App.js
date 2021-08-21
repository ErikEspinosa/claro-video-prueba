import React, { Component } from "react";
import "./styles/App.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import ContentList from "./pages/ContentList";
import ContentDetail from "./pages/ContentDetail";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Router>
					<Switch>
						<Route exact path="/" component={ContentList} />
						<Route path="/details/:id" component={ContentDetail} />
					</Switch>
				</Router>
				<Footer />
			</div>
		);
	}
}
