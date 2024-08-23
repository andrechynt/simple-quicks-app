const Inbox = () => {
	return [
		{
			type: "group",
			name: "109220-Naturalization",
			timestamp: "January 1,2021 19:10",
			messages: {
				people: "Cameron Phillips",
				text: "Please check this out!",
			},
			isRead: false,
		},
		{
			type: "group",
			name: "Jeannette Moraima Guaman Chamba (Hutto I-589)[Hutto Follow Up - Brief Service]",
			timestamp: "02/06/2021 10:45",
			messages: {
				people: "Ellen",
				text: "Hey, please read",
			},
			isRead: true,
		},
		{
			type: "group",
			name: "8405-Diana SALAZAR MUNGUIA",
			timestamp: "01/06/2021 12:19",
			messages: {
				people: "Cameron Phillips",
				text: "I understand your initial concerns and thats very valid, Elizabeth. But you ...",
			},
			isRead: true,
		},
		{
			type: "private",
			name: "FastVisa Support",
			messages: "Hey there! Welcome to your inbox.",
			timestamp: "01/06/2021 12:19",
			isRead: true,
		},
	];
};

const MessageGroup = () => {
	return [
		{
			role: 0,
			type: "admin",
			name: "You",
			message: "No worries. It will completed ASAP. i've asked him yesterday",
			times: "",
		},
		{
			role: 1,
			type: "people-1",
			name: "Mary Hilda",
			message:
				"Hello Obaidullah, i will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
			times: "Today June 09, 2021",
		},
		{
			role: 0,
			type: "admin",
			name: "You",
			message:
				"Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
			times: "Today June 09, 2021",
		},
		{
			role: 1,
			type: "people-1",
			name: "Mary Hilda",
			message: "Sure thing, Claren",
			times: "Today June 09, 2021",
		},
		{
			role: 1,
			type: "people-2",
			name: "Obaidullah Amarkhil",
			message: "Morning, i'll try do them. Thanks",
			times: "",
		},
	];
};

const MessagePrivate = () => {
	return [
		{
			role: 1,
			type: "people",
			name: "FastVisa Support",
			message:
				"Hey there. Welcome to your inbox! Contact us for more information and help about anything! We'll send you a response as soon as possible.",
		},
		{
			role: 0,
			type: "admin",
			name: "You",
			message: "Hi, I need help with something can you help me?",
		},
	];
};

const ListTasks = () => {
  return [
    {
      id: 1,
      title: "Close off Case #012920- RODRIGUES, Amiguel",
      description: "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success",
      timestamp: "2021-06-14",
      leftDay: 2,
      isDone: false
    },
    {
      id: 2,
      title: "Set up documentation report for several Cases: Case 145443, Case Case 192829 and Case 182203",
      description: "",
      timestamp: "2021-06-14",
      leftDay: 4,
      isDone: false
    },
    {
      id: 3,
      title: "Set up appointment with Dr Blake",
      description: "",
      timestamp: "2021-06-14",
      leftDay: 10,
      isDone: false
    },
    {
      id: 4,
      title: "Contact Mr Caleb video conference?",
      description: "",
      timestamp: "2021-06-03",
      leftDay: 3,
      isDone: true
    },
    {
      id: 5,
      title: "Assign 3 homework to Client A",
      description: "",
      timestamp: "2021-06-03",
      leftDay: 3,
      isDone: true
    }
  ]
}

export { Inbox, MessageGroup, MessagePrivate, ListTasks };
