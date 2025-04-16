import './Body_swiggy.css';
import RestorentCard from "../Restorent Card (Swiggy)/RestorentCard.jsx";
import {restodata} from "../Utils/Data.jsx";
import {useEffect, useState} from "react";
import useOnlineStatus from "../onlineStatus/useOnlineStatus.jsx";
import OfflinePage from "../OnlinePage/OfflinePage.jsx";

const Body_swiggy = () => {
    const [resdata, setResdata] = useState(restodata);
    const [search, setSearch] = useState("");
    const [filterdata, setFilterdata] = useState(restodata);

    useEffect(() => {
        setFilterdata(resdata);
    }, [resdata]);

    if (restodata.length === 0) {
        return <h2>Loading...</h2>;
    }

    const onlinestatus = useOnlineStatus();

    if(onlinestatus === false) return (<OfflinePage />);

    return (
        <div className="body">
            <div className="filter-search-container">
                <div className="filter">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            const fileterdata = restodata.filter(
                                items => items.card.card.info.avgRating > 4
                            );
                            setFilterdata(fileterdata)
                        }}
                    >
                        Top Rated Restorents
                    </button>
                </div>
                <div className="filter-search">
                    <input
                        type="text"
                        className="search-bar"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search restaurants"
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filtered = restodata.filter(
                                items => items.card.card.info.name.toLowerCase().includes(search.toLowerCase())
                            )
                            setFilterdata(filtered);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="restrorent-card">
                {filterdata.map(((restaurant, index) => (
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