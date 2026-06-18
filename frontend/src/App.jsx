import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import WardenDashboard from "./pages/WardenDashboard";
import Rooms from "./pages/Rooms";
import Students from "./pages/Students";
import LeaveRequests from "./pages/LeaveRequests";
import Complaints from "./pages/Complaints";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/rooms" element={<Rooms />} />

        <Route path="/students" element={<Students />} />

        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/warden" element={<WardenDashboard />} />

        <Route path="/leave-requests" element={<LeaveRequests />} />

        <Route path="/complaints" element={<Complaints />} />

        <Route path="/warden" element={<WardenDashboard />} />

        <Route path="/signup"element={<Signup />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;