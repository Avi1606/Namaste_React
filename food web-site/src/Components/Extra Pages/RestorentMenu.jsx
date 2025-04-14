import {useEffect, useState} from "react";


const RestorentMenu = () =>{

    const[resInfo , setResInfo] = useState({})


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.450876021041882&lng=77.58510968186796&restaurantId=642963&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        setResInfo(json.data.cards[2].card.card.info);
    }

    return (
        <div className="RestorentMenu">
            <div>
                <h1>{resInfo.name}</h1>
                <h3>Food Menu</h3>
            </div>
            <div>
                <ul>
                    <li>Burger</li>
                    <li>Veg Thali</li>
                    <li>Dal-Rice</li>
                </ul>
            </div>
        </div>
    );
}

export default RestorentMenu;