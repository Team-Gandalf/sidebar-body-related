import React from 'react';

const Subdescription = (props) => {
    // console.log("subdescription props: ", props)
      return (
        <div className="sidebardesc">
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_singlePlayer.png" width="26" height="16"></img> {props.subdescription[0]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_achievements.png"width="26" height="16"></img> {props.subdescription[0]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_cc.png"width="26" height="16"></img> {props.subdescription[0]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_workshop.png"width="26" height="16"></img> {props.subdescription[0]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_editor.png"width="26" height="16"></img> {props.subdescription[0]}
            </div>
        </div>
      )
    }
  
export default Subdescription;
