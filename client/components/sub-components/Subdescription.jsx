import React from 'react';
import {
  SideBarItem,
  SideBarItemElement,
  SideBarImage,
  SideBarText,
} from '../../StyledComponents.jsx';

const Subdescription = (props) => (
  // console.log('subdescription props: ', props);
  <SideBarItem>
    <SideBarItemElement>
      <SideBarImage
        src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_singlePlayer.png"
        alt=""
      />
      <SideBarText>{props.subdescription.player[0]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage
        src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_achievements.png"
        alt=""
      />
      <SideBarText>{props.subdescription.achievements[0]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage
        src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_cc.png"
        alt=""
      />
      <SideBarText>{props.subdescription.captions[0]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage
        src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_workshop.png"
        alt=""
      />
      <SideBarText>{props.subdescription.workshop[0]}</SideBarText>
    </SideBarItemElement>
    <SideBarItemElement>
      <SideBarImage
        src="https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_editor.png"
        alt=""
      />
      <SideBarText>{props.subdescription.editor[0]}</SideBarText>
    </SideBarItemElement>
  </SideBarItem>
);
export default Subdescription;
