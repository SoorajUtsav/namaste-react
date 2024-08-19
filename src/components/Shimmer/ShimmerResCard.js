import React from "react";
import "./index.scss"; // Import the CSS file

const RestaurantCard = () => {
  return (
    <div className="restaurant-card shimmer">
      <div className="shimmer-restaurant-image"></div>
      <h2 className="shimmer-title"></h2>
      <p className="shimmer-para"></p>
      <p className="shimmer-para"></p> <p className="shimmer-para"></p>
    </div>
  );
};

const ShimmerCards = () => {
  return (
    <div className="card-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

export default ShimmerCards;
