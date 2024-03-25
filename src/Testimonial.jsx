import React from "react";

const Testimonial = () => {
    return (
        <>
            <section className="testimonil">
                <div className="container">
                    <div className="row">
                        <h3>Testimonials</h3>
                        <h1>What students are saying</h1>
                        <div className="row">
                        <div className="col-md-6">
                            <p>
                                Experience is amazing, being at Karachi and connecting with Hadi e learning was super smooth, and the mentor Ms Zahra Mohsin she's got immense knowledge regarding SEO ,
                                her friendly and cooperative nature makes it even more simple and easier to understand, highly recommended ☺️
                            </p>
                            <div className="testimonial_author">
                                <img src={require('./quote (1).png')} />
                            </div>
                            <div>
                                <h3>
                                Robert Hicks
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={require('./testis.png')} alt="testimonial" /> 
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;