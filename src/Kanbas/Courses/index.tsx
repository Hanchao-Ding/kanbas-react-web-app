import CoursesNavigation from "./Navigation";
import { FaAlignJustify } from 'react-icons/fa';
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams(); // Get the course ID from the URL
  const course = courses.find((course) => course._id === cid); // Find the course with the given ID
  const { pathname } = useLocation(); // Get the current URL path

  // Extract the current view from the URL (e.g., Assignments, Modules, etc.)
  const currentView = pathname.split("/")[4]; 

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course Not Found"} &gt; {currentView}
      </h2>
      <hr />
      <div className="d-flex">
        {/* Left navigation bar */}
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        {/* Right content area */}
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            {/* Add a default redirect or 404 handling */}
            <Route path="*" element={<Navigate to="Home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
