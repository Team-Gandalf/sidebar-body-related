import React from 'react';

const Subdescription = (props) => (
  // console.log('subdescription props: ', props);
  <div className="sidebaritem">
    <div id="sidebaritemele">
      <img src={props.subdescription.player[1]} alt="" width="26" height="16" />
      {' '}
      {props.subdescription.player[0]}
    </div>
    <div id="sidebaritemele">
      <img
        src={props.subdescription.achievements[1]}
        alt=""
        width="26"
        height="16"
      />
      {' '}
      {props.subdescription.achievements[0]}
    </div>
    <div id="sidebaritemele">
      <img
        src={props.subdescription.captions[1]}
        alt=""
        width="26"
        height="16"
      />
      {' '}
      {props.subdescription.captions[0]}
    </div>
    <div id="sidebaritemele">
      <img
        src={props.subdescription.workshop[1]}
        alt=""
        width="26"
        height="16"
      />
      {' '}
      {props.subdescription.workshop[0]}
    </div>
    <div id="sidebaritemele">
      <img src={props.subdescription.editor[1]} alt="" width="26" height="16" />
      {' '}
      {props.subdescription.editor[0]}
    </div>
  </div>
);
export default Subdescription;
