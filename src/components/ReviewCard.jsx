import React from "react";

const ReviewCard = ({ unique_review }) => {
  const { username, review } = unique_review;
  return (
    <div>
      <div className="card w-96 h-72 ms-10 bg-red-600 text-white ">
        <div className="card-body">
          <h2 className="card-title">{username}</h2>
          <p >{review}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
