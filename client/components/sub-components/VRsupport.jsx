import React from 'react';
import {
  SideBarItem,
  SystemSpec,
  SideBarItemElement,
  SideBarImage,
  SideBarText,
} from '../../StyledComponents.jsx';

const VRsupport = (props) => (
  // console.log('VRsupport props: ', props);
  <SideBarItem>
    <div>VR Support</div>
    <SystemSpec>Headset</SystemSpec>
    <SideBarItemElement>
      <SideBarImage src="https://store.steampowered.com/public/images/v6/ico/ico_vr_headset_valve_index.png" />
      <SideBarText>{props.vrsupport.headset[0]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage src="https://store.steampowered.com/public/images/v6/ico/ico_vr_headset_htc.png" />
      <SideBarText>{props.vrsupport.headset[2]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage src="https://store.steampowered.com/public/images/v6/ico/ico_vr_headset_oculus.png" />
      <SideBarText>{props.vrsupport.headset[4]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage src="https://store.steampowered.com/public/images/v6/ico/ico_vr_headset_windowsmr.png" />
      <SideBarText>{props.vrsupport.headset[6]}</SideBarText>
    </SideBarItemElement>
    <SystemSpec>Input</SystemSpec>
    <SideBarItemElement>
      <SideBarImage src="https://store.steampowered.com/public/images/v6/ico/ico_vr_input_motion.png" />
      <SideBarText>{props.vrsupport.input[0]}</SideBarText>
    </SideBarItemElement>
    <SystemSpec>Play Area</SystemSpec>
    <SideBarItemElement>
      <SideBarImage src="https://store.steampowered.com/public/images/v6/ico/ico_vr_area_seated.png" />
      <SideBarText>{props.vrsupport.playarea[0]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage src="https://store.steampowered.com/public/images/v6/ico/ico_vr_area_standing.png" />
      <SideBarText>{props.vrsupport.playarea[2]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage src="https://store.steampowered.com/public/images/v6/ico/ico_vr_area_roomscale.png" />
      <SideBarText>{props.vrsupport.playarea[4]}</SideBarText>
    </SideBarItemElement>
  </SideBarItem>
);

export default VRsupport;
