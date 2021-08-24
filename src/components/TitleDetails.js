import React, { Component } from "react";
import "./TitleDetails.sass";
import Return from "./Return";
import ShareButtons from "./ShareButtons";

export default class TitleDetails extends Component {
	render() {
		const { detail } = this.props;

		const backgroundPoster = {
			backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/w500${detail.backdrop_path})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		};
		const poster = {
			backgroundImage: `url(https://image.tmdb.org/t/p/w500${detail.backdrop_path})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		};
		return (
			<div>
				<Return />
				<div className="content-detail" style={backgroundPoster}>
					<h1>{detail.title}</h1>
					<div className="content">
						<div className="poster" style={poster}></div>
						<div className="info">
							<p>{detail.overview}</p>
							<div className="details">
								<p>{detail.release_date}</p>
								<span className="hightlight-white">Subtitulada</span>
								<span className="hightlight-white">Doblada</span>
								<span className="hightlight-black">PG-11</span>
							</div>
							<p>
								<strong>Actor: </strong> {detail.original_title} <br />
								<strong>Escritor: </strong> {detail.original_title} <br />
								<strong>Productor: </strong> {detail.original_title} <br />
								<strong>Género: </strong> {detail.original_title} <br />
								<strong>Título original: </strong>
								{detail.original_title}
							</p>
							<ShareButtons />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
