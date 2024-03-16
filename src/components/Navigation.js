import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav
      className="navbar mb-5 is-light px-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/">
          <h3 className="title has-text-weight-bold">News App</h3>
        </Link>
      </div>
    </nav>
  );
}
export default Navigation;
