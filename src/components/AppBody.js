import restList from "../util/mockData";
import RestaurentCard from "./RestaurentCard";

const AppBody = () => {
  return (
    <div className="main-container">
      <main>
        <div className="res-card-container">
          <div className="res-container">
            {restList.map((restaurant) => (
              <RestaurentCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppBody;
