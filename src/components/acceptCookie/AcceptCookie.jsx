import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { setAcceptCookie } from '../../app/slices/appSlice'

const ExportComponent = () => {
    const { acceptCookieExist } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const closeRef = useRef();
    const acceptRef = useRef();

    useEffect(() => {
        if (!acceptCookieExist) {
            mouseOver()
        }
    }, [acceptCookieExist]);

    function mouseOver(e) {
        if (acceptCookieExist) {
            closeRef.current.removeAttribute('href');
            acceptRef.current.removeAttribute('href');
        }
    }

    async function handleOnClick(e, value) {
        e.preventDefault();
        dispatch(setAcceptCookie(value));
    }

    return (
        <React.Fragment>
            {!acceptCookieExist ? <div className='cookie-container'>
                    <Link ref={closeRef} to='' onClick={(e) => handleOnClick(e, 0)} className="close-btn" type='button'><p>X</p></Link>
                    <div className='container-fluid d-sm-flex px-2 pb-3 pb-sm-0'>
                        <div className='col-12 col-sm-9'>
                            <h4>We respect the privacy of your information</h4>
                            <p>We use cookies to offer you the best possible website experience. Your cookie preferences will be stored in your browser’s local storage. This includes cookies necessary for the website's operation. Additionally, you can freely decide and change any time whether you accept cookies or choose to opt out of cookies to improve website's performance, as well as cookies used to display content tailored to your interests. Your experience of the site and the services we are able to offer may be impacted if you do not accept all cookies. <Link to='/policy'><span className="policy">See our cookie policy</span></Link></p>
                        </div>
                        <div className='col-12 col-sm-3 d-sm-flex justify-content-sm-center align-items-sm-center'>
                            <Link ref={acceptRef} to='' onMouseOver={mouseOver} onClick={(e) => handleOnClick(e, 1)} className='btn btn-outline-primary align-self-center m-sm-2' type='button'>Accept all cookie</Link>
                        </div>
                    </div>
                </div> : null}
        </React.Fragment>
    )
}

export default ExportComponent