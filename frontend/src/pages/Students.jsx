import "./Students.css";
import { useEffect, useState } from "react";
import API from "../services/api";

function Students() {

  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [registrationNo, setRegistrationNo] = useState("");
  const [userId, setUserId] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    loadStudents();
    loadUsers();
    loadRooms();
  }, []);

  const loadStudents = async () => {
    const response = await API.get("/student/all");
    setStudents(response.data);
  };

  const loadUsers = async () => {
    const response = await API.get("/user/all");
    setUsers(response.data);
  };

  const loadRooms = async () => {
    const response = await API.get("/admin/rooms");
    setRooms(response.data);
  };

  const addStudent = async () => {

    try {

      const studentData = {
        registrationNo,
        userId: Number(userId),
        roomId: Number(roomId)
      };

      await API.post("/student/add", studentData);

      setRegistrationNo("");
      setUserId("");
      setRoomId("");

      loadStudents();

      alert("Student Added Successfully");

    } catch (error) {
      console.log(error);
      alert("Failed To Add Student");
    }
  };

  return (
    <div className="students-container">

      <h1>👨‍🎓 Students Management</h1>

      <div className="student-form">

        <input
          type="text"
          placeholder="Registration Number"
          value={registrationNo}
          onChange={(e) => setRegistrationNo(e.target.value)}
        />

        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select User</option>

          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.name} ({user.role})
            </option>
          ))}
        </select>

        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        >
          <option value="">Select Room</option>

          {rooms.map((room) => (
            <option
              key={room.id}
              value={room.id}
            >
              {room.roomNumber}
            </option>
          ))}
        </select>

        <button onClick={addStudent}>
          Add Student
        </button>

      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Registration Number</th>
            <th>User ID</th>
            <th>Room ID</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.id}</td>
              <td>{student.registrationNo}</td>
              <td>{student.userId}</td>
              <td>{student.roomId}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Students;