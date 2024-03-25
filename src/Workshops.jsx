import React from "react";

const Workshops = () => {
    return (
        <>
            <section className="workshops">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require('./new_home_page.jpg')} alt="logo" />
                        </div>
                        <div className="col-md-6">
                        <div className="faq_wrapper">
                            <h1>
                                Join our Free Workshops
                            </h1>
                            <p>
                                Join our free online workshops on a variety of topics to gain valuable insights and practical knowledge from the comfort of your own home. Our team of experts will guide you through interactive sessions, 
                                ensuring you leave with a deeper understanding of the subject matter. Register now to secure your spot!
                            </p>
                            <button>
                               See All
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>

    );
}

export default Workshops;