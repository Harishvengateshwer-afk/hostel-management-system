import "./WardenDashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function WardenDashboard() {

const navigate = useNavigate();

const [rooms, setRooms] = useState(0);
const [students, setStudents] = useState(0);
const [complaints, setComplaints] = useState(0);
const [leaveRequests, setLeaveRequests] = useState(0);

useEffect(() => {
    loadDashboard();
}, []);

const loadDashboard = async () => {
    try {

    const roomRes = await API.get("/admin/rooms");
    const studentRes = await API.get("/student/all");
    const complaintRes = await API.get("/admin/complaints");
    const leaveRes = await API.get("/admin/leaves");

    setRooms(roomRes.data.length);
    setStudents(studentRes.data.length);

    const pendingComplaints = complaintRes.data.filter(
        (c) => c.status === "OPEN"
    );

    const pendingLeaves = leaveRes.data.filter(
        (l) => l.status === "PENDING"
    );

    setComplaints(pendingComplaints.length);
    setLeaveRequests(pendingLeaves.length);

    } catch (error) {
    console.log(error);
    }
};

return (
    <div className="dashboard">

    <div className="sidebar">

        <h2>Warden Panel</h2>

        <ul>

        <li onClick={() => navigate("/warden")}>
            Dashboard
        </li>

        <li onClick={() => navigate("/rooms")}>
            Rooms
        </li>

        <li onClick={() => navigate("/students")}>
            Students
        </li>

        <li onClick={() => navigate("/complaints")}>
            Complaints
        </li>

        <li onClick={() => navigate("/leave-requests")}>
            Leave Requests
        </li>

        <li onClick={() => navigate("/")}>
            Logout
        </li>

        </ul>

    </div>

    <div className="content">

        <h1>Welcome Warden 👋</h1>

        <p className="dashboard-subtitle">
            Monitor rooms, students, complaints and leave requests</p>

        <div className="cards">

        <div className="card">
            <div className="card-icon">🛏️</div>
            <h2>{rooms}</h2>
            <p>Total Rooms</p>
            </div>

        <div className="card">
            <div className="card-icon">👨‍🎓</div>
            <h2>{students}</h2>
            <p>Total Students</p>
        </div>

        <div className="card">
            <div className="card-icon">📢</div>
            <h2>{complaints}</h2>
            <p>Open Complaints</p>
        </div>

        <div className="card">
            <div className="card-icon">📝</div>
            <h2>{leaveRequests}</h2>
            <p>Pending Leaves</p>
        </div>

        </div>

    </div>

    </div>
);
}

export default WardenDashboard;