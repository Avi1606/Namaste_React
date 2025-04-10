import './Body_swiggy.css';
import RestorentCard from "../Restorent Card (Swiggy)/RestorentCard.jsx";

import {restodata} from "../Utils/Data.jsx";

const body_swiggy = () => {
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="restrorent-card">
                {restodata.map(((restaurant,index) => (
                    <RestorentCard
                        key={index}
                        resName={restaurant.card.card.info.name}
                        resCuisines={restaurant.card.card.info.cuisines}
                        resRating={restaurant.card.card.info.avgRatingString}
                        imgUrl={restaurant.card.card.info.cloudinaryImageId}
                        resDeliveryTime={restaurant.card.card.info.sla.slaString}
                    />
                )))}
            </div>
        </div>
    );
};

export default body_swiggy;