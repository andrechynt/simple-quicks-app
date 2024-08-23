import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import ItemTask from "./ItemTask";
import NewTask from "./NewTask";

export default function ListTask({
	tasks,
	updateTask,
	fieldNewTask,
	closeFieldNewTask,
	addTask,
	deleteTask,
}) {
	const [visibleDetail, setVisibleDetail] = useState(true);
	const [itemShow, setItemShow] = useState(1);
	const [loading, setLoading] = useState(false);
	const [targetItem, setTargetItem] = useState(null);
	const [visibleDelete, setVisibleDelete] = useState(false);
	const [edit, setEdit] = useState(false);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	const openDetailTask = (id) => {
		id == itemShow ? setVisibleDetail(!visibleDetail) : setVisibleDetail(true);
		setItemShow(id);
	};

	const openDeleteProperty = (id) => {
		setVisibleDelete(!visibleDelete);
		setTargetItem(id);
	};

	const openEditField = (id) => {
		setEdit(true);
		setTargetItem(id);
	};

	const closeEditField = () => {
		setEdit(false);
	};

	return (
		<div className="list-task mx-32">
			{loading && <Loader text="Loading Task List..." />}
			{loading == false &&
				tasks.map((item) => (
					<ItemTask
						key={item.id}
						data={item}
						updateTask={updateTask}
						openTask={openDetailTask}
						{...(item.id == itemShow && { visibleDetail: visibleDetail })}
						openDelete={openDeleteProperty}
						{...(item.id == targetItem && { visibleDelete: visibleDelete })}
						{...(item.id == targetItem && { isEditDescription: edit })}
						showEditFieldDescription={openEditField}
						closeEditField={closeEditField}
            deleteTask={deleteTask}
					/>
				))}
			{fieldNewTask && (
				<NewTask closeField={closeFieldNewTask} addTask={addTask} />
			)}
		</div>
	);
}
