import React from 'react';

const Achievements = (props) => {
    const achievements = props.achievements.length;
    console.log("Achievements props: ", props)
      return (
        <div className="sidebardesc">
            <div>Includes {achievements} Steam Achievements </div>
            <span id="achievements"><img src={props.achievements[0]} width="64" height="64"/></span>
            <span id="achievements"><img src={props.achievements[1]} width="64" height="64"/></span>
            <span id="achievements"><img src={props.achievements[0]} width="64" height="64"/></span>
            <span id="achievements"><img src={props.achievements[1]} width="64" height="64"/></span>
        </div> 
      )
    }
  
export default Achievements;