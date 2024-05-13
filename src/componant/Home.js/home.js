import React, { Fragment } from "react";
import Header from "./Header";
import "./home.css";
import logo from "./breakfast_scrambled_eggs_coffee_209843_300x168.jpg";
const Home = () => {
    return (
        <Fragment>
            <Header />
            <section className="numbers">
                <div className="continar">
                    <div className="row">
                        <div className="col-md-3">
                            <h2 >1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div> <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="continer">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={logo} title="prideimg" />
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero nobis dolorum, unde nesciunt veniam ipsam minima alias dolores ad saepe commodi nihil dignissimos quasi illum sequi quae sit tempora.</p>
                            <button><a href="#">learn more</a></button>
                            </div>
                            <div className="col-md-6">
                            
                            </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Home;