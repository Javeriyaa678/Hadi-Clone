import React from "react";
import Logoimg from "./logo-new.png";

const Header = () => {
    return (
        <>
            <header className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <img src={Logoimg} alt="logo" className="logo"/>
                        </div>
                        <div className="col-md-7">
                            <div className="header-nav">
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Programs</li>
                                    <li>Workshops</li>
                                    <li>How It Works?</li>
                                    <li>Blogs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <button>Enroll</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
}

export default Header;