import React from "react";
import Languages from "./sub-components/Languages.jsx";
import Achievements from "./sub-components/Achievements.jsx";
import Subdescription from "./sub-components/Subdescription.jsx";
import VRsupport from "./sub-components/VRsupport.jsx";
import Minidescription from "./sub-components/Minidescription.jsx";

const SideBar = (props) => {
  console.log("sidebar props: ", props.sidebardata);
  const { metacritic } = props.sidebardata;
  let backgroundColor =
    metacritic < 50 ? "red" : metacritic < 76 ? "yellow" : "green";

  return (
    <div className="rightcolumn">
      <Subdescription subdescription={props.sidebardata.description} />
      <VRsupport vrsupport={props.sidebardata.vrsupport} />
      <Languages languages={props.sidebardata.languages} />
      <Achievements achievements={props.sidebardata.achievements} />
      <Minidescription
        minidescription={props.sidebardata.minidescription}
        name={props.name}
      />
      <div className="sidebaritem custom">
        <span id="metacritictext"> metacritic</span>
        <span style={{ backgroundColor }}>{metacritic}</span>
      </div>
    </div>
  );
};

export default SideBar;
