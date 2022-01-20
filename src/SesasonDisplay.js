import './SeasonDisplay.css'
import React from "react";

const seasonConfig = {
    summer: {
        text: 'It is hot',
        iconName: 'sun'
    },
    winter: {
        text: 'It is cold',
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : "winter"
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
};

const SeasonDisplay = ({lat, long, ...props}) => {

    const season = getSeason(lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season] // returns {text,iconName}

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <div>
                <h1>{text}</h1>
                <h2>Latitude: {lat}</h2>
                <h2>Longtitude: {long}</h2>
            </div> 
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
};

export default SeasonDisplay;