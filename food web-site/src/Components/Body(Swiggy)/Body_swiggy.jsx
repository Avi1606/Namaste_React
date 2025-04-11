import './Body_swiggy.css';
import RestorentCard from "../Restorent Card (Swiggy)/RestorentCard.jsx";
import {restodata} from "../Utils/Data.jsx";
import {useState} from "react";

const Body_swiggy = () => {
    const[resdata, setResdata] = useState(restodata);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className ="filter-btn"
                    onClick={() => {
                        const fileterdata = restodata.filter(
                            items => items.card.card.info.avgRating > 4
                        );
                        setResdata(fileterdata)
                    }}
                    >
                    Top Rated Restorents
                </button>
            </div>
            <div className="restrorent-card">
                {resdata.map(((restaurant,index) => (
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

export default Body_swiggy;