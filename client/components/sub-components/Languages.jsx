import React from 'react';

const Languages = (props) => {
    console.log("languages props: ", props)
      return (
          <div className="sidebaritem">
            <div id="sidebartitle">Languages: </div>
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th id="columntitle">Interface</th>
                      <th id="columntitle">Full Audio</th>
                      <th id="columntitle">Subtitles</th>
                    </tr>
                    <tr>
                      <td id="sidebartitle">English</td>
                      <td id="languagescheckmark">{props.languages.English[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.English[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.English[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">French</td>
                      <td id="languagescheckmark">{props.languages.French[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.French[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.French[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">German</td>
                      <td id="languagescheckmark">{props.languages.German[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.German[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.German[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">Japanese</td>
                      <td id="languagescheckmark">{props.languages.Japanese[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.Japanese[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.Japanese[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">Korean</td>
                      <td id="languagescheckmark">{props.languages.Korean[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.Korean[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.Korean[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">Russian</td>
                      <td id="languagescheckmark">{props.languages.Russian[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.Russian[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.Russian[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">Simplified-Chinese</td>
                      <td id="languagescheckmark">{props.languages.SimplifiedChinese[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.SimplifiedChinese[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.SimplifiedChinese[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">Spanish-Latin America</td>
                      <td id="languagescheckmark">{props.languages.SpanishSpain[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.SpanishSpain[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.SpanishSpain[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">Spanish-Spain</td>
                      <td id="languagescheckmark">{props.languages.SpanishSpain[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.SpanishSpain[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.SpanishSpain[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td id="sidebartitle">Traditional-Chinese</td>
                      <td id="languagescheckmark">{props.languages.TraditionalChinese[0] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.TraditionalChinese[1] ? "✔" : null}</td>
                      <td id="languagescheckmark">{props.languages.TraditionalChinese[2] ? "✔" : null}</td>
                    </tr>
                  </tbody>
                </table>
        </div>
      )
    }
  
export default Languages;