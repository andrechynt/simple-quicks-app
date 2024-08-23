import React, { useState } from "react";
import ArrowIcon from "../../assets/icon/dropdown.png";
import MoreSettingIcon from "../../assets/icon/more-setting.png";
import EditIcon from "../../assets/icon/pen-second.png";
import TimeIcon from "../../assets/icon/time-second.png";

export default function NewTask({ closeField, addTask }) {
	const [title, setTitle] = useState("");
	const [time, setTime] = useState("");
	const [inputDate, setInputDate] = useState(false);

	const handleInputTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleInputDate = (e) => {
		setTime(e.target.value);
	};

	const handleSubmit = (e) => {
		if (e.keyCode == 13) {
			addTask({
				title: title,
				description: "",
				timestamp: time,
				leftDay: 0,
				isDone: false,
			});

			closeField();
		}
	};

	return (
		<div className="new-task">
			<div className="checkbox">
				<input type="checkbox" name="taskStatus" id="taskStatus" />
			</div>
			<form className="content" onKeyDown={handleSubmit}>
				<div className="header">
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Type Task Title"
						value={title}
						onChange={handleInputTitle}
					/>
				</div>
				<div className={`body show`}>
					<div className="set-deadline">
						<div className="icon">
							<img src={TimeIcon} alt="" />
						</div>
						{inputDate ? (
							<input
								name="deadline"
								id="deadline"
								onChange={handleInputDate}
								type="date"
							/>
						) : (
							<input
								type="text"
								placeholder="Set Date"
								onClick={() => setInputDate(true)}
							/>
						)}
					</div>
					<div className="description">
						<div className="icon">
							<img src={EditIcon} alt="" />
						</div>
						<div className="text">No Description</div>
					</div>
				</div>
			</form>
			<div className={`see-more open`}>
				<img src={ArrowIcon} alt="" />
			</div>
			<div className="setting">
				<img src={MoreSettingIcon} alt="" />
			</div>
		</div>
	);
}
