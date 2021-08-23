import React, { Component } from "react";
import "./TitleDetails.sass";
import Return from "./Return";
import ShareButtons from "./ShareButtons";

export default class TitleDetails extends Component {
	render() {
		return (
			<div>
				<Return />
				<div
					className="content-detail"
					style={{
						background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/w500${this.props.detail.poster_path})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<h1>{this.props.detail.title}</h1>
					<div className="content">
						<div
							className="poster"
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.props.detail.poster_path})`,
								backgroundSize: "cover",
								backgroundPosition: "top center",
							}}
						></div>
						<div className="info">
							<p>{this.props.detail.overview}</p>
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
								{this.props.detail.original_title}
								<br />
							</p>
							<ShareButtons />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
