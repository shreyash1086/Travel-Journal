import earth from "../travel_images/earth.png"
export default function Head(){
    return(
        <div className="travel_head">
            <img src={earth} 
                 alt="Earth"
                 className="travel_head_img"   
            />
            <h2 className="travel_heading">
                 my travel journal.
            </h2>
        </div>
    )
};