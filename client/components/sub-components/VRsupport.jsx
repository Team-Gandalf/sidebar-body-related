import React from 'react';

const VRsupport = (props) => (
  // console.log('VRsupport props: ', props);
  <div className="sidebaritem">
    <div id="vrsupportitle">VR Support</div>
    <br />
    <div id="sysspec">Headset</div>
    <div id="sidebaritemele">
      <img src={props.vrsupport.headset[1]} alt="" width="26" height="16" />
      {' '}
      {props.vrsupport.headset[0]}
    </div>
    <div id="sidebaritemele">
      <img src={props.vrsupport.headset[3]} alt="" width="26" height="16" />
      {' '}
      {props.vrsupport.headset[2]}
    </div>
    <div id="sidebaritemele">
      <img src={props.vrsupport.headset[5]} alt="" width="26" height="16" />
      {' '}
      {props.vrsupport.headset[4]}
    </div>
    <div id="sidebaritemele">
      <img src={props.vrsupport.headset[7]} alt="" width="26" height="16" />
      {' '}
      {props.vrsupport.headset[6]}
    </div>
    <div id="sysspec">Input</div>
    <div id="sidebaritemele">
      <img src={props.vrsupport.input[1]} alt="" width="26" height="16" />
      {' '}
      {props.vrsupport.input[0]}
    </div>
    <div id="sysspec">Play Area</div>
    <div id="sidebaritemele">
      <img src={props.vrsupport.input[1]} alt="" width="26" height="16" />
      {' '}
      {props.vrsupport.playarea[0]}
    </div>
    <div id="sidebaritemele">
      <img src={props.vrsupport.input[3]} alt="" width="26" height="16" />
      {' '}
      {props.vrsupport.playarea[2]}
    </div>
    <div id="sidebaritemele">
      <img src={props.vrsupport.input[5]} alt="" width="26" height="16" />
      {' '}
      {props.vrsupport.playarea[4]}
    </div>
  </div>
);

// VRsupport.propTypes = {
//   params: React.PropTypes.object,
// };

export default VRsupport;
