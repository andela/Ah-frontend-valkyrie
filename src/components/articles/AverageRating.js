import React from "react";
import Rating from "react-rating";

export const AverageRating = (avgRate) => {
  let rate = 0;
  if (avgRate.avgRate !== null) {
    rate = avgRate.avgRate;
  }
  return (
    <div>
      <Rating
        initialRating={0}
        emptySymbol={<i className="far fa-star rate-star" />}
        fullSymbol={<i className="fas fa-star rate-star" />}
        placeholderSymbol={<i className="fas fa-star rate-star" />}
        placeholderRating={rate}
        quiet
        readonly
        data-test="component-average-rating"
      />
    </div>
  );
};

export default AverageRating;
