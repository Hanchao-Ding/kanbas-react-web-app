import { MdSearch } from "react-icons/md"; // Importing the search icon
import { useNavigate, useParams } from "react-router"; // Importing useParams to get course ID
import * as db from "../../Database"; // Importing the database
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, editAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams(); // Retrieve the course ID from the URL params
  const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(id));
    }
  };

  // Filter assignments based on the current course ID
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments" className="p-3">
            
      <ul>
        {assignments.map((assignment: any) => (
          <li key={assignment._id}>
            <span>{assignment.title}</span>
            <button onClick={() => dispatch(editAssignment(assignment._id))}>
              Edit
            </button>
            <button onClick={() => handleDelete(assignment._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* Search bar and action buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <input
            type="text"
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
          <span className="input-group-text">
            <MdSearch />
          </span>
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            + Group
          </button>
          <button onClick={() => navigate("/assignments/new")} id="wd-add-assignment" className="btn btn-success">
            + Assignment
          </button>
        </div>
      </div>

      {/* Assignments Title */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS {filteredAssignments.length > 0 ? `(${filteredAssignments.length} found)` : "No Assignments Found"}
      </h3>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-group">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item">
              <a
                className="wd-assignment-link"
                href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </a>
              <br />
              Multiple Modules | Not available until {assignment.availableDate || "N/A"} <br />
              Due {assignment.dueDate || "Not Specified"} | {assignment.points} pts
            </li>
          ))
        ) : (
          <li className="list-group-item">No assignments found for this course.</li>
        )}
      </ul>
    </div>
  );
}
