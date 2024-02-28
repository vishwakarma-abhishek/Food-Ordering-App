import FoodItem from "./FoodItem";
import ShimmerCard from "./ShimmerCard";

const MenuCategory = (foodItemList) =>{

    if(!foodItemList){
        return(<ShimmerCard />);
    }
    

    return(
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

        <div>{console.log(foodItemList)}
            {
                foodItemList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => (
                    <FoodItem key={item.card.info.id} item={item} foodItemList={foodItemList}/>
                ))                   
            }
        </div>
        <div className="main-border"> </div>
    </div>);
}


export default MenuCategory;