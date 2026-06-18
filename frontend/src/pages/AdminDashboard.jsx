import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AdminDashboard() {

const navigate = useNavigate();

const [rooms, setRooms] = useState(0);
const [students, setStudents] = useState(0);
const [complaints, setComplaints] = useState(0);

useEffect(() => {
    loadDashboard();
}, []);

const loadDashboard = async () => {
    try {

    const studentRes = await API.get("/student/all");
    const roomRes = await API.get("/admin/rooms");

    setStudents(studentRes.data.length);
    setRooms(roomRes.data.length);

      // Temporary value
    setComplaints(15);

    } catch (error) {
    console.log("Error loading dashboard:", error);
    }
};

return (
    <div className="dashboard">

    <div className="sidebar">

        <h2>Admin Panel</h2>

        <ul>

        <li onClick={() => navigate("/admin")}>
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

        <li onClick={() =>navigate("/leave-requests")}>
            Leave Requests
        </li>

        <li onClick={() => navigate("/")}>
            Logout
        </li>

        </ul>

    </div>

    <div className="content">

    <div className="topbar">

        <div>
            <h1>Welcome Admin 👋</h1>

            <p className="dashboard-subtitle">
                Manage students, rooms, complaints and leave requests
            </p>
        </div>

        <div className="admin-profile">
            <div className="profile-circle">
                A
            </div>

            <div>
                <h4>Administrator</h4>
                <span>Hostel Management System</span>
            </div>
        </div>

    </div>

        <div className="card rooms-card">
            <div className="card-icon">🛏️</div>
            <h2>{rooms}</h2>
            <p>Total Rooms</p>
        </div>

        <div className="card students-card">
            <div className="card-icon">👨‍🎓</div>
            <h2>{students}</h2>
            <p>Total Students</p>
        </div>

        <div className="card complaints-card">
            <div className="card-icon">📢</div>
            <h2>{complaints}</h2>
            <p>Total Complaints</p>
        </div>

        </div>

    </div>


);
}

export default AdminDashboard;