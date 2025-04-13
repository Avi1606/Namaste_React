import './Body_swiggy.css';
import RestorentCard from "../Restorent Card (Swiggy)/RestorentCard.jsx";
import {restodata} from "../Utils/Data.jsx";
import {useEffect, useState} from "react";

const Body_swiggy = () => {
    const[resdata, setResdata] = useState(restodata);

    // useEffect(() => {
    //     fetchData();
    // }, []);
    //
    // const fetchData = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.450876021041882&lng=77.58510968186796&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //
    //     const json = await data.json();
    //     // console.log();
    //     setResdata(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // }

    if (restodata.length === 0) {
        return <h2>Loading...</h2>;
    }

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