import "./LeaveRequests.css";
import { useEffect, useState } from "react";
import API from "../services/api";

function LeaveRequests() {

const [leaves, setLeaves] = useState([]);

useEffect(() => {
    loadLeaves();
}, []);

const loadLeaves = async () => {

    const response =
    await API.get("/admin/leaves");

    setLeaves(response.data);
};

const approveLeave = async (id) => {

    await API.put(
    `/admin/leave/approve/${id}`
    );

    loadLeaves();
};

const rejectLeave = async (id) => {

    await API.put(
    `/admin/leave/reject/${id}`
    );

    loadLeaves();
};

return (


    <div className="leave-container">

    <h1>📅 Leave Requests</h1>

    <table>

        <thead>
        <tr>
            <th>ID</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
        </thead>

        <tbody>

        {leaves.map((leave) => (

            <tr key={leave.id}>

            <td>{leave.id}</td>

            <td>{leave.reason}</td>

    <td><span className={leave.status === "APPROVED"
                        ? "status-approved"
                        : leave.status === "REJECTED"
                        ? "status-rejected"
                        : "status-pending"}>
                        {leave.status}
    </span></td>

            <td>

        {leave.status === "PENDING" && (
                    <>
                    <button
                    className="approve-btn"
                    onClick={() =>
                    approveLeave(leave.id)}
                    >                
                        Approve
                    </button>

                <button
                    className="reject-btn"
                    onClick={() =>
                    rejectLeave(leave.id)
        }
    >
        Reject
    </button>
    </>
)}

</td>

            </tr>

        ))}

        </tbody>

    </table>

    </div>
);
}

export default LeaveRequests;