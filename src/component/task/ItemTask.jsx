import moment from "moment";
import React, { useState } from "react";
import ArrowIcon from "../../assets/icon/dropdown.png";
import MoreSettingIcon from "../../assets/icon/more-setting.png";
import EditSecondIcon from "../../assets/icon/pen-second.png";
import EditIcon from "../../assets/icon/pen.png";
import TimeIcon from "../../assets/icon/time.png";

export default function ItemTask({
	data,
	visibleDetail,
	openTask,
	updateTask,
	openDelete,
	visibleDelete,
	isEditDescription,
	showEditFieldDescription,
	closeEditField,
	deleteTask,
}) {
	const [checked, setChecked] = useState(data.isDone);
	const [descEdit, setDescEdit] = useState(data.description);

	const handleChangeCheckbox = (e) => {
		setChecked(e.target.checked);
		updateTask(data.id, { isDone: e.target.checked });
	};

	const handleChangeInput = (e) => {
		setDescEdit(e.target.value);
	};

	const handleDescription = (isEdit, text) => {
		const desc = text.length ? text : "No Description";

		return isEdit ? (
			<textarea
				name="desc"
				id="desc"
				value={descEdit}
				onChange={handleChangeInput}
			></textarea>
		) : (
			desc
		);
	};

	const handleUpdateDesc = (e) => {
		if (e.keyCode == 13) {
			updateTask(data.id, { description: descEdit });
			closeEditField();
		}
	};

	return (
		<div className="item-task">
			<div className="checkbox">
				<input
					type="checkbox"
					name="taskStatus"
					id="taskStatus"
					checked={checked}
					onChange={handleChangeCheckbox}
				/>
			</div>
			<div className="content">
				<div className="header">
					<div className={`title ${data.isDone && "done"}`}>{data.title}</div>
					<div className="left-day">
						{data.isDone == false && `${data.leftDay} Days Left`}
					</div>
					<div className="deadline">{moment(data.timestamp).format("l")}</div>
				</div>
				<div className={`body ${visibleDetail && "show"}`}>
					<div className="set-deadline">
						<div className="icon">
							<img src={TimeIcon} alt="" />
						</div>
						<input
							type="date"
							name="deadline"
							id="deadline"
							defaultValue={data.timestamp}
						/>
					</div>
					<div className="description">
						<div className="icon">
							<img
								src={data.description.length ? EditIcon : EditSecondIcon}
								alt=""
							/>
						</div>
						<div
							className="text"
							onClick={() => showEditFieldDescription(data.id)}
							onKeyDown={handleUpdateDesc}
						>
							{handleDescription(isEditDescription, data.description)}
						</div>
					</div>
				</div>
			</div>
			<div
				className={`see-more ${visibleDetail && "open"}`}
				onClick={() => openTask(data.id)}
			>
				<img src={ArrowIcon} alt="" />
			</div>
			<div className="setting" onClick={() => openDelete(data.id)}>
				<img src={MoreSettingIcon} alt="" />
				{visibleDelete && (
					<div className="delete" onClick={() => deleteTask(data.id)}>
						Delete
					</div>
				)}
			</div>
		</div>
	);
}
