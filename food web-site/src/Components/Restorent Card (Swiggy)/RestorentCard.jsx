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

export const withPromotion = (RestorentCard) => {
                return (props) => {
                    return (
                        <div className="relative">
                            <label className="absolute top-2 left-2 bg-pink-800 text-white px-2 py-1 rounded-md text-sm font-medium z-10">
                                Promoted
                            </label>
                            <RestorentCard {...props} />
                        </div>
                    );
                }
            }

export default RestorentCard;