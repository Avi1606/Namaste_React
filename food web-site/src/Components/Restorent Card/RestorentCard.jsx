import './RestorentCard.css'

const RestorentCard = () => {
    return (
        <div className="restorent-card">

            <div className="restro-logo" style={{backgroundColor: "grey"}}>
                <img src ="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"/>
            </div>
            <div className="restro-name">Biriyani Blues</div>
            <div className = "restro-rating">4.4 *</div>
            <div className = "restro-delivery-time"> 20 min</div>

        </div>
    )
}

export default RestorentCard;