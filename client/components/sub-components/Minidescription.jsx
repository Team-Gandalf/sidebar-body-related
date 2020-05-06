import React from 'react';
import { PromiseProvider } from 'mongoose';

const Minidescription = (props) => {
    const genres = props.minidescription.genre.join(", ")
    const releasedate = props.minidescription.releasedate.substring(4,15)
    // console.log("Minidescription props: ", props)
      return (
        <div className="sidebardesc">
          <div>
          <span id="minidescriptionkey">TITLE:</span><span id="minidescriptionvalue"> {props.name}</span>
          </div>
          <div>
          <span id="minidescriptionkey">GENRE:</span><span id="minidescriptionurl"> {genres}</span>
          </div>
          <div>
          <span id="minidescriptionkey">DEVELOPER:</span><span id="minidescriptionurl"> {props.minidescription.developer}</span>
          </div>
          <div>
          <span id="minidescriptionkey">PUBLISHER:</span><span id="minidescriptionurl"> {props.minidescription.publisher}</span>
          </div>
          <div>
          <span id="minidescriptionkey">FRANCHISE:</span><span id="minidescriptionvalue"> {props.minidescription.franchise}</span>
          </div>
          <div>
          <span id="minidescriptionkey">RELEASE DATE:</span><span id="minidescriptionvalue"> {releasedate}</span>
          </div>
          <br></br>
          <div>
              <div id="sidebaritems"><a href="www.google.com">Visit the website </a></div>
              <div id="sidebaritems"><a href="www.google.com">View update history </a></div>
              <div id="sidebaritems"><a href="www.google.com">Read related news </a></div>
              <div id="sidebaritems"><a href="www.google.com">View discussions </a></div>
              <div id="sidebaritems"><a href="www.google.com">Visit the Workshop </a></div>
              <div id="sidebaritems"><a href="www.google.com">Visit the website </a></div>
              <div id="sidebaritems"><a href="www.google.com">Find Community Groups </a></div>
          </div>
        </div>
      )
    }
  
export default Minidescription;