import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import Login from "./Login";
import restListMock from "../util/mockData"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const AppBody = () => {
  const [listOfRestaurants, SetListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]) ;



  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fechData();
  }, []);

  
  const fechData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.492775&lng=78.38635579999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIS"
      );
      const jsonData = await data.json();
          
      SetListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (err) {
      console.log("caought error :" + err.message);
      console.log("error while accesing live data");
      SetListOfRestaurant(restListMock)
      setFilteredList(restListMock)
      
    }
    // finally{
    //   console.log(" finally caought error (finally block ) :");
    // }
  };


    

  if (listOfRestaurants.length === 0) {
    return (
      <div>
        <div className="shimmer-container">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
      </div>
    );
  }

  return (
    
    

    <div className="main-container">
      <main>
        <div className="filter">

          <div className="input-box-wraper">
            <div className="input-container">
                <input  type="text" className="search-input" value={searchText} placeholder="Search for Food or Restaurant" onChange={(e) => {setSearchText(e.target.value)} }/>
            </div>
            <div className="search-btn-container" >
              <button className="search-btn" onClick={()=> {
                console.log(searchText)
                console.log(listOfRestaurants.map((rest) => rest.info.cuisines.join(", ")));
                const filteredRest = listOfRestaurants.filter((restaurant) => restaurant?.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredList(filteredRest);
                
                
                }
                } >Search</button>
            </div>
          </div>  
             
          <button
            className="filter-btn"
            id="1212"
            onClick={() => {
              console.log("button clicked-1!");
              const filterRest = listOfRestaurants.filter(
                (restaurant) => restaurant?.info?.avgRating > 4.2
              );
              console.log(filterRest);
              setFilteredList(filterRest);
            }}
          >
            Top Rated Restaurents
          </button>

          <button
            className="filter-btn"
            id="1213"
            onClick={() => {
              console.log("button clicked -2!");
              listOfRestaurants.sort(
                (a, b) => a?.info?.avgRating - b?.info?.avgRating
              );
              setFilteredList([...listOfRestaurants]);
            }}
          >
            Sort by rating: Low to High
          </button>
        </div>
        <div className="res-card-container">
          <div className="res-container">
            {filteredList.map((restaurant) => (
              <Link to={"/restaurants/"+restaurant?.info?.id}><RestaurentCard
                key={restaurant?.info?.id}
                resData={restaurant?.info}
              /></Link>
            ))}
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default AppBody;
