import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Counters from "./Counters";
import Get_to_know from "./Get_to_know";
import Workshops from "./Workshops";
import Enroll from "./Enroll";
import Testimonial from "./Testimonial";

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
const App = () => {
    return (
        <>
            <Header />
            <Banner />
            <Counters />
            <Get_to_know />
            <Workshops />
            <Enroll />
            <Testimonial />
           
        </>

    );
}

export default App;