import React from "react";
import {
  SideBarItem,
  SideBarItemElement,
  MiniDescriptionValue,
  MiniDescriptionUrl,
  MiniDescriptionQuery,
} from "../../StyledComponents.jsx";

const Minidescription = (props) => {
  const genres = props.minidescription.genre.join(", ");
  const releasedate = `${props.minidescription.releasedate.substring(
    4,
    10
  )}, ${props.minidescription.releasedate.substring(11, 15)}`;
  // console.log('Minidescription props: ', props);
  return (
    <SideBarItem>
      <div>
        <MiniDescriptionQuery>TITLE:</MiniDescriptionQuery>
        <MiniDescriptionValue> {props.name}</MiniDescriptionValue>
      </div>
      <div>
        <MiniDescriptionQuery>GENRE:</MiniDescriptionQuery>
        <MiniDescriptionUrl> {genres}</MiniDescriptionUrl>
      </div>
      <div>
        <MiniDescriptionQuery>DEVELOPER:</MiniDescriptionQuery>
        <MiniDescriptionUrl>
          {props.minidescription.developer}
        </MiniDescriptionUrl>
      </div>
      <div>
        <MiniDescriptionQuery>PUBLISHER:</MiniDescriptionQuery>
        <MiniDescriptionUrl>
          {props.minidescription.publisher}
        </MiniDescriptionUrl>
      </div>
      <div>
        <MiniDescriptionQuery>FRANCHISE:</MiniDescriptionQuery>
        <MiniDescriptionValue>
          {props.minidescription.franchise}
        </MiniDescriptionValue>
      </div>
      <div>
        <MiniDescriptionQuery>RELEASE DATE:</MiniDescriptionQuery>
        <MiniDescriptionValue> {releasedate}</MiniDescriptionValue>
      </div>
      <br />
      <div>
        <SideBarItemElement>Visit the website</SideBarItemElement>
        <SideBarItemElement>View update history</SideBarItemElement>
        <SideBarItemElement>Read related news</SideBarItemElement>
        <SideBarItemElement>View discussions</SideBarItemElement>
        <SideBarItemElement>Visit the Workshop</SideBarItemElement>
        <SideBarItemElement>Visit the website</SideBarItemElement>
        <SideBarItemElement>Find Community Groups</SideBarItemElement>
      </div>
    </SideBarItem>
  );
};

export default Minidescription;
