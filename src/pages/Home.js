import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../images/home.jpg"; // Import the image

function Home() {
  const navigate = useNavigate();

  // Function to handle navigation when buttons are clicked
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${homeImage})`, // Adjust the path as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="bg-light min-vh-100 d-flex flex-column"
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            Job Portal
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleNavigation("/admin")}
                >
                  Admin Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleNavigation("/loginuser")}
                >
                  User Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-warning"
                  onClick={() => handleNavigation("/loginrecruiter")}
                >
                  Recruiter Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5 flex-grow-1">
        <div className="text-center">
          <h1 className="display-4 fw-bold text-primary">
            Welcome to the Job Portal
          </h1>
          <p className="lead text-secondary">
            Your one-stop solution for job opportunities.
          </p>
          <p className="text-muted">
            Select a login option from the top-right to continue.
          </p>

          {/* New Paragraph About Job Portal */}
          <p className="mt-4 text-secondary">
            The Online Job Portal is a comprehensive platform designed to bridge
            the gap between job seekers and employers. Whether you're a recent
            graduate searching for your first job or an experienced professional
            looking for new opportunities, our portal provides a seamless
            experience for finding your next career move. Employers can post job
            listings, review applicant profiles, and connect with top talent
            across various industries. Job seekers can explore a wide range of
            opportunities, apply directly through the platform, and keep track
            of their applications. With advanced search filters, personalized
            job recommendations, and an intuitive interface, the Online Job
            Portal simplifies the job search and hiring process for everyone.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center py-3 mt-auto shadow-sm">
        <p className="mb-0 text-muted">
          &copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
