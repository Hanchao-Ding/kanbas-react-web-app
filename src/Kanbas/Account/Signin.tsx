import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4">
      <h3>Sign in</h3>
      <input className="form-control mb-2" placeholder="username" />
      <input className="form-control mb-3" placeholder="password" type="password" />
      <Link 
        id="wd-signin-btn"
        to="/Kanbas/Dashboard" 
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Link>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="btn btn-link">
        Sign up
      </Link>
    </div>
  );
}
