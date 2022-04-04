import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <dir className="col-md-6 d-flex align-items-center">
            <div>
              <h1>We provide the BEST !!!</h1>
              <p>
                We offer the BEST products to our customers at the lowest cost
                possible.
              </p>
              <button
                type="button"
                class="btn btn-outline-success btn-lg fw-bold "
              >
                Learn More
              </button>
            </div>
          </dir>

          <div className="col-md-6 product">
            {/* <img src='./images/product.jpg' alt="" /> */}
            <img
              src="https://media.istockphoto.com/photos/golf-club-iron-picture-id538724679?k=20&m=538724679&s=612x612&w=0&h=ErP5jt4mwxbpG3YlkX9EDaCtiQZKvaOB2ljHdseaba8="
              alt=""
            />
          </div>
        </div>

        <div className=" justify-content-center">
          <h3 className="mb-5 text-center">Customer Revew (3) </h3>

          <div className="d-flex justify-content-center">
            <Link to="/reviews">
              {" "}
              <button type="button" class="btn btn-outline-primary btn-lg">
                {" "}
                See all Reviews
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
