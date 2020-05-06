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
          <Minidescription minidescription={props.sidebardata.minidesciption} name={props.name}/>
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

  // background-image: url(/public/images/v6/mc_logo_no_text.png);
  // background-repeat: no-repeat no-repeat;
  // float: left;
  // height: 35px;
  // margin: 10px 0 0 10px;
  // padding: 0;
  // width: 35px;

  // color: #fff;
  // float: left;
  // font-family: "Motiva Sans",sans-serif;
  // font-size: 26px;
  // font-weight: 700;
  // line-height: 26px;
  // margin: 4px 0 0 2px;
  // padding: 0;