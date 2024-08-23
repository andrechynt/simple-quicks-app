import React, { useState } from "react";
import { ListTasks } from "../../data/dummyData";
import ButtonSecondary from "../button/ButtonSecondary";
import ListTask from "./ListTask";

export default function Task() {
	const [nav] = useState(["My Tasks", "Personal Errands", "Urgent To-Do"]);
	const [activeNav, setActiveNav] = useState(nav[0]);
	const [visibleDropdown, setVisibleDropdown] = useState(false);
	const [datas, setDatas] = useState(ListTasks());
	const [fieldNewTask, setFieldNewTask] = useState(false);

	const openDropdown = () => {
		setVisibleDropdown(!visibleDropdown);
	};

	const onChangeNav = (item) => {
		setActiveNav(item);
		setVisibleDropdown(false);
	};

	const onAddNewTask = (task) => {
		setDatas((prev) => {
			return [
				...prev,
				{
					id: prev[prev.length - 1].id + 1,
					...task,
				},
			];
		});
	};

	const onUpdateTask = (id, status) => {
		const newTask = datas.map((item) =>
			item.id == id ? { ...item, ...status } : item
		);

		setDatas(newTask);
	};

	const onDeleteTask = (id) => {
		const newTask = datas.filter((item) => item.id != id && item);
		setDatas(newTask);
	};

	const handleNewTaskField = () => {
		setFieldNewTask(!fieldNewTask);
	};

	return (
		<>
			<div className="task-header mx-32">
				<div className="dropdown-nav">
					<span onClick={openDropdown}>{activeNav}</span>
					<div className={`list ${visibleDropdown && "show"}`}>
						{nav.map(
							(item, index) =>
								item != activeNav && (
									<div
										key={index}
										className="item"
										onClick={() => onChangeNav(item)}
									>
										{item}
									</div>
								)
						)}
					</div>
				</div>
				<ButtonSecondary value="New Task" event={handleNewTaskField} />
			</div>
			<ListTask
				updateTask={onUpdateTask}
				tasks={datas}
				fieldNewTask={fieldNewTask}
				closeFieldNewTask={handleNewTaskField}
				addTask={onAddNewTask}
				deleteTask={onDeleteTask}
			/>
		</>
	);
}
