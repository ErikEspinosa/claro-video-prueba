import React, { Component } from "react";
import "./App.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

export default class App extends Component {
	render() {
		const store = generateStore();
		return (
			<Provider store={store}>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/title/:id" component={Single} />
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</Router>
				<Footer />
			</Provider>
		);
	}
}
