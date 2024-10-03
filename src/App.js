import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./users/UserLogin";
import AdminLogin from "./admin/AdminLogin";
import UserHome from "./users/UserHome";
import RecruiterHome from "./recruiters/RecruiterHome";
import RecruiterLogin from "./recruiters/RecruiterLogin";
import UserRegister from "./users/UserRegister";
import RecruiterRegister from "./recruiters/RecruiterRegister";
import ViewJob from "./users/ViewJob";
import ApplyJob from "./users/ApplyJob";
import AddJob from "./recruiters/AddJob";
import Applications from "./recruiters/Applications";

function App() {
  return (
    <div className="App">
      {/* Wrap your app with AuthProvider */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/loginuser" element={<UserLogin />} />
          <Route exact path="/loginrecruiter" element={<RecruiterLogin />} />
          <Route exact path="/registeruser" element={<UserRegister />} />
          <Route
            exact
            path="/registerRecruiter"
            element={<RecruiterRegister />}
          />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/user" element={<UserHome />} />
          <Route exact path="/user/job/:id" element={<ViewJob />} />
          <Route exact path="/user/applyjob/:id" element={<ApplyJob />} />
          <Route exact path="/recruiter" element={<RecruiterHome />} />
          <Route exact path="/recruiter/addjob" element={<AddJob />} />
          <Route
            exact
            path="/recruiter/applications"
            element={<Applications />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
