import React from "react";
import {
  SideBarItem,
  SystemSpec,
  AchievementImage,
  ViewAllAchievements,
} from "../../StyledComponents.jsx";

const Achievements = (props) => {
  const achievements = props.achievements.length;
  // console.log("Achievements props: ", props);
  return (
    <SideBarItem>
      <SystemSpec>Includes {achievements} Steam Achievements </SystemSpec>
      {props.achievements.slice(0, 3).map((item, index) => (
        <span key={item}>
          <AchievementImage src={props.achievements[index]} alt="" />
        </span>
      ))}
      <ViewAllAchievements>View all {achievements}</ViewAllAchievements>
    </SideBarItem>
  );
};

export default Achievements;
