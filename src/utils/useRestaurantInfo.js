import { useEffect, useState } from "react";
import { RES_MENU } from "../utils/constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(RES_MENU + resId);
    const json = await response.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantInfo;
