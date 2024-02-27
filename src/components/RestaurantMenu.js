import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import ShimmmerCard from "./ShimmerCard"
import { useParams } from 'react-router-dom';

const RestaurantMenau = () => {

   const [foodItemList, setFoodItem] = useState()

   const {resId} = useParams();

    useEffect(() => {
      fetchMenu();
    }, []);

  if(foodItemList === null){
    return (<ShimmmerCard/>)
  }
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.492775&lng=78.38635579999999&restaurantId="+resId
    );
    const jsonMenu = await data.json();
    setFoodItem(jsonMenu);
    // const {
    //     name,
    //     areaName,
    //     avgRatingString,
    //     totalRatingsString,
    //     sla: { lastMileTravelString, message },
    //   } = await jsonMenu.data.cards[2].card.info;
      
    //   console.log({
    //     name,
    //     areaName,
    //     avgRatingString,
    //     totalRatingsString,
    //     lastMileTravelString,
    //     message,
    //   });
    
  
    // const {name, areaName, lastMileTravelString, avgRatingString, totalRatingsString } = jsonMenu.data.cards[2].card.card.info;
    // const info = jsonMenu.data.cards[2].card.card.info;
    // const {name, areaName, avgRatingString, totalRatingsString }  =  jsonMenu.data.cards[2].card.card.info;
  };


  if(foodItemList!==null){

      return (
        
        <div className="rest-menu-component">
            
            {/* foodItemList?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.itemCards */}
          <div className="menu-rest-name-container">
            <div>
              <h1 className="menu-rest-name">{foodItemList?.data?.cards[2]?.card?.card?.info?.name}</h1>
            </div>
          </div>
          <div className="rest-menu-header-container">
            <div className="rest-menu-header-wrapper">
              <div className="RestaurantNameAddress_wrapper">
                <div aria-hidden="true">
                  <p className="RestaurantNameAddress_name__">{foodItemList?.data?.cards[2]?.card?.card?.info?.name}</p>
                  <p className="RestaurantNameAddress_cuisines">{(foodItemList?.data?.cards[2]?.card?.card?.info?.cuisines).join(", ")}</p>
                </div>
                <div className="RestaurantNameAddress_areaWrapper">
                  <p className="RestaurantNameAddress_area" aria-hidden="true">
                    {foodItemList?.data?.cards[2]?.card?.card?.info?.areaName}
                  </p>
                  <p className="RestaurantNameAddress_area_km" aria-hidden="true">
                  {foodItemList?.data?.cards[2]?.card?.card?.info?.sla?.lastMileTravelString}
                  </p>
                </div>
              </div>
              <button
                className="RestaurantRatings_wrapper"
                data-testid="restaurant-ratings-header"
                aria-hidden="true"
              >
                <span className="RestaurantRatings_avgRating" aria-hidden="true">
                  <span className="icon-star" />
                  <span>{foodItemList?.data?.cards[2]?.card?.card?.info?.avgRatingString}</span>
                </span>
                <span className="RestaurantRatings_totalRatings" aria-hidden="true">
                  {foodItemList?.data?.cards[2]?.card?.card?.info?.totalRatingsString}
                </span>
              </button>
            </div>
            <ul>
              <li className="RestaurantMessage_wrapper">
                {/* <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info"
                  alt="DISTANCE_FEE_NON_FOOD_LM"
                  className="RestaurantMessage_icon__1qCvu"
                  aria-hidden="true"
                ></img> */}
                <span className="RestaurantMessage_text" aria-hidden="true">
                {foodItemList?.data?.cards[2]?.card?.card?.info?.feeDetails?.message}
                </span>

              </li>
            </ul>
            <hr className="RestaurantHeader_dottedSeparator" aria-hidden="true"></hr>
            <div className="RestaurantHeader_marginBottom" aria-hidden="true">
              <ul className="RestaurantTimeCost_wrapper">
                <li className="RestaurantTimeCost_item">
                  <svg
                    className="RestaurantTimeCost_icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <circle
                      r="8.35"
                      transform="matrix(-1 0 0 1 9 9)"
                      stroke="#3E4152"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                      fill="#3E4152"
                    />
                  </svg>
                  <span>{foodItemList?.data?.cards[2]?.card?.card?.info?.sla?.slaString}</span>
                </li>
                <li className="RestaurantTimeCost_item">
                  <svg
                    className="RestaurantTimeCost_icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <circle
                      cx="9"
                      cy="9"
                      r="8.25"
                      stroke="#3E4152"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                      fill="#3E4152"
                    />
                  </svg>
                  <span>{foodItemList?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="styles_divider"></div>
          </div>
            <div className="menu-cat">
                <div className="menu-item-container">
                    <button
                    className="styles_header"
                    data-cy="recommended-open"
                    aria-label="Category: Recommended, 
                        17 items available"
                    aria-expanded="true"
                    data-role="category-heading"
                    >
                    <h3 className="styles_headerNestedTitle__1PFSM">
                        <span aria-hidden="true">Recommended</span>
                    </h3>
                    <span className="icon-downArrow styles_open__3WxOr" aria-hidden="true" />
                    </button>
    
                    
                </div>
    
                <div>{
                        foodItemList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => (

                            <FoodItem key={item.card.info.id} item={item} foodItemList={foodItemList}/>
                        ))
                            
                    }
                
                </div>
                <div className="main-border"> </div>
            </div>
        </div>
      );
  }
};

export default RestaurantMenau;
