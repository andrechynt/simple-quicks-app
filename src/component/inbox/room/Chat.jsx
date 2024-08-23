import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { MessageGroup, MessagePrivate } from "../../../data/dummyData";
import BubbleChat from "./BubbleChat";

export default function Chat({ type, statusRead }) {
	const [openSetting, setOpenSetting] = useState(false);
	const [targetItem, setTargetItem] = useState(null);
	const [msgGroup] = useState(MessageGroup());
	const [msgPrivate] = useState(MessagePrivate());
	const { ref, inView } = useInView({ threshold: 0 });
	const listMessagesRef = useRef();

	useEffect(() => {
		listMessagesRef.current.scrollTo(
			0,
			listMessagesRef.current.scrollHeight,
			"auto"
		);
	}, []);

	let datas = type == "group" ? msgGroup : msgPrivate;

	const onOpen = (index) => {
		setOpenSetting(!openSetting);
		setTargetItem(index);
	};

	const showLoader = () => {
		return (
			<div className="loader-chat">
				<div className="loader"></div>
				<div className="text">
					Please wait while we connect you with one of our team...
				</div>
			</div>
		);
	};

	return (
		<div ref={listMessagesRef} className="chat mx-32">
			{datas.map((item, index) => (
				<BubbleChat
					key={index}
					indexItem={index}
					position={`${item.role == 0 ? "right" : "left"}`}
					onOpenSetting={onOpen}
					data={item}
					{...(targetItem == index && { isOpenSetting: openSetting })}
					{...(index == datas.length - 1 && {
						readStatus: statusRead,
						refNewMsg: ref,
					})}
					{...(index == 1 &&
						type == "group" && { showTime: true, readStatus: true })}
					{...(type == "private" && { showLoad: true })}
				/>
			))}

			{inView == false && statusRead == false && (
				<div className="tooltip">New Message</div>
			)}

			{type == "private" && showLoader()}
		</div>
	);
}
