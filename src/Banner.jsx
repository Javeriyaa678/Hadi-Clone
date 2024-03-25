import React from "react";
import background from './banner-bg-img.jpg';

const Banner = () => {
    return (
        <>
            <section className="banner_cont" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: '7rem' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>
                                Elevate your skill<br />
                                set with training in <br />
                                futuristic fields.
                            </h1>
                            <p>
                                Transform your future with Free online IT training.
                            </p>
                            <button className="btn_outline">
                                About Us
                            </button>
                            <button className="btn_simple">
                                Programs
                            </button>
                        </div>
                        <div className="col-md-6">
                            <img src={require('./skills.png')} alt="logo" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}


{/* <p style={{color:'red', fontSize:'10px'}} >jhddsajhsjdhfjs</p> */ }
{/* <h5 style="color:red; fontweight:400">kjdsdkfds</h5> */ }
export default Banner;