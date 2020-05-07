import React from 'react';
import Languages from './sub-components/Languages.jsx';
import Achievements from './sub-components/Achievements.jsx';
import Subdescription from './sub-components/Subdescription.jsx';
import VRsupport from './sub-components/VRsupport.jsx';
import Minidescription from './sub-components/Minidescription.jsx';


const SideBar = (props) => {
  console.log("sidebar props: ", props.sidebardata)
    return (
      <div className="rightcolumn"> 
          <Subdescription subdescription={props.sidebardata.description}/>
          <VRsupport vrsupport={props.sidebardata.vrsupport}/>
          <Languages languages={props.sidebardata.languages}/>
          <Achievements achievements={props.sidebardata.achievements}/>
          <Minidescription minidescription={props.sidebardata.minidescription} name={props.name}/>
          <div className="sidebardesc">
          <span id='sidebartags'> Share </span>
          <span id='sidebartags'> Embed </span>
          <span id='sidebartags'> Flag </span>
          </div>
          <div className="sidebardesc">{props.sidebardata.metacritic}</div>
          <div></div>
          {/* <img src="https://www.metacritic.com/game/pc/half-life-alyx?ftag=MCD-06-10aaa1f"> */}
      </div>
    )
  }

  export default SideBar;
