import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCards from "../Shimmer/ShimmerResCard";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [menuData, setMenuData] = useState([]);
  const MENU_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

  useEffect(() => {
    handleFetchMenu();
  }, []);

  async function handleFetchMenu() {
    const data = await fetch(MENU_API);
    const json = await data.json();
    setMenuData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
        ?.card?.itemCards
    );
  }

  if (!menuData.length) {
    return <ShimmerCards />;
  }

  return (
    <div className="px-32 py-8">
      <h1 className="font-bold text-2xl text-blue-600 p-10">Menu</h1>
      {menuData.map((item) => (
        <div className="flex gap-3 p-3" key={item?.id}>
          <div className="font-bold text-2xl text-amber-950">
            {item?.card?.info?.name}
          </div>
          <button className="rounded-md bg-green-200 px-2">+Add</button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
