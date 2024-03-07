import { useEffect, useState } from "react";

const useOnlineStatus =() =>{

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{

        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })
    },[])
    
    return useOnlineStatus;
}

export default useOnlineStatus;