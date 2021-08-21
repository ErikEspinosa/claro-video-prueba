import React, { Component } from "react";
import mail from "../assets/mail.svg";
import share from "../assets/share.svg";

export default class ShareButtons extends Component {
	render() {
		return (
			<div className="share">
				<a href="https://erikespinosar.com" title="Email">
					<span className="circle">
						<img src={mail} alt="Email" />
					</span>
					<span className="title">e-mail</span>
				</a>
				<a href="https://erikespinosar.com" title="Compartir">
					<span className="circle">
						<img src={share} alt="Share" />
					</span>
					<span className="title">Compartir</span>
				</a>
			</div>
		);
	}
}
