import React from 'react';

const Languages = (props) => {
    console.log("languages props: ", props)
      return (
          <div className="sidebardesc">
            <div>Languages: </div>
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th>Interface</th>
                      <th>Full Audio</th>
                      <th>Subtitles</th>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td>{props.languages.English[0] ? "✔" : null}</td>
                      <td>{props.languages.English[1] ? "✔" : null}</td>
                      <td>{props.languages.English[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>French</td>
                      <td>{props.languages.French[0] ? "✔" : null}</td>
                      <td>{props.languages.French[1] ? "✔" : null}</td>
                      <td>{props.languages.French[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>German</td>
                      <td>{props.languages.German[0] ? "✔" : null}</td>
                      <td>{props.languages.German[1] ? "✔" : null}</td>
                      <td>{props.languages.German[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>Japanese</td>
                      <td>{props.languages.Japanese[0] ? "✔" : null}</td>
                      <td>{props.languages.Japanese[1] ? "✔" : null}</td>
                      <td>{props.languages.Japanese[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>Korean</td>
                      <td>{props.languages.Korean[0] ? "✔" : null}</td>
                      <td>{props.languages.Korean[1] ? "✔" : null}</td>
                      <td>{props.languages.Korean[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>Russian</td>
                      <td>{props.languages.Russian[0] ? "✔" : null}</td>
                      <td>{props.languages.Russian[1] ? "✔" : null}</td>
                      <td>{props.languages.Russian[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>Simplified-Chinese</td>
                      <td>{props.languages.SimplifiedChinese[0] ? "✔" : null}</td>
                      <td>{props.languages.SimplifiedChinese[1] ? "✔" : null}</td>
                      <td>{props.languages.SimplifiedChinese[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>Spanish-Latin America</td>
                      <td>{props.languages.SpanishSpain[0] ? "✔" : null}</td>
                      <td>{props.languages.SpanishSpain[1] ? "✔" : null}</td>
                      <td>{props.languages.SpanishSpain[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>Spanish-Spain</td>
                      <td>{props.languages.SpanishSpain[0] ? "✔" : null}</td>
                      <td>{props.languages.SpanishSpain[1] ? "✔" : null}</td>
                      <td>{props.languages.SpanishSpain[2] ? "✔" : null}</td>
                    </tr>
                    <tr>
                      <td>Traditional-Chinese</td>
                      <td>{props.languages.TraditionalChinese[0] ? "✔" : null}</td>
                      <td>{props.languages.TraditionalChinese[1] ? "✔" : null}</td>
                      <td>{props.languages.TraditionalChinese[2] ? "✔" : null}</td>
                    </tr>
                  </tbody>
                </table>
        </div>
      )
    }
  
export default Languages;