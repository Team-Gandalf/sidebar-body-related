import React from 'react';

const Achievements = (props) => {
  const achievements = props.achievements.length;
  // console.log("Achievements props: ", props);
  return (
    <div className="sidebaritem">
      <div id="sidebartitle">
        Includes
        {achievements}
        {' '}
        Steam Achievements
        {' '}
      </div>
      {props.achievements.slice(0, 3).map((item, index) => (
        <span id="achievements" key={item}>
          <img src={props.achievements[index]} alt="" width="64" height="64" />
        </span>
      ))}
      <div id="viewallachievements" width="64" height="64">
        {' '}
        View all
        {achievements}
      </div>
    </div>
  );
};

export default Achievements;
