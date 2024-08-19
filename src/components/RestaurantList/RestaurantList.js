import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const RestaurantList = ({ resList }) => {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      {resList.map((item) => (
        <div
          key={item.info.id}
          className="flex-grow flex-shrink basis-[calc(25%-40px)] m-2 bg-white border border-gray-300 rounded-lg p-5 shadow-md"
          onClick={() => {
            navigate(`/restaurant/${item.info.id}`);
          }}
        >
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} // Update with your cloud name
            alt={item.info.name}
            className="restaurant-image"
          />
          <h3>{item.info.name}</h3>
          <p>Locality: {item.info.locality}</p>
          <p>Area: {item.info.areaName}</p>
          <p>Cost for Two: {item.info.costForTwo}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
