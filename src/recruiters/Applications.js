import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const handleBack = () => {
    // Logic to handle logout, like clearing local storage or calling API
    // Clear stored recruiter id, for example
    navigate("/recruiter"); // Redirect to the login page
  };
  useEffect(() => {
    const fetchApplications = async () => {
      const recruiterId = localStorage.getItem("id"); // Retrieve recruiter ID from localStorage

      if (!recruiterId) {
        console.log(recruiterId);
        setError("Recruiter not logged in");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/applications/${recruiterId}` // Your API endpoint
        );
        console.log(response.data);
        setApplications(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch applications");
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
        <div className="container-fluid">
          {/* Logout button on the right side */}
          <ul className="navbar-nav ms-left">
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleBack}>
                Back
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-5">
        {/* Navbar with Back Button */}

        <h2 className="text-center mb-4">Applications for Your Jobs</h2>
        {applications.length === 0 ? (
          <div className="alert alert-info">
            No applications found for your jobs.
          </div>
        ) : (
          <div className="card">
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Applicant Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Age</th>
                    <th>Job Title</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td>
                        {application.firstName} {application.lastName}
                      </td>
                      <td>{application.email}</td>
                      <td>{application.mobile}</td>
                      <td>{application.age}</td>
                      <td>{application.jobName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
