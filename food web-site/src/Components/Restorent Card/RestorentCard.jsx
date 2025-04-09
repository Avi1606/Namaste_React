import './RestorentCard.css'


const RestorentCard = (props) => {
    return (
        <div className="restorent-card">

            <div className="restro-logo" style={{backgroundColor: "grey"}}>
                <img src ={props.imgUrl}/>
            </div>
            <div className="restro-name">{props.resName}</div>
            <div className = "restro-rating">{props.resRating}</div>
            <div className = "restro-delivery-time">{props.resDeliveryTime}</div>

        </div>
    )
}

export default RestorentCard;