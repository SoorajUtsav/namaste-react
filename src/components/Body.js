import React, { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList/RestaurantList";
import ShimmerCards from "./Shimmer/ShimmerResCard";

const Body = () => {
  const [resList, setResList] = useState([]);
  const SWIGGY_ENDPOINT =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const handleFetch = async () => {
    const res = await fetch(SWIGGY_ENDPOINT);
    const data = await res.json();
    setResList(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      {resList.length === 0 ? (
        <ShimmerCards />
      ) : (
        <RestaurantList resList={resList} />
      )}
    </div>
  );
};

export default Body;
