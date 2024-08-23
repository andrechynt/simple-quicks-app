import React, { useEffect, useState } from "react";
import PersonIcon from "../../assets/icon/person.png";
import { Inbox } from "../../data/dummyData";
import Loader from "../Loader";
import ItemInbox from "./ItemInbox";

export default function ListInbox({ open }) {
	const [ListInbox] = useState(Inbox());
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<div className="list-inbox mx-32">
			{loading && <Loader text="Loading Chats..." />}
			{loading == false &&
				ListInbox.map((item, index) => (
					<ItemInbox
						key={index}
						event={open}
						PersonIcon={PersonIcon}
						data={item}
					/>
				))}
		</div>
	);
}
