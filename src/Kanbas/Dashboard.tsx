import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ paddingLeft: "130px" }}> {/* Padding to maintain space from the sidebar */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (24)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 g-4"> {/* Adjusts the number of columns */}
          {[...Array(7)].map((_, index) => (
            <div key={index} className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "30px" }}>
              <div 
                className="card rounded-3 overflow-hidden" 
                style={{ backgroundColor: '#007bff', color: 'white' }} // Background color for the card
              >
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-light"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <img 
                    src="/images/reactjs.jpg" 
                    width="100%" 
                    height={160} 
                    alt={`Course ${index + 1}`} 
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                    <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                    <button className="btn btn-light"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
