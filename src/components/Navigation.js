import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav
      className="navbar mb-5 is-light px-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand" style={{width: '100%'}}>
        <div className="navbar-start">
            <Link to="/">
              <h3 className="title has-text-weight-bold">News App</h3>
            </Link>
        </div>
        <div className="navbar-end">
            <label className="checkbox pt-3">
            <input type="checkbox" className="mr-1"/>
                Paid user
            </label>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
