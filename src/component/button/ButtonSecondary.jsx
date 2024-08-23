import React from "react";

export default function ButtonSecondary({ value, event }) {
	return <div className="secondary-button" onClick={event}>{value}</div>;
}
