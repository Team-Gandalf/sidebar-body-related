import React, { useState } from 'react';
import RelatedContent from './RelatedContent.jsx';

const Mainbody = (props) => {
  // console.log('mainbody props: ', props);
  const { description } = props.mainbodydata;
  const matureContent = props.mainbodydata.maturecontent[0].description.join(
    ', ',
  );
  const os = props.mainbodydata.sysrequirement.os.join(', ');
  const { processor } = props.mainbodydata.sysrequirement;
  const { memory } = props.mainbodydata.sysrequirement;
  const gphx = props.mainbodydata.sysrequirement.graphics;

  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);
  const showMore = () => {
    setShow(!show);
    setBtn(!btn);
  };

  const more = show ? 'd-block' : 'd-none';
  const go = btn ? 'd-block' : 'd-none';

  return (
    <div className="leftcolumn">
      <h2>ABOUT THIS GAME:</h2>
      <div className="mainbody-topContent">
        <p id="mainbodytext">{description}</p>
        <img
          id="mainbodyimage"
          alt=""
          src={props.mainbodydata.images[0]}
          width="50%"
          height="50%"
        />
        <div className={more}>
          <p id="mainbodytext">{description}</p>
          <img
            id="mainbodyimage"
            src={props.mainbodydata.images[1]}
            width="50%"
            height="50%"
          />
          <p id="mainbodytext">{description}</p>
          <hr className="dotted-line" />
          <strong>ABOUT GAMEPLAY IN VR:</strong>
          <p id="mainbodytext">{description}</p>
        </div>
      </div>
      <div className="show-wrap">
        <a onClick={showMore} className={go}>
          Show more
        </a>
      </div>

      <div className="content-desc">
        <h2>MATURE CONTENT DESCRIPTION:</h2>
        <p>The developers describe the content like this: </p>
        <p>
          <i>{matureContent}</i>
        </p>
      </div>

      <div className="system-req">
        <h2>SYSTEM REQUIREMENTS:</h2>
        <div id="sysspec">MINIMUM:</div>
        <div id="sysspec">
          OS:
          {' '}
          <span id="sysmin">{os}</span>
        </div>
        <div id="sysspec">
          Processor:
          {' '}
          <span id="sysmin">{processor}</span>
        </div>
        <div id="sysspec">
          Memory:
          {' '}
          <span id="sysmin">{memory}</span>
        </div>
        <div id="sysspec">
          Graphics:
          {' '}
          <span id="sysmin">{gphx}</span>
        </div>
      </div>

      <RelatedContent relatedcontent={props.relatedcontent} />
    </div>
  );
};

export default Mainbody;
