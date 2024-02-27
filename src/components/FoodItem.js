const FoodItem = (item, foodItemList) => {

    console.log(item.item);


  if(foodItemList === null){
        return (
            <div>
            <div className="shimmer-container">
                <ShimmerCard />
                <ShimmerCard />
                
            </div>
            </div>    
        )
    } 

    else{
        return (
            <div className="styles_container">
                
            <div className="styles_item">
                <div className="styles_detailsContainer">
                <div className="styles_itemName__hLfgz" aria-hidden="true">
                    <h3 className="styles_itemNameText">{item?.item?.card?.info?.name}</h3>
                </div>
                <div className="styles_itemPortionContainer" aria-hidden="true">
                    <span className="styles_price" aria-hidden="true">
            
                    <div >
                        <span className="rupee">₹ {item?.item?.card?.info?.price /100}</span>
                    </div>
                    </span>
                </div>
                <div className="styles_itemDesc">
                {item?.item.card?.info?.description}
                </div>
                </div>
    
                <div className="styles_itemImageContainer">
                <div aria-hidden="true">
                    <button
                    className="styles_itemImage"
                    aria-label="See more information about Veg Biryani"
                    style={{border: "none",bordeRadius: "10px"}}
    
                    
                    >
                    <img
                        alt="Food Item Image"
                        className="styles_itemImage-img"
                        loading="lazy"
                        width="256"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item?.item?.card?.info?.imageId}
                    />
                    </button>
                </div>
                <div className="styles_itemAddButton">
                    <div className="_3L1X9 _211P0 main_buttonInner__z6Jz0 main_button__3gpqi">
                    <div className="_1RPOp">ADD</div>
                    <div className="_3Hy2E">+</div>
                    {/* <div className="_2zAXs _2quy- _4aKW6">0</div> */}
                    </div>
                </div>
                </div>
            </div>
            <div className="styles_divider"></div>
            </div>
        );
    }
};

export default FoodItem;
