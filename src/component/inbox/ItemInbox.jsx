import React from "react";

export default function ItemInbox({ PersonIcon, event, data}) {
	return (
		<div className="item-inbox" onClick={() => event(data)}>
			<div className="wrapper-avatar">
				{data.type == "group" && (
					<div className="avatar">
						<img src={PersonIcon} alt="" />
					</div>
				)}
				<div className={`avatar ${data.type} active`}>
					{data.type == "group" ? <img src={PersonIcon} alt="" /> : data.name.charAt(0)}
				</div>
			</div>
			<div className="content">
				<div className="head">
					<div className="name">{data.name}</div>
					<div className="time">{data.timestamp}</div>
				</div>
				<div className="body">
					{data.type == "group" && <div className="name">{`${data.messages.people} :`}</div>}
					<div className="message">{data.type == "group" ? data.messages.text : data.messages}</div>
				</div>
			</div>
			{data.isRead == false && <div className="unread"></div>}
		</div>
	);
}
