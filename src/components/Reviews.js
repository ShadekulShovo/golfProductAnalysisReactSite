import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center my-5">
          {review.map((rev) => (
            <ReviewCard key={rev.id} rev={rev}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
