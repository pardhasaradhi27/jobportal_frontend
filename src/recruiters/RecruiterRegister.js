import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import image from "../images/register.png";

export default function RecruiterRegister() {
  const [recruiter, setRecruiter] = useState({
    mobile: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const { mobile, firstName, lastName, email, age, password, confirmPassword } =
    recruiter;

  const handleChange = (e) => {
    setRecruiter({ ...recruiter, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/recruiter",
        recruiter
      );
      if (response.status === 201) {
        alert("Recruiter registered successfully!");
        // Redirect the user to /user page
        navigate("/loginrecruiter"); // This will navigate to the /user route
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#e7e7e5" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label text-black">
                            Mobile
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            className="form-control"
                            placeholder="Mobile"
                            value={mobile}
                            style={{
                              borderWidth: "2px",
                              borderColor: "black",
                              color: "black",
                            }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label text-black">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First Name"
                            value={firstName}
                            style={{
                              borderWidth: "2px",
                              borderColor: "black",
                              color: "black",
                            }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label text-black">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last Name"
                            value={lastName}
                            style={{
                              borderWidth: "2px",
                              borderColor: "black",
                              color: "black",
                            }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label text-black">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            style={{
                              borderWidth: "2px",
                              borderColor: "black",
                              color: "black",
                            }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-calendar fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label text-black">Age</label>
                          <input
                            type="number"
                            name="age"
                            className="form-control"
                            placeholder="Age"
                            value={age}
                            style={{
                              borderWidth: "2px",
                              borderColor: "black",
                              color: "black",
                            }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label text-black">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            style={{
                              borderWidth: "2px",
                              borderColor: "black",
                              color: "black",
                            }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label text-black">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            style={{
                              borderWidth: "2px",
                              borderColor: "black",
                              color: "black",
                            }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          required
                        />
                        <label className="form-check-label">
                          I agree to the <a href="#!">Terms of Service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={image} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
