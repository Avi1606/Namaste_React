import './RestorentCard.css'
import {URI} from "../Utils/Constants.jsx";

const RestorentCard = (props) => {
    return (
        <div className="restorent-card">
            <div className="restro-logo" style={{backgroundColor: "grey"}}>
                <img src={`${URI}${props.imgUrl}`} alt={props.resName} />
            </div>
            <div className="restro-name">{props.resName}</div>
            <div className="restro-cuisines">{props.resCuisines?.join(", ")}</div>
            <div className="restro-rating">{props.resRating}</div>
            <div className="restro-delivery-time">{props.resDeliveryTime}</div>
        </div>
    );
};
export default RestorentCard;