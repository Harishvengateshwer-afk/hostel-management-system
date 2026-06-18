import "./Complaints.css";
import { useEffect, useState } from "react";
import API from "../services/api";

function Complaints() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {

    try {

      const response =
        await API.get("/admin/complaints");

      setComplaints(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const resolveComplaint = async (id) => {

    try {

      await API.put(
        `/admin/complaint/resolve/${id}`
      );

      loadComplaints();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="complaints-container">

      <h1>📢 Complaints Management</h1>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Complaint</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {complaints.map((complaint) => (

            <tr key={complaint.id}>

              <td>{complaint.id}</td>

              <td>
            <div className="complaint-title">{complaint.title}</div>
            <div className="complaint-description">{complaint.description}</div>
            </td>
              

              <td><span className={complaint.status === "RESOLVED"
                    ? "status-resolved"
                    : "status-open"}>{complaint.status}
            </span></td>

              <td>

                {complaint.status !== "RESOLVED" && (
            <button className="resolve-btn" onClick={() => resolveComplaint(complaint.id)}>
                    Resolve
            </button>)}

              </td>
                    
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Complaints;