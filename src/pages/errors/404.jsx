import React  from 'react'
import { Link } from "react-router-dom";

function Error404() {
    //console.log(Location);
    return (
        <div className="container-fluid position-relative d-flex p-0 pt-5">
            <div className="container-fluid">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-md-6 text-center p-4">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1 fw-bold color-white">404</h1>
                        <h1 className="mb-4 color-white">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website!
                            Maybe go to our home page or try to use a search?</p>
                        <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404