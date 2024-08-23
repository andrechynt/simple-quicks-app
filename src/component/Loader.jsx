import React from "react";

export default function Loader({ text }) {
	return (
		<div className="wrapper-loader">
			<div className="loader"></div>
			<div className="text">{text}</div>
		</div>
	);
}
