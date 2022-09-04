import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import styles from './cookie.module.css';
import { useAcceptCookie } from '../../contexts/AppContext';

function CookieAlert() {
    const { setAcceptCookie } = useAcceptCookie();
    const closeRef = useRef();
    const acceptRef = useRef();

    useEffect(() => {
        mouseOver()
    }, []);

    function mouseOver(e){
        closeRef.current.removeAttribute('href');
        acceptRef.current.removeAttribute('href');
    }
    return (
        <div className={styles.cookie}>
            <Link ref={closeRef} to='' onClick={(e) => setAcceptCookie(e, 0)} className={styles.closeBtn} type='button'><p>X</p></Link>
            <div className='container-fluid d-sm-flex px-2 pb-3 pb-sm-0'>
                <div className='col-12 col-sm-9'>
                    <h4>We respect the privacy of your information</h4>
                    <p>We use cookies to offer you the best possible website experience. Your cookie preferences will be stored in your browser’s local storage. This includes cookies necessary for the website's operation. Additionally, you can freely decide and change any time whether you accept cookies or choose to opt out of cookies to improve website's performance, as well as cookies used to display content tailored to your interests. Your experience of the site and the services we are able to offer may be impacted if you do not accept all cookies. <Link to='/policy'><span className={styles.policy}>See our cookie policy</span></Link></p>
                </div>
                <div className='col-12 col-sm-3 d-sm-flex justify-content-sm-center align-items-sm-center'>
                    <Link ref={acceptRef} to='' onMouseOver={mouseOver} onClick={setAcceptCookie} className='btn btn-outline-primary align-self-center m-sm-2' type='button'>Accept all cookie</Link>
                </div>
            </div>
        </div>
    )
}

export default CookieAlert