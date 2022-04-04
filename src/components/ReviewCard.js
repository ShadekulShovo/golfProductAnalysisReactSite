import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ rev }) => {
  const { name, id, picture, review, rating } = rev;
  return (
    <div>
      <div class="card">
        <img src={picture} class="card-img-top" alt="" />
        <div class="card-body">
          <p class="card-text">Name: {name}</p>
          <p class="card-text"> Review: {review}</p>
          <p class="card-text">Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
