import React from 'react';

const Subdescription = (props) => {
    console.log("subdescription props: ", props)
      return (
        <div className="sidebardesc">
            <div id="sidebaritems">
                <img src={props.subdescription.player[1]} width="26" height="16"></img> {props.subdescription.player[0]}
            </div>
            <div id="sidebaritems">
                <img src={props.subdescription.achievements[1]} width="26" height="16"></img> {props.subdescription.achievements[0]}
            </div>
            <div id="sidebaritems">
             <img src={props.subdescription.captions[1]} width="26" height="16"></img> {props.subdescription.captions[0]}
            </div>
            <div id="sidebaritems">
                <img src={props.subdescription.workshop[1]} width="26" height="16"></img> {props.subdescription.workshop[0]}
            </div>
            <div id="sidebaritems">
                <img src={props.subdescription.editor[1]} width="26" height="16"></img> {props.subdescription.editor[0]}
            </div>
        </div>
      )
    }
  
export default Subdescription;
