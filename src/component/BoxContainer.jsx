import React, { useEffect, useState } from "react";
import Inbox from "./inbox/Inbox";
import RoomChat from "./inbox/room/RoomChat";
import Task from "./task/Task";

export default function BoxContainer({ inbox, task, closeQuick }) {
	const [roomInbox, setRoomInbox] = useState(false);
  const [dataRoom, setDataRoom] = useState(null)

  useEffect(() => {
    if(task) {
      setRoomInbox(false)
    }
  }, [task])

	const openRoomInbox = (data) => {
		setRoomInbox(true);
    setDataRoom(data)
	};

  const backToListInbox = () => {
    setRoomInbox(false);
  }

	return (
		<div className="box-container">
			{inbox && !roomInbox && <Inbox openRoom={openRoomInbox} />}
			{task && <Task />}
			{roomInbox && !task && <RoomChat onBack={backToListInbox} onClose={closeQuick} data={dataRoom} />}
		</div>
	);
}
