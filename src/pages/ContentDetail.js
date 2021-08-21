import React, { Component } from "react";
import "../styles/Components.sass";
import Return from "../components/Return";
import poster from "../assets/poster.jpeg";
import ShareButtons from "../components/ShareButtons";

export default class ContentDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: [],
		};
	}

	componentDidMount() {
		const id = Object.values(this.props.match.params);
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=756e1622851086c3d011b8461693b962&language=es-ES`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => this.setState({ detail: data }));
	}

	render() {
		return (
			<div className="container">
				<Return />
				<div
					className="content-detail"
					style={{
						background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/w500${this.state.detail.poster_path})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<h1>{this.state.detail.title}</h1>
					<div className="content">
						<div
							className="poster"
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.state.detail.poster_path})`,
								backgroundSize: "cover",
								backgroundPosition: "top center",
							}}
						></div>
						<div className="info">
							<p>{this.state.detail.overview}</p>
							<div className="details">
								<p>2009 01h 55min 20s</p>
								<span className="hightlight-white">Subtitulada</span>
								<span className="hightlight-white">Doblada</span>
								<span className="hightlight-black">PG-11</span>
							</div>
							<p>
								<strong>Actor</strong> Erik Espinosa <br />
								<strong>Escritor</strong> Erik Espinosa <br />
								<strong>Productor</strong> Erik Espinosa <br />
								<strong>Género</strong> Erik Espinosa <br />
								<strong>Título original</strong>{" "}
								{this.state.detail.original_title} <br />
							</p>
							<ShareButtons />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
