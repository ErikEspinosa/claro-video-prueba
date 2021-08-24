import React, { Component } from "react";
import "./TitleDetails.sass";
import Return from "./Return";
import ShareButtons from "./ShareButtons";

export default class TitleDetails extends Component {
	render() {
		const { detail } = this.props;

		const backgroundPoster = {
			backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${detail.image_background})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		};
		return (
			<div>
				<Return />
				{this.props.isloading && <h3>Cargando contenido...</h3>}
				{this.props.iserror && (
					<h3>Hubo un error al conectar con el servicio.</h3>
				)}
				<div className="content-detail" style={backgroundPoster}>
					<h1>{detail.title}</h1>
					<div className="content">
						<div className="poster">
							<img src={detail.image_small} alt={detail.title} />
						</div>
						<div className="info">
							<p>{detail.large_description}</p>
							<div className="details">
								<p>
									{"extendedcommon" in detail &&
										detail.extendedcommon.media.publishyear +
											" " +
											detail.duration}
								</p>

								<span className="hightlight-white">
									{"extendedcommon" in detail &&
									detail.extendedcommon.media.language.subbed
										? "Subtitulada"
										: ""}
								</span>

								<span className="hightlight-white">
									{"extendedcommon" in detail &&
									detail.extendedcommon.media.language.dubbed
										? "Doblada"
										: ""}
								</span>
								<span className="hightlight-black">
									{"extendedcommon" in detail &&
										detail.extendedcommon.media.rating.code}
								</span>
							</div>
							<div>
								{"extendedcommon" in detail &&
									detail.extendedcommon.roles.role.map((index, key) => (
										<p key={index.id}>
											<strong>{index.desc}: </strong>
											{index.talents.talent.map((item) => (
												<span key={item.id}>{item.fullname}</span>
											))}
										</p>
									))}

								<p>
									<strong>Género: </strong>
									{"extendedcommon" in detail &&
										detail.extendedcommon.genres.genre.map((index) => (
											<span key={index.id}>{index.desc} </span>
										))}
								</p>

								<p>
									<strong>Título original: </strong>
									{"extendedcommon" in detail &&
										detail.extendedcommon.media.originaltitle}
								</p>
							</div>
							<ShareButtons />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
