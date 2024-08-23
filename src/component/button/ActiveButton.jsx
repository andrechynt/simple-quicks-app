import React from "react";

export default function ActiveButton({ img, name, event }) {
	return (
		<div className="active-button">
			<div className="back" onClick={event}></div>
			<div className={`button ${name}`}>
				<img src={img} alt={name} />
			</div>
		</div>
	);
}
