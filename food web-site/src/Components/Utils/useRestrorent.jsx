import {useEffect, useState} from "react";

const useRestorent = () => {
    const [resInfo, setResInfo] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.450876021041882&lng=77.58510968186796&restaurantId=642963&catalog_qa=undefined&submitAction=ENTER");

            const json = await data.json(); // Fixed typo: daa → data
            setResInfo(json.data.cards[2].card.card.info);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };

    return resInfo; // Return the state so it can be used in components
};

export default useRestorent;