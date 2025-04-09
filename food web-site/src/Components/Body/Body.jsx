import './Body.css'
import RestorentCard from "../Restorent Card/RestorentCard.jsx";

const body = () =>{
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className = "restrorent-card">
                <RestorentCard />
                <RestorentCard />
                <RestorentCard />
                <RestorentCard />
                <RestorentCard />
                <RestorentCard />
                <RestorentCard />


            </div>
        </div>
    );
}

export default body;