import React, { useState } from "react";
import {
  SideBarItem,
  SystemSpec,
  LanguageColumnTitle,
  LanguageEach,
  LanguagesCheckMark,
} from "../../StyledComponents.jsx";

const Languages = (props) => {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);
  const showMore = () => {
    setShow(!show);
    setBtn(!btn);
  };

  return (
    <SideBarItem>
      <SystemSpec>Languages: </SystemSpec>
      <table>
        <tbody>
          <tr>
            <th />
            <LanguageColumnTitle>Interface</LanguageColumnTitle>
            <LanguageColumnTitle>Full Audio</LanguageColumnTitle>
            <LanguageColumnTitle>Subtitles</LanguageColumnTitle>
          </tr>
          <tr>
            <LanguageEach>English</LanguageEach>
            {props.languages.English.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr>
            <LanguageEach>French</LanguageEach>
            {props.languages.French.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr>
            <LanguageEach>German</LanguageEach>
            {props.languages.German.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr>
            <LanguageEach>Japanese</LanguageEach>
            {props.languages.Japanese.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr>
            <LanguageEach>Korean</LanguageEach>
            {props.languages.Korean.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Russian</LanguageEach>
            {props.languages.Russian.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Simplified-Chinese</LanguageEach>
            {props.languages.SimplifiedChinese.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Spanish-Latin America</LanguageEach>
            {props.languages.SpanishSpain.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Spanish-Spain</LanguageEach>
            {props.languages.SpanishSpain.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
          <tr style={{ display: show ? "table-row" : "none" }}>
            <LanguageEach>Traditional-Chinese</LanguageEach>
            {props.languages.TraditionalChinese.map((item, i) => (
              <LanguagesCheckMark key={i}>
                {item ? "✔" : null}
              </LanguagesCheckMark>
            ))}
          </tr>
        </tbody>
      </table>
      <div>
        <a
          role="button"
          onClick={showMore}
          style={{ display: btn ? "table-row" : "none" }}
        >
          Show more
        </a>
      </div>
    </SideBarItem>
  );
};

export default Languages;
