import React from "react";


const Get_to_know = () => {
    return (
        <>
            <section className="get_to_know">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require('./new_get_know2.png')} alt="logo" />
                        </div>
                        <div className="col-md-6">
                                <h1>
                                    Get to know Hadi
                                </h1>
                                <p>
                                    Meet our mascot, Hadi. Hadi is your digital leader and will lead you through specially structured computer short courses that will not only enhance your IT skills but will also help you navigate efficiency through your career path.
                                    Hadi’s mission is to empower the country's youth with the strength of modern skills so they can have equal opportunities to excel in their careers as anyone else in the world.
                                    So join hands with Hadi today, and unlock the door to many shiny prospects in this modern digital world.
                                </p>
                                <button>
                                    Get To Know Hadi Better
                                </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Get_to_know;

