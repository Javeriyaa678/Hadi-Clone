import React from "react";

const Counter = () => {

    return (
        <>
            <section className="counter">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-3">
                            <div className="counter_items">
                                <h1>
                                    1,000 +
                                </h1>
                                <p>
                                    Live Classes
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter_items">
                                <h1>
                                    20,000 +
                                </h1>
                                <p>
                                    Enrolled Students

                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter_items">
                                <h1>
                                    3,000 +
                                </h1>
                                <p>
                                    Students On Waitlist
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter_items">
                                <h1>
                                    15,000 +
                                </h1>
                                <p>
                                    Queries Answered
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}

export default Counter;