import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");

  const handleSignup = async () => {

    try {

      const response = await API.post(
        "/auth/signup",
        {
          name,
          email,
          password,
          role
        }
      );

      alert(response.data);

      navigate("/");

    } catch (error) {

      alert("Signup Failed");

    }
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>Signup</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >
          <option value="ADMIN">
            ADMIN
          </option>

          <option value="STUDENT">
            STUDENT
          </option>

          <option value="WARDEN">
            WARDEN
          </option>
        </select>

        <button onClick={handleSignup}>
          Signup
        </button>

      </div>

    </div>
  );
}

export default Signup;