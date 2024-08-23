import React from "react";
import ButtonSecondary from "../../button/ButtonSecondary";
import Chat from "./Chat";
import Header from "./Header";

export default function RoomChat({ onBack, onClose, data }) {
	return (
		<>
			<Header back={onBack} close={onClose} data={data} />
			<Chat type={data.type} statusRead={data.isRead} />
			<div className="action-message mx-32">
				<div className="input">
					<input
						type="text"
						name="message"
						id="message"
						placeholder="Type a new message"
					/>
				</div>
				<ButtonSecondary value="Send" />
			</div>
		</>
	);
}
