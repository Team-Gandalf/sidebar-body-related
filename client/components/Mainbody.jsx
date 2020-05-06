import React from 'react';

const Mainbody = (props) => {
// console.log("mainbody props: ", props)
const description = props.mainbodydata.description;
const matureContent = props.mainbodydata.maturecontent[0].description.join(", "); 
const os = props.mainbodydata.sysrequirement.os.join(", ");
const processor = props.mainbodydata.sysrequirement.processor;
const memory = props.mainbodydata.sysrequirement.memory;
const gphx = props.mainbodydata.sysrequirement.graphics;

    return (
      <div className="leftcolumn">
          <h2>ABOUT THIS GAME:</h2> 
            <div id="mainbodycontent">{description}</div> 
            <img src={props.mainbodydata.images[0]} width="50%" height="50%"/>
            <div id="mainbodycontent">{description}</div> 
            <img src={props.mainbodydata.images[1]} width="50%" height="50%"/>
            <div id="mainbodycontent">{description}</div>
          <br></br>
            {/* <div>═════════════════════════════════════════════════════════════════</div> */}
          <strong>ABOUT GAMEPLAY IN VR:</strong> 
            <div>{description}</div> 
          <br></br>
          <h2>MATURE CONTENT DESCRIPTION:</h2>
            <div>The developers describe the content like this: <div>
            <div>{matureContent}</div>
          <br></br>
          <h2>SYSTEM REQUIREMENTS:</h2>
          <div>Minimum: </div>
            <div>OS: {os}</div>
            <div>Processor: {processor}</div>
            <div>Memory: {memory}</div>
            <div>Graphics: {gphx}</div>
          </div>
        </div>           
      </div>
    )
  }

  export default Mainbody;
