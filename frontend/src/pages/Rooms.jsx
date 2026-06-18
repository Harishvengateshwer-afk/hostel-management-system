import { useEffect, useState } from "react";
import API from "../services/api";
import "./Rooms.css";

function Rooms() {

  const [rooms, setRooms] = useState([]);
  const [roomNumber, setRoomNumber] = useState("");
  const [capacity, setCapacity] = useState("");

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    try {
      const response = await API.get("/admin/rooms");
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addRoom = async () => {
    try {
      await API.post("/admin/add-room", {
        roomNumber,
        capacity
      });

      setRoomNumber("");
      setCapacity("");

      loadRooms();

    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async (id) => {
    try {
      await API.delete(`/admin/room/${id}`);
      loadRooms();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rooms-container">

      <h1>🛏️ Room Management</h1>

      <div className="room-form">

        <input
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />

        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />

        <button onClick={addRoom}>
          Add Room
        </button>

      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Room Number</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.roomNumber}</td>
              <td>{room.capacity}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteRoom(room.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Rooms;