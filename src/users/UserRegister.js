import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
// import AOS from "aos";
// import "aos/dist/aos.css";
import image from "../images/register2.png";

export default function UserRegister() {
  const [user, setUser] = useState({
    mobile: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    student: "no", // Default to 'no' for student status
    college: "", // College details input
    linkedinLink: "", // LinkedIn input
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const {
    mobile,
    firstName,
    lastName,
    email,
    age,
    password,
    confirmPassword,
    student,
    college,
    linkedinLink,
  } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user", user);
      if (response.status === 201) {
        alert("User registered successfully!");
        // Redirect the user to /user page
        navigate("/loginuser"); // This will navigate to the /user route
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
                            style={{ borderWidth: "2px", borderColor: "black" }}
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
                            style={{ borderWidth: "2px", borderColor: "black" }}
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
                            style={{ borderWidth: "2px", borderColor: "black" }}
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
                            style={{ borderWidth: "2px", borderColor: "black" }}
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
                            style={{ borderWidth: "2px", borderColor: "black" }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-linkedin fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label text-black">
                            Linkedin URL
                          </label>
                          <input
                            type="url"
                            name="linkedinLink"
                            className="form-control"
                            placeholder="LinkedIn Profile Link"
                            value={linkedinLink}
                            style={{ borderWidth: "2px", borderColor: "black" }}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <label className="form-check-label me-3">
                          Are you a student?
                        </label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="student"
                            value="yes"
                            checked={student === "yes"}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="student"
                            value="no"
                            checked={student === "no"}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-check-label">No</label>
                        </div>
                      </div>

                      {/* Conditionally Render College Details if Student is 'Yes' */}
                      {student === "yes" && (
                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-university fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label text-black">
                              College
                            </label>
                            <input
                              type="text"
                              name="college"
                              className="form-control"
                              placeholder="College Name"
                              value={college}
                              style={{
                                borderWidth: "2px",
                                borderColor: "black",
                              }}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      )}
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
                            style={{ borderWidth: "2px", borderColor: "black" }}
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
                            style={{ borderWidth: "2px", borderColor: "black" }}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Student Checkbox */}

                      {/* LinkedIn Input */}

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
