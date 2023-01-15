import "./components.css"
import {places} from "../data/data.js"
import loc from "../data/Location.png"



const Card = ({info}) => {

    const absoluteUrl = new URL(info.locLink).href;

    return (
        <div className="card">
            <div className="card--img">
                <img src={info.imgLink}  alt="not found"/>
                {/* <h1>Testsssss</h1> */}
            </div>
            <div className="main">
                <div className="card--top">
                    <p>
                        <img src={loc} className="loc" alt="not found"/>
                        {info.place}
                    </p>
                    <a href={absoluteUrl} className="link">View on Google Maps</a>
                </div>
                <div>
                    <h1>{info.title}</h1>
                </div>
                <div>
                    <div className="dates">{info.dates.startDate} - {info.dates.endDate}</div>
                    <div>{info.description}</div>
                </div>
            </div>

        </div>
    );

}


const Locations = () => {
    const data = places.map(place => {
        return <Card
            info={place}/>
    });

    return(
        <div className="cards">
            {data}
        </div>
    );
}


export {Card, Locations}