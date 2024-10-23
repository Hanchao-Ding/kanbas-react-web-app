import { useParams, useNavigate } from "react-router"; // Import useParams and useNavigate for navigation
import * as db from "../../Database"; // Import the database
import { useState, useEffect } from "react"; // UseState and useEffect for managing state

// Define the type for the assignment object
interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  untilDate: string;
  course: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Retrieve assignment ID and course ID from URL params
  const [assignment, setAssignment] = useState<Assignment | null>(null); // State for the current assignment, can be null or an assignment object

  const navigate = useNavigate(); // For navigating back to the assignments list

  useEffect(() => {
    // Filter assignments based on the current course ID and find the specific assignment by its ID
    const filteredAssignments = db.assignments.filter((assignment) => assignment.course === cid);
    const selectedAssignment = filteredAssignments.find((assignment) => assignment._id === aid);
    
    setAssignment(selectedAssignment || null); // Set the selected assignment or null
  }, [cid, aid]);

  if (!assignment) {
    return <div>No assignment found for the given course and assignment ID.</div>; // Show message if no assignment is found
  }

  // Handle cancel button to go back to the assignments list
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  // Handle save button (for now, it just logs the current assignment)
  const handleSave = () => {
    console.log("Assignment saved", assignment);
    // Implement save logic here, e.g., sending updates to a server or database
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Title */}
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment.title}
        readOnly
      />
      <br /><br />

      {/* Assignment Description */}
      <label htmlFor="wd-description">Assignment Description</label>
      <textarea id="wd-description" value={assignment.description} readOnly />
      <br />

      <table>
        {/* Points */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={assignment.points} readOnly />
          </td>
        </tr>

        {/* Assignment Group */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select defaultValue="Assignments">
              <option value="Assignments">Assignments</option>
            </select>
          </td>
        </tr>

        {/* Display Grade As */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>

        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select defaultValue="Online">
              <option value="Online">Online</option>
            </select>
            <div>
              Online Entry Options:
              <div>
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>
          </td>
        </tr>

        {/* Assign To */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <div>
              <label>Assign to</label>
              <br />
              <input type="text" value="Everyone" readOnly />
            </div>

            <div>
              <label>Due</label>
              <br />
              <input type="date" id="wd-due-date" value={assignment.dueDate} readOnly />
            </div>

            <div>
              <div>
                <label>Available from</label>
                <br />
                <input type="date" id="wd-available-from" value={assignment.availableDate} readOnly />
              </div>

              <div>
                <label>Until</label>
                <br />
                <input type="date" id="wd-available-until" value={assignment.untilDate} readOnly />
              </div>
            </div>
          </td>
        </tr>

        {/* Cancel and Save Buttons */}
        <tr>
          <td></td>
          <td align="right" colSpan={2}>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
