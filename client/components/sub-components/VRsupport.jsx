import React from 'react';

const VRsupport = (props) => {
    // console.log("VRsupport props: ", props)
      return (
        <div className="sidebardesc">
            <div>Headset</div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_singlePlayer.png"width="26" height="16"></img> {props.vrsupport[0]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_achievements.png"width="26" height="16"></img> {props.vrsupport[1]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_cc.png"width="26" height="16"></img> {props.vrsupport[2]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_workshop.png"width="26" height="16"></img> {props.vrsupport[3]}
            </div>
            <div>Input</div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_editor.png"width="26" height="16"></img> {props.vrsupport[4]}
            </div>
            <div>Play Area</div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_editor.png"width="26" height="16"></img> {props.vrsupport[4]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_editor.png"width="26" height="16"></img> {props.vrsupport[4]}
            </div>
            <div id="sidebaritems">
                <img src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_editor.png"width="26" height="16"></img> {props.vrsupport[4]}
            </div>
        </div>
      )
    }
  
export default VRsupport;