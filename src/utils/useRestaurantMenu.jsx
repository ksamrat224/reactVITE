import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=> {

    const[resInfo,setResInfo]= useState(null);

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        // try {
        //         const data = await fetch(MENU_API + resId);
        //         const json = await data.json();
        //         console.log("API Response:", json);
        //         setResInfo(json.data);
        //       } catch (error) {
        //         console.error("Error fetching menu:", error);
        //       }
          const data = await fetch (MENU_API+resId);

          const json = await data.json();
          setResInfo(json.data);
    };
    return resInfo;
};
export default useRestaurantMenu;