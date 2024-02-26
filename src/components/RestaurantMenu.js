import { useEffect } from "react";

const RestaurantMenau = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=3241"
    );
    const jsonMenu = await data.json();
    console.log(jsonMenu);
  };

  return (
    <div className="rest-menu-component">
      <div className="menu-rest-name-container">
        <div>
          <h1 className="menu-rest-name">Srikanya</h1>
        </div>
      </div>
      <div class="rest-menu-header-container">
        <div class="rest-menu-header-wrapper">
          <div class="RestaurantNameAddress_wrapper">
            <div aria-hidden="true">
              <p class="RestaurantNameAddress_name__">Srikanya</p>
              <p class="RestaurantNameAddress_cuisines">Biryani, Andhra</p>
            </div>
            <div class="RestaurantNameAddress_areaWrapper">
              <p class="RestaurantNameAddress_area" aria-hidden="true">
                Hanuman Nagar
              </p>
              <p class="RestaurantNameAddress_area_km" aria-hidden="true">
                5.5 km
              </p>
            </div>
          </div>
          <button
            class="RestaurantRatings_wrapper"
            data-testid="restaurant-ratings-header"
            aria-hidden="true"
          >
            <span class="RestaurantRatings_avgRating" aria-hidden="true">
              <span class="icon-star" />
              <span>4.1</span>
            </span>
            <span class="RestaurantRatings_totalRatings" aria-hidden="true">
              10K+ ratings
            </span>
          </button>
        </div>
        <ul>
          <li class="RestaurantMessage_wrapper">
            {/* <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info"
              alt="DISTANCE_FEE_NON_FOOD_LM"
              class="RestaurantMessage_icon__1qCvu"
              aria-hidden="true"
            ></img> */}
            <span class="RestaurantMessage_text" aria-hidden="true">
              Far (5.5 kms) | Additional delivery fee will apply
            </span>
            <span class="ScreenReaderOnly_screenReaderOnly" tabindex="0">
              Far (5.5 kms) | Additional delivery fee will apply
            </span>
          </li>
        </ul>
        <hr class="RestaurantHeader_dottedSeparator" aria-hidden="true"></hr>
        <div class="RestaurantHeader_marginBottom" aria-hidden="true">
          <ul class="RestaurantTimeCost_wrapper">
            <li class="RestaurantTimeCost_item">
              <svg
                class="RestaurantTimeCost_icon"
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
                  stroke-width="1.3"
                />
                <path
                  d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                  fill="#3E4152"
                />
              </svg>
              <span>25-30 MINS</span>
            </li>
            <li class="RestaurantTimeCost_item">
              <svg
                class="RestaurantTimeCost_icon"
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
                  stroke-width="1.5"
                />
                <path
                  d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                  fill="#3E4152"
                />
              </svg>
              <span>₹400 for two</span>
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
                class="styles_header"
                data-cy="recommended-open"
                aria-label="Category: Recommended, 
                    17 items available"
                aria-expanded="true"
                data-role="category-heading"
                >
                <h3 class="styles_headerNestedTitle__1PFSM">
                    <span aria-hidden="true">Recommended (17)</span>
                </h3>
                <span class="icon-downArrow styles_open__3WxOr" aria-hidden="true" />
                </button>
            </div>
            <div className="main-border"> </div>
        </div>
    </div>
  );
};

export default RestaurantMenau;
