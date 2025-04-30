import loc from "../travel_images/location.png"
import data from "./data"
export default function Body(props){
  console.log(data)
    return(
        <div className="card_container">
          <div className="card">
            <img 
              src={require(`../travel_images/${props.image}`)}
              alt="main img"
              className="card_img"
            />
          </div>
          <div>
            <div className="card_location">
              <img 
                src={loc} 
                alt="location"
                className="card_locimg"
              />
              <h4 className="card_point">{props.location}</h4>
              <a href={props.Google_maps_link} className="card_link">View on Google Maps</a>
            </div>
            <h2 className="card_heading">{props.Title}</h2>
            <h4 className="card_dates">{props.start_date} - {props.end_date}</h4>
            <p className="card_details">{props.description}</p>
          </div>
        </div>
    )
};