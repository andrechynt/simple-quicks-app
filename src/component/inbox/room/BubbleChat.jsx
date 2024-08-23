import React from "react";
import MoreSettingIcon from "../../../assets/icon/more-setting.png";
import BarrierStatus from "./BarrierStatus";

export default function BubbleChat({
	indexItem,
	position,
	isOpenSetting,
	onOpenSetting,
	data,
	refNewMsg,
	readStatus,
	showTime,
}) {
	const showNewMessage = () => {
		return (
			<BarrierStatus
				text="New Message"
				refNewMsg={refNewMsg}
				isNewMessage={true}
			/>
		);
	};

	const showTimeMessage = () => {
		return <BarrierStatus text="Today june 09, 2021" />;
	};

	const showSettingMessage = () => {
		return (
			<div className="setting-action right">
				<div className="edit">Edit</div>
				<div className="delete">Delete</div>
			</div>
		);
	};

	return (
		<>
			{readStatus == false && showNewMessage()}
			{readStatus && showTime && showTimeMessage()}
			<div className={`bubble-chat-wrapper ${position}`}>
				<div className={`name ${data.type}`}>{data.name}</div>
				<div className={`bubble ${position}`}>
					{position == "right" && (
						<div className="action" onClick={() => onOpenSetting(indexItem)}>
							<img src={MoreSettingIcon} alt="" />
							{isOpenSetting && showSettingMessage()}
						</div>
					)}
					<div className={`text-wrapper ${data.type}`}>
						<div className="message">{data.message}</div>
						<div className="time">19:32</div>
					</div>
					{position == "left" && (
						<div className="action">
							<img src={MoreSettingIcon} alt="" />
						</div>
					)}
				</div>
			</div>
		</>
	);
}
