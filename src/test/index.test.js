import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../App";
import Return from "../components/Return";
import ShareButtons from "../components/ShareButtons";

it("Must renders App", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
});

it("Must render Header component", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Header />, div);
});

it("Must render Footer component", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Footer />, div);
});

it("Must render Return component", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Return />, div);
});

it("Must render ShareButtons component", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ShareButtons />, div);
});
