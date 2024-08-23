import React from "react";

export default function ButtonPrimary({ img, name, event, isActive, label }) {
	const position =
		name === "Inbox" ? "wrapper-inbox" : name === "Task" && "wrapper-task";

	return (
		<div
			className={`primary-button ${position} ${isActive && "show"}`}
			onClick={event}
		>
			{label && <div className="label">{name}</div>}
			<div className={`button ${name.toLowerCase()}`}>
				<img src={img} alt={name} />
			</div>
		</div>
	);
}
