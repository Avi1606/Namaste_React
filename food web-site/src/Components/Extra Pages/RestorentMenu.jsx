import useRestorent from "../Utils/useRestrorent.jsx";
import Shimmer from "../ShimmerUi/shimmer.jsx";


const RestorentMenu = () =>{

    const resInfo = useRestorent();

        return resInfo === null ? <Shimmer />
        : (
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