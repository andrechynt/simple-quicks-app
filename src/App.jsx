import React, { useState } from "react";
import InboxIcon from "./assets/icon/chat.png";
import QuickIcon from "./assets/icon/quick.png";
import TaskIcon from "./assets/icon/todo.png";
import BoxContainer from "./component/BoxContainer";
import ActiveButton from "./component/button/ActiveButton";
import ButtonPrimary from "./component/button/ButtonPrimary";
import "./styles/app.scss";

function App() {
	const [activeButton, setActiveButton] = useState(false);
	const [openInbox, setOpenInbox] = useState(false);
	const [openTask, setOpenTask] = useState(false);

	const openQuickButton = () => {
		setActiveButton(!activeButton);
	};

	const closeQuickButton = () => {
		setActiveButton(false);
		setOpenInbox(false);
		setOpenTask(false);
	};

	const onOpenInbox = () => {
		setOpenInbox(true);
		setOpenTask(false);
	};

	const onOpenTask = () => {
		setOpenTask(true);
		setOpenInbox(false);
	};

	return (
		<>
			<div className="button-action">
				{!openTask && (
					<ButtonPrimary
						img={TaskIcon}
						name="Task"
						isActive={activeButton}
						event={onOpenTask}
						label={!openInbox}
					/>
				)}

				{!openInbox && (
					<ButtonPrimary
						img={InboxIcon}
						name="Inbox"
						isActive={activeButton}
						event={onOpenInbox}
						label={!openTask}
					/>
				)}

				{!openInbox && !openTask && (
					<ButtonPrimary
						img={QuickIcon}
						name="Quick"
						event={openQuickButton}
						isActive={activeButton}
					/>
				)}

				{openTask && (
					<ActiveButton img={TaskIcon} name="task" event={closeQuickButton} />
				)}

				{openInbox && (
					<ActiveButton img={InboxIcon} name="inbox" event={closeQuickButton} />
				)}
			</div>

			{(openInbox || openTask) && (
				<BoxContainer inbox={openInbox} task={openTask} closeQuick={closeQuickButton} />
			)}
		</>
	);
}

export default App;
