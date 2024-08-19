import { useState, useEffect } from "react";

const useFetchResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=690390"
    );
    const json = await data.json();
    setResInfo(json?.data);
  }

  return resInfo;
};

export default useFetchResMenu;
