import React from 'react';

const VRsupport = (props) => {
    console.log("VRsupport props: ", props)
      return (
        <div className="sidebardesc">
            <div id="key">Headset</div>
            <div id="sidebaritems">
                <img src={props.vrsupport.headset[1]} width="26" height="16"></img> {props.vrsupport.headset[0]}
            </div>
            <div id="sidebaritems">
                <img src={props.vrsupport.headset[3]} width="26" height="16"></img> {props.vrsupport.headset[2]}
            </div>
            <div id="sidebaritems">
                <img src={props.vrsupport.headset[5]} width="26" height="16"></img> {props.vrsupport.headset[4]}
            </div>
            <div id="sidebaritems">
                <img src={props.vrsupport.headset[7]} width="26" height="16"></img> {props.vrsupport.headset[6]}
            </div>
            <div id="key">Input</div>
            <div id="sidebaritems">
                <img src={props.vrsupport.input[1]} width="26" height="16"></img> {props.vrsupport.input[0]}
            </div>
            <div id="key">Play Area</div>
            <div id="sidebaritems">
                <img src={props.vrsupport.input[1]} width="26" height="16"></img> {props.vrsupport.playarea[0]}
            </div>
            <div id="sidebaritems">
                <img src={props.vrsupport.input[3]} width="26" height="16"></img> {props.vrsupport.playarea[2]}
            </div>
            <div id="sidebaritems">
                <img src={props.vrsupport.input[5]} width="26" height="16"></img> {props.vrsupport.playarea[4]}
            </div>
        </div>
      )
    }
  
export default VRsupport;