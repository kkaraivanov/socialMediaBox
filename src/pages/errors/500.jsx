import React  from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Error500() {
    const { status } = useSelector((state) => state.app);

    return (
        !status ? <div className="container-fluid position-relative d-flex p-0 pt-5">
            <div className="container-fluid">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-md-6 text-center p-4">
                        <h1 className="display-1 fw-bold color-white">500</h1>
                        <h1 className="mb-4 color-white">Server is down</h1>
                        <p className="mb-4">We're sorry for the inconvenience. Come back later.</p>
                    </div>
                </div>
            </div>
        </div> : <Navigate to='/' />
    )
}

export default Error500