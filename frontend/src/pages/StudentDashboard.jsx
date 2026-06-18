import "./StudentDashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function StudentDashboard() {

const navigate = useNavigate();

const [leaveReason, setLeaveReason] = useState("");

const [complaintTitle, setComplaintTitle] = useState("");
const [complaintDescription, setComplaintDescription] = useState("");

const applyLeave = async () => {
    try {

    const leaveData = {
        reason: leaveReason,
        status: "PENDING"
    };

    await API.post("/student/apply-leave", leaveData);

    alert("Leave Request Submitted");

    setLeaveReason("");

    } catch (error) {
    console.log(error);
    alert("Failed to submit leave request");
    }
};

const submitComplaint = async () => {

    try {

    const complaintData = {
        studentId: 1,
        title: complaintTitle,
        description: complaintDescription
    };

    await API.post(
        "/student/complaint",
        complaintData
    );

    alert("Complaint Submitted Successfully");

    setComplaintTitle("");
    setComplaintDescription("");

    } catch (error) {

    console.log(error);

    alert("Failed To Submit Complaint");
    }
};

const handleLogout = () => {
    navigate("/");
};

return (

    <div className="student-dashboard">

    <div className="student-sidebar">

        <h2>Student Panel</h2>

        <ul>

        <li>Dashboard</li>

        <li onClick={handleLogout}>
            Logout
        </li>

        </ul>

    </div>

    <div className="student-content">

    <h1>Welcome Student 👋</h1>

<div className="profile-badge">
    <div className="profile-circle">S</div>

    <div>
        <h4>Student</h4>
        <p>Hostel Management System</p>
    </div>
</div>

<p className="student-subtitle">
Manage leave requests and complaints
</p>


        <div className="student-cards">

        <div className="student-card">
        <h2>A201</h2>
        <p>🛏 Room Number</p>
        </div>

        <div className="student-card">
            <h2>22CS101</h2>
                <p>🎓 Registration No</p>
            </div>

        <div className="student-card">
            <h2>2</h2>
            <p>📝 Leave Requests</p>
        </div>

        <div className="student-card">
            <h2>3</h2>
            <p>📢 Complaints</p>
        </div>
        </div>

        <div className="forms-container">

        <div className="form-box">

            <h2>Apply Leave</h2>

            <textarea
            placeholder="Enter Leave Reason"
            value={leaveReason}
            onChange={(e) =>
                setLeaveReason(e.target.value)
            }
            />

            <button onClick={applyLeave}>
            Submit Leave
            </button>

        </div>

        <div className="form-box">

            <h2>Submit Complaint</h2>

            <input
            type="text"
            placeholder="Complaint Title"
            value={complaintTitle}
            onChange={(e) =>
                setComplaintTitle(e.target.value)
            }
            />

            <textarea
            placeholder="Complaint Description"
            value={complaintDescription}
            onChange={(e) =>
                setComplaintDescription(
                e.target.value
                )
            }
            />

            <button onClick={submitComplaint}>
            Submit Complaint
            </button>

        </div>

        </div>

    </div>

    </div>
);
}

export default StudentDashboard;