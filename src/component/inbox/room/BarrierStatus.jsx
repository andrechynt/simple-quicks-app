import React from "react";

export default function BarrierStatus({ text, isNewMessage, refNewMsg }) {
	return (
		<div ref={refNewMsg} className="barrier-wrapper">
			<div className={`line ${isNewMessage && "new-message"}`}></div>
			<div className={`text ${isNewMessage && "new-message"}`}>{text}</div>
			<div className={`line ${isNewMessage && "new-message"}`}></div>
		</div>
	);
}
