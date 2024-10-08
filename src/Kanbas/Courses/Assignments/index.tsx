import { MdSearch } from "react-icons/md"; // Importing the search icon

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
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
          <button id="wd-add-assignment" className="btn btn-success">
            + Assignment
          </button>
        </div>
      </div>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button className="btn btn-link p-0">+</button>
      </h3>
      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <br />
          Multiple Modules | Not available until May 6 at 12:00 am <br />
          Due May 13 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/234">
            A2 - CSS + BOOTSTRAP
          </a>
          <br />
          Multiple Modules | Not available until May 13 at 12:00 am <br />
          Due May 20 at 11:59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/345">
            A3 - JAVASCRIPT + REACT
          </a>
          <br />
          Multiple Modules | Not available until May 20 at 12:00 am <br />
          Due May 27 at 11:59 pm | 100 pts
        </li>
      </ul>
    </div>
  );
}
