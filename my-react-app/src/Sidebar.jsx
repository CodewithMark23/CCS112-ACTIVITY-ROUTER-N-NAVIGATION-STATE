import { NavLink } from "react-router-dom";

function Sidebar() {
    // Helper to apply correct classes based on active state
    const navLinkClass = ({ isActive }) =>
        isActive ? "nav-link active" : "nav-link text-white";

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100" style={{ width: "250px" }}>
            <NavLink
                to="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <span className="fs-4">Tian's Portfolio</span>
            </NavLink>

            <hr />

            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to="/" end className={navLinkClass}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={navLinkClass}>
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className={navLinkClass}>
                        Contact
                    </NavLink>
                </li>
            </ul>

            <hr />

            <NavLink to="/profile" className="text-white text-decoration-none">
                Tian's Profile
            </NavLink>
        </div>
    );
}

export default Sidebar;