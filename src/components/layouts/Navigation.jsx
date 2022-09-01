import { Link, NavLink } from "react-router-dom";
import useToggler from "../../hooks/useToggler";

function Navigation({ user }) {
    const { toggle, toggled } = useToggler();
    const styleCss = {
        width: '40px',
        height: '40px'
    }

    function onClick(e) {
        e.preventDefault();
        if (toggle) {
            toggled();
        }
        return true
    }
    return (
        <nav className="navbar bg-secondary navbar-dark">
            <Link to="/" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>Media Box</h3>
            </Link>
            {user ? (
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src={user?.avatar} alt="" style={styleCss} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">{user?.email}</h6>
                        <span>{user?.roles[0]}</span>
                    </div>
                </div>
            ) : null}
            <div className="navbar-nav w-100">
                <NavLink to="/dashboard" className="nav-item nav-link">
                    <i className="fa fa-tachometer-alt me-2"></i>Dashboard
                </NavLink>
                <NavLink to="/music" className="nav-item nav-link">
                    <i className="fa fa-music me-2"></i>Music Box
                </NavLink>
                <NavLink to="/social" className="nav-item nav-link">
                    <i className="fa fa-share me-2"></i>Social Box
                </NavLink>
            </div>
        </nav>
    )
}

export default Navigation