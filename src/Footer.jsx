import React from "react";

const Footer = () => {

    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={require('./logo-new.png')} alt="logo" />
                        </div>
                        <div className="col-md-3">
                            <h2>Menu</h2>
                            <ul>
                                <li>About</li>
                                <li>Programs</li>
                                <li>Workshops</li>
                                <li>How it works ?</li>
                                <li>Contact</li>
                                <li>Blogs</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <h2>Terms</h2>
                            <ul>
                                <li>Privacy & Policy</li>
                                <li>Disclaimer</li>
                                <li>DMCA</li>
                                <li>HTerms And Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );

}

export default Footer;