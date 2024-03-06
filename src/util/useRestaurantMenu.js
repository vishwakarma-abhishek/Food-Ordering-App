import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";


const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () =>{
        const response = await fetch(MENU_URL+resId);
        const json = await response.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;