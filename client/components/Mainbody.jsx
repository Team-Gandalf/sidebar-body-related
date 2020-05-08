import React from 'react';
import RelatedContent from './RelatedContent.jsx';

const Mainbody = (props) => {
console.log("mainbody props: ", props)
const description = props.mainbodydata.description;
const matureContent = props.mainbodydata.maturecontent[0].description.join(", "); 
const os = props.mainbodydata.sysrequirement.os.join(", ");
const processor = props.mainbodydata.sysrequirement.processor;
const memory = props.mainbodydata.sysrequirement.memory;
const gphx = props.mainbodydata.sysrequirement.graphics;

    return (
      <div className="leftcolumn">
          <h2>ABOUT THIS GAME:</h2> 
            <div id="mainbodytext">{description}</div> 
            <img id="mainbodyimage" src={props.mainbodydata.images[0]} width="50%" height="50%"/>
            <div id="mainbodytext">{description}</div> 
            <img id="mainbodyimage" src={props.mainbodydata.images[1]} width="50%" height="50%"/>
            <div id="mainbodytext">{description}</div>
          <br></br>
          <strong>ABOUT GAMEPLAY IN VR:</strong> 
            <div id="mainbodytext">{description}</div> 
          <br></br>
          <h2>MATURE CONTENT DESCRIPTION:</h2>
            <p>The developers describe the content like this: </p>
            <i>{matureContent}</i>
          <br></br>
          <br></br>
          <h2>SYSTEM REQUIREMENTS:</h2>
            <div id="sysmin"> MINIMUM: </div> <br></br>
            <div id="sysspec">OS: <div id="sysmin">{os}</div></div> <br></br>
            <div id="sysspec">Processor: <span id="sysmin">{processor}</span></div> <br></br>
            <div id="sysspec">Memory: <span id="sysmin">{memory}</span></div> <br></br>
            <div id="sysspec">Graphics: <span id="sysmin">{gphx}</span></div> <br></br>
        <RelatedContent relatedcontent={props.relatedcontent}/>           
      </div>
    )
  }

  export default Mainbody;
