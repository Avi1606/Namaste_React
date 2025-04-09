import './Body.css'
import RestorentCard from "../Restorent Card/RestorentCard.jsx";

const body = () =>{
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className = "restrorent-card">
                <RestorentCard
                    resName= "BurgerKing"
                    resRating="3.1 *"
                    imgUrl="https://logowik.com/content/uploads/images/burger-king-new-20204303.logowik.com.webp"
                    resDeliveryTime ="20 MIN" />
                <RestorentCard
                    resName="McDonald's"
                    resRating="4.2 *"
                    imgUrl="https://logowik.com/content/uploads/images/mcdonalds-golden-arches1235.logowik.com.webp"
                    resDeliveryTime="15 MIN" />
                <RestorentCard
                    resName="KFC"
                    resRating="4.0 *"
                    imgUrl="https://logowik.com/content/uploads/images/kfc2930.jpg"
                    resDeliveryTime="25 MIN" />
                <RestorentCard
                    resName="Domino's Pizza"
                    resRating="4.5 *"
                    imgUrl="https://logowik.com/content/uploads/images/dominos-pizza5190.jpg"
                    resDeliveryTime="30 MIN" />
                <RestorentCard
                    resName="Subway"
                    resRating="3.8 *"
                    imgUrl="https://logowik.com/content/uploads/images/subway-20028043.logowik.com.webp"
                    resDeliveryTime="22 MIN" />
                <RestorentCard
                    resName="Pizza Hut"
                    resRating="4.1 *"
                    imgUrl="https://logowik.com/content/uploads/images/130_pizzahut.jpg"
                    resDeliveryTime="35 MIN" />
                <RestorentCard
                    resName="Taco Bell"
                    resRating="3.9 *"
                    imgUrl="https://logowik.com/content/uploads/images/taco-bell-colored7471.logowik.com.webp"
                    resDeliveryTime="18 MIN" />

            </div>
        </div>
    );
}

export default body;