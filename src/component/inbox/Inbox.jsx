import React from "react";
import ListInbox from "./ListInbox";

export default function Inbox({ openRoom }) {
	return (
		<>
			<div className="search-box mx-32">
				<div className="icon"></div>
				<input type="text" name="search" id="search" placeholder="Search" />
			</div>
			<ListInbox open={openRoom} />
		</>
	);
}
