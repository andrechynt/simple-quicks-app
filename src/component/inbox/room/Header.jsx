import React from "react";
import BackIcon from "../../../assets/icon/arrow-left.png";
import CloseIcon from "../../../assets/icon/close.png";

export default function Header({ back, close, data }) {
	return (
		<div className="header">
			<div className="item mx-32">
				<div className="back-btn" onClick={back}>
					<img src={BackIcon} alt="" />
				</div>
				<div className="text">
					<div className="name">{data.name}</div>
					{data.type == "group" && (
						<div className="participant">3 Participants</div>
					)}
				</div>
				<div className="close-btn" onClick={close}>
					<img src={CloseIcon} alt="" />
				</div>
			</div>
			<div className="line"></div>
		</div>
	);
}
