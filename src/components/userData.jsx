import WorkingDays from "./WorkingDays";

const users = [
  {
  name: "Ujjwal Sharma",
    id: "660638|A0",
    dob: "12/10/1999",
    active: true,
    joining: "01/04/2023",
    relieving: "15/12/2023",
    daysLeft: "35 days",
    image: "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_1280.jpg",
    deployments: [
      { date: "13 Dec 2023", station: "2LG", task: "Break pipe Fitment", type: "C", isToday: true },
      { date: "13 Dec 2023", station: "6PA", task: "Break pipe Fitment", type: "D", isToday: false },
      { date: "12 Dec 2023", station: "9IO", task: "Break pipe Fitment", type: "B", isToday: false },
      { date: "11 Dec 2023", station: "2BR", task: "Break pipe Fitment", type: "F", isToday: false },
      { date: "10 Dec 2023", station: "9RA", task: "Break pipe Fitment", type: "A", isToday: false }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Present", inTime: "09:05", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Absent", inTime: "-", outTime: "-" },
      { date: "15 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:05" }
    ],
    WorkingDays:"22",
    Present:"20"
  },
  {
    name: "Raj Kumar",
    id: "660669|TW",
    dob: "12/11/2000",
    active: false,
    joining: "10/04/2023",
    relieving: "20/12/2023",
    daysLeft: "30 days",
    image: "https://img.freepik.com/free-photo/young-indian-man-dressed-trendy-outfit-monitoring-information-from-social-networks_231208-2766.jpg?w=360",
    deployments: [
      { date: "14 Dec 2023", station: "2RA", task: "Fitment Check", type: "M", isToday: true },
      { date: "13 Dec 2023", station: "3FA", task: "Break pipe Fitment", type: "F", isToday: false },
      { date: "12 Dec 2023", station: "5BR", task: "Break pipe Fitment", type: "D", isToday: false },
      { date: "12 Dec 2023", station: "7RB", task: "Engine Fix", type: "A", isToday: false },
      { date: "11 Dec 2023", station: "7RA", task: "Axle Fitment", type: "H", isToday: false }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "08:55", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Present", inTime: "09:10", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:15" },
      { date: "15 Dec 2023", status: "Absent", inTime: "-", outTime: "-" }
    ],
    WorkingDays:"22",
    Present:"15"
  },
  {
    name: "Bambam Kumar",
    id: "660677|A0",
    dob: "05/06/2001",
    active: true,
    joining: "02/05/2023",
    relieving: "22/12/2023",
    daysLeft: "31 days",
    image: "https://www.shutterstock.com/image-photo/handsome-30s-top-manager-portrait-600nw-2448610227.jpg",
    deployments: [
      { date: "13 Dec 2023", station: "2LG", task: "Break pipe Fitment", type: "C", isToday: true },
      { date: "13 Dec 2023", station: "6PA", task: "Break pipe Fitment", type: "D", isToday: false },
      { date: "12 Dec 2023", station: "9IO", task: "Break pipe Fitment", type: "B", isToday: false },
      { date: "11 Dec 2023", station: "2BR", task: "Break pipe Fitment", type: "F", isToday: false },
      { date: "10 Dec 2023", station: "9RA", task: "Break pipe Fitment", type: "A", isToday: false }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:01", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Late", inTime: "09:30", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Present", inTime: "08:58", outTime: "17:02" },
      { date: "15 Dec 2023", status: "Present", inTime: "09:00", outTime: "16:45" }
    ],
    WorkingDays:"22",
    Present:"22"
  },
  {
    name: "Shubham Sagar",
    id: "660684|A0",
    dob: "21/02/2002",
    active: true,
    joining: "03/05/2023",
    relieving: "18/12/2023",
    daysLeft: "25 days",
    image: "https://i.pinimg.com/736x/00/49/bf/0049bf07f235946231927cfccf349826.jpg",
    deployments: [
      { date: "13 Dec 2023", station: "1PG", task: "Axle Fitment", type: "C", isToday: true },
      { date: "13 Dec 2023", station: "9DG", task: "Axle Fitment", type: "D", isToday: false },
      { date: "12 Dec 2023", station: "9EF", task: "Break pipe Fitment", type: "B", isToday: false },
      { date: "11 Dec 2023", station: "9LG", task: "Break pipe Fitment", type: "F", isToday: false },
      { date: "10 Dec 2023", station: "9HF", task: "Assembly", type: "A", isToday: false }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:03", outTime: "17:04" },
      { date: "13 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Late", inTime: "09:25", outTime: "17:10" },
      { date: "15 Dec 2023", status: "Present", inTime: "08:57", outTime: "17:01" }
    ],
    WorkingDays:"22",
    Present:"21"
  },
   {
    name: "Mohd Azruddin",
    id: "660704|TW",
    dob: "12/08/1998",
    active: true,
    joining: "15/04/2023",
    relieving: "19/12/2023",
    daysLeft: "28 days",
    image: "https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=6vUtfKvHhNsK9kdNWb7EJlksBDhBBok1bNjNRULsAYs=",
    deployments: [
      { date: "13 Dec 2023", station: "1PG", task: "Axle Fitment", type: "P", isToday: true },
      { date: "13 Dec 2023", station: "9DG", task: "Axle Fitment", type: "Q", isToday: false },
      { date: "12 Dec 2023", station: "9PL", task: "Break pipe Fitment", type: "M", isToday: false },
      { date: "11 Dec 2023", station: "8PL", task: "Break pipe Fitment", type: "E", isToday: false },
      { date: "10 Dec 2023", station: "9IO", task: "Assembly", type: "D", isToday: false }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "08:59", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Present", inTime: "09:10", outTime: "17:15" },
      { date: "15 Dec 2023", status: "Absent", inTime: "-", outTime: "-" }
    ],
    WorkingDays:"22",
    Present:"19"
  },
  {
    name: "Kuldeep Oraon",
    id: "660705|A0",
    dob: "10/07/2000",
    active: true,
    joining: "17/04/2023",
    relieving: "21/12/2023",
    daysLeft: "29 days",
    image: "https://www.shutterstock.com/image-photo/business-portrait-confident-businessman-entrepreneur-600nw-2480068229.jpg",
    deployments: [
      { date: "13 Dec 2023", station: "1PG", task: "Axle Fitment", type: "C", isToday: true },
      { date: "13 Dec 2023", station: "9DG", task: "Axle Fitment", type: "Q", isToday: false },
      { date: "11 Dec 2023", station: "9LG", task: "Break pipe Fitment", type: "F", isToday: false },
      { date: "11 Dec 2023", station: "8PL", task: "Break pipe Fitment", type: "E", isToday: false },
      { date: "10 Dec 2023", station: "9IO", task: "Assembly", type: "D", isToday: false }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:02", outTime: "17:05" },
      { date: "13 Dec 2023", status: "Late", inTime: "09:35", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Present", inTime: "08:55", outTime: "17:00" },
      { date: "15 Dec 2023", status: "Present", inTime: "09:01", outTime: "16:50" }
    ],
    WorkingDays:"22",
    Present:"22"
  },
  {
    name: "Ankit",
    id: "660729|TW",
    dob: "09/03/2001",
    active: false,
    joining: "20/04/2023",
    relieving: "23/12/2023",
    daysLeft: "30 days",
    image: "https://www.shutterstock.com/image-photo/smiling-confident-latin-hispanic-mature-600nw-2451982365.jpg",
    deployments: [
      { date: "13 Dec 2023", station: "2LG", task: "Break pipe Fitment", type: "C", isToday: true },
      { date: "13 Dec 2023", station: "6PA", task: "Break pipe Fitment", type: "D", isToday: false },
      { date: "13 Dec 2023", station: "1PG", task: "Axle Fitment", type: "C", isToday: false },
      { date: "11 Dec 2023", station: "9LG", task: "Break pipe Fitment", type: "F", isToday: false },
      { date: "10 Dec 2023", station: "9RA", task: "Break pipe Fitment", type: "A", isToday: false }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Absent", inTime: "-", outTime: "-" },
      { date: "13 Dec 2023", status: "Present", inTime: "09:20", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:00" },
      { date: "15 Dec 2023", status: "Present", inTime: "08:57", outTime: "17:05" }
    ],
    WorkingDays:"22",
    Present:"21"
  },

 {
    name: "Arjun Mehta",
    id: "660755|TW",
    dob: "15/01/2001",
    active: true,
    joining: "22/04/2023",
    relieving: "24/12/2023",
    daysLeft: "32 days",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    deployments: [
      { date: "12 Dec 2023", station: "5AX", task: "Welding", type: "B", isToday: false },
      { date: "13 Dec 2023", station: "6YU", task: "Inspection", type: "C", isToday: false },
      { date: "15 Dec 2023", station: "7TR", task: "Assembly", type: "D", isToday: true }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Late", inTime: "09:30", outTime: "17:10" },
      { date: "14 Dec 2023", status: "Present", inTime: "08:55", outTime: "17:05" },
      { date: "15 Dec 2023", status: "Present", inTime: "09:10", outTime: "17:00" }
    ],
    WorkingDays:"22",
    Present:"19"
  },
  {
    name: "Priya Verma",
    id: "660756|AW",
    dob: "18/06/2002",
    active: true,
    joining: "01/05/2023",
    relieving: "28/12/2023",
    daysLeft: "38 days",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    deployments: [
      { date: "11 Dec 2023", station: "3LM", task: "Wiring", type: "A", isToday: false },
      { date: "14 Dec 2023", station: "9IU", task: "Fitment", type: "F", isToday: false },
      { date: "15 Dec 2023", station: "8JK", task: "Testing", type: "H", isToday: true }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:10", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Absent", inTime: "-", outTime: "-" },
      { date: "15 Dec 2023", status: "Present", inTime: "09:03", outTime: "17:00" }
    ],
    WorkingDays:"22",
    Present:"16"
  },
  {
    name: "Amit Joshi",
    id: "660757|A0",
    dob: "23/09/2000",
    active: false,
    joining: "05/06/2023",
    relieving: "30/12/2023",
    daysLeft: "41 days",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    deployments: [
      { date: "10 Dec 2023", station: "3PL", task: "Packing", type: "D", isToday: false },
      { date: "12 Dec 2023", station: "2YB", task: "Inspection", type: "C", isToday: false },
      { date: "16 Dec 2023", station: "1AR", task: "Assembly", type: "A", isToday: true }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "08:58", outTime: "17:05" },
      { date: "13 Dec 2023", status: "Absent", inTime: "-", outTime: "-" },
      { date: "14 Dec 2023", status: "Present", inTime: "09:05", outTime: "17:00" },
      { date: "15 Dec 2023", status: "Late", inTime: "09:45", outTime: "17:10" }
    ],
    WorkingDays:"22",
    Present:"12"
  },
  {
    name: "Nisha Kumari",
    id: "660758|TW",
    dob: "11/12/2003",
    active: true,
    joining: "10/05/2023",
    relieving: "25/12/2023",
    daysLeft: "35 days",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    deployments: [
      { date: "13 Dec 2023", station: "4GR", task: "Inspection", type: "M", isToday: false },
      { date: "14 Dec 2023", station: "5LK", task: "Soldering", type: "G", isToday: false },
      { date: "15 Dec 2023", station: "6PA", task: "Break pipe Fitment", type: "D", isToday: true }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:10", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Present", inTime: "08:55", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Late", inTime: "09:40", outTime: "17:00" },
      { date: "15 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:05" }
    ],
    WorkingDays:"22",
    Present:"17"
  },
{
    name: "Ravi Sharma",
    id: "660759|AM",
    dob: "30/03/1999",
    active: true,
    joining: "03/06/2023",
    relieving: "29/12/2023",
    daysLeft: "39 days",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    deployments: [
      { date: "12 Dec 2023", station: "7BR", task: "Fitment", type: "B", isToday: false },
      { date: "13 Dec 2023", station: "1GB", task: "Assembly", type: "A", isToday: false },
      { date: "15 Dec 2023", station: "8XR", task: "Inspection", type: "E", isToday: true }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Present", inTime: "09:03", outTime: "17:00" },
      { date: "14 Dec 2023", status: "Late", inTime: "09:35", outTime: "17:05" },
      { date: "15 Dec 2023", status: "Present", inTime: "08:55", outTime: "17:10" }
    ],
    WorkingDays:"22",
    Present:"15"
  },
  {
    name: "Sneha Rajput",
    id: "660760|TW",
    dob: "07/08/2004",
    active: true,
    joining: "08/06/2023",
    relieving: "27/12/2023",
    daysLeft: "37 days",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    deployments: [
      { date: "10 Dec 2023", station: "2ZA", task: "Assembly", type: "D", isToday: false },
      { date: "13 Dec 2023", station: "3XK", task: "Testing", type: "B", isToday: false },
      { date: "16 Dec 2023", station: "4BY", task: "Fitment", type: "F", isToday: true }
    ],
    attendance: [
      { date: "12 Dec 2023", status: "Present", inTime: "09:05", outTime: "17:00" },
      { date: "13 Dec 2023", status: "Absent", inTime: "-", outTime: "-" },
      { date: "14 Dec 2023", status: "Present", inTime: "09:00", outTime: "17:00" },
      { date: "15 Dec 2023", status: "Present", inTime: "09:15", outTime: "17:05" }
    ],
    WorkingDays:"22",
    Present:"20"
  }
];

export default users;
