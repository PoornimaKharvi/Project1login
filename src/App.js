import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleButton = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "p" && email === "b@g.com" && password === "Ab123@#$") {
      console.log("Login Successfull");
    } else {
      console.log("Invalid credentials");
    }
  };
  return (
    <div className="wrapper bg-dark d-flex justify-content-center align-items-center w-100">
      <div className="login">
        <h1 className="mb-3">Login Form </h1>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="mb-2 form-group was-validated">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              name="username"
              required
              autoComplete="false"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-2 form-group was-validated">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              autoComplete="false"
              className="form-control"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-2 form-group was-validated">
            <label className="form-label">Password</label>
            <InputGroup>
              <FormControl
                autoComplete="false"
                value={password}
                name="password"
                type={showPassword ? "text" : "password"}
                className="form-control"
                minLength="6" // Minimum password length
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$" // Password pattern
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              ></FormControl>
              <Button onClick={toggleButton}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
              <div className="invalid-feedback">
                Please enter a valid password with at least 6 characters,
                including at least one uppercase letter, one lowercase letter,
                and one number.
              </div>
            </InputGroup>
          </div>
        </form>
        <button className="btn btn-success w-100">Login</button>
      </div>
    </div>
  );
}

export default App;
