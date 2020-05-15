import React from "react";
import Languages from "./sub-components/Languages.jsx";
import Achievements from "./sub-components/Achievements.jsx";
import Subdescription from "./sub-components/Subdescription.jsx";
import VRsupport from "./sub-components/VRsupport.jsx";
import Minidescription from "./sub-components/Minidescription.jsx";
import {
  RightColumn,
  SideBarItemCustom,
  MetaCricticText,
  MetaCriticScore,
} from "../StyledComponents.jsx";

const SideBar = (props) => {
  // console.log('sidebar props: ', props.sidebardata);
  const { metacritic } = props.sidebardata;
  const backgroundColor =
    metacritic < 50 ? "red" : metacritic < 76 ? "yellow" : "green";

  return (
    <RightColumn>
      <Subdescription subdescription={props.sidebardata.description} />
      <VRsupport vrsupport={props.sidebardata.vrsupport} />
      <Languages languages={props.sidebardata.languages} />
      <Achievements achievements={props.sidebardata.achievements} />
      <Minidescription
        minidescription={props.sidebardata.minidescription}
        name={props.name}
      />
      <SideBarItemCustom>
        <img
          src="https://www.metacritic.com/images/icons/metacritic-icon.svg"
          width="25"
          height="25"
        ></img>
        <MetaCricticText> metacritic</MetaCricticText>
        <MetaCriticScore style={{ backgroundColor }}>
          {metacritic}
        </MetaCriticScore>
      </SideBarItemCustom>
    </RightColumn>
  );
};

export default SideBar;
