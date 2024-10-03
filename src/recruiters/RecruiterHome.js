import React from "react";
import { useNavigate } from "react-router-dom";
import recruiterhome from "../images/recruiterhome.jpg";

export default function RecruiterHome() {
  const navigate = useNavigate(); // Initialize useNavigate to handle navigation

  const handleLogout = () => {
    // Logic to handle logout, like clearing local storage or calling API
    localStorage.removeItem("id"); // Clear stored recruiter id, for example
    navigate("/"); // Redirect to the login page
  };

  return (
    <>
      <style>
        {`
          .custom-navbar {
            background-color: #5f84de !important; /* Ensure the background color is applied */
          }
          .custom-navbar .nav-link, 
          .custom-navbar .navbar-brand {
            color: #fff !important; /* Ensure the text color is white */
          }
        `}
      </style>
      {/* Navbar */}
      <div
        style={{
          backgroundImage: `url(${recruiterhome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/recruiter">
              Recruiter Dashboard
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                {/* Applications button */}
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => navigate("/recruiter/applications")}
                  >
                    Applications
                  </button>
                </li>
                {/* Add Job button */}
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => navigate("/recruiter/addjob")}
                  >
                    Add Job
                  </button>
                </li>
              </ul>
              {/* Logout button on the right side */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Main content */}
        <div className="container my-5">
          <h2 className="text-center mb-4">Recruiter Dashboard</h2>
          <div className="text-center">
            {/* <button
              className="btn btn-primary mx-3"
              onClick={() => navigate("/recruiter/applications")}
            >
              Applications
            </button>
            <button
              className="btn btn-secondary mx-3"
              onClick={() => navigate("/recruiter/addjob")}
            >
              Add Job
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
