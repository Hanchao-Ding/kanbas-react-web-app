import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID from the URL
  const { pathname } = useLocation(); // Get the current path
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"]; // Navigation links

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${
            pathname.includes(link) ? "active" : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
