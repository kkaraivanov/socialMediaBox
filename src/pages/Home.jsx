import { Link } from "react-router-dom";
import { Spinner } from "../components";

function Home() {
    return (
        <>
            <Html />
        </>
    )
}

const Html = () => {
    return (
        <div id="header" className="header">
            <div className="header-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="h1-large">Creative Social Media</h1>
                            <Link className="btn btn-outline-primary color-white w-25 m-2" type='button' to='/login'>Join</Link>
                        </div>
                    </div>
                </div>
            </div>

            <video autoPlay loop muted id="video-background" poster='assets/images/header-background.jpg' playsInline>
                <source src='assets/images/header-background-video.mp4' type="video/mp4" />
            </video>
        </div>
    )
}

export default Home