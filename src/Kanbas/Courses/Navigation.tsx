import { Link, useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
    const { cid } = useParams();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"]
    const { pathname } = useLocation();

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link to={`/Kanbas/Courses/${cid}/${link}`} id="wd-course-home-link"
                    className={`list-group-item ${pathname.includes(`${link}`) ? "active" : "text-danger"} border border-0`}> {link} </Link>
            ))}
        </div>
    );
}