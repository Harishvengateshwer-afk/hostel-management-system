import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await API.post("/auth/login", {
        email,
        password
      });

      const role = response.data;

      if (role === "ADMIN") {
        navigate("/admin");
      }
      else if (role === "STUDENT") {
        navigate("/student");
      }
      else if (role === "WARDEN") {
        navigate("/warden");
      }
      else {
        alert(role);
      }

    } catch (error) {

      console.log(error);
      alert("Login Failed");

    }
  };

  return (

  <div className="login-container">

    <div className="login-left">

      <div className="login-left-content">

        <h1>Hostel Management System</h1>

        <p>
          Manage students, rooms, complaints,and leave requests from a single platform.</p>
      </div>

    </div>

    <div className="login-right">

      <div className="login-card">

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <button
          className="signup-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

      </div>

    </div>

  </div>

);

  
}

export default Login;