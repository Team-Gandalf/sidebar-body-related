import React from 'react';
import EachPicture from './sub-components/EachPicture.jsx'

class RelatedContent extends React.Component {
  constructor(props) {
    super(props);
  }

render () {
  var data = this.props
  console.log("related content props: ", data)
  return (
    <div className="leftcolumn">
        <h2>MORE FROM HALF-LIFE FRANCHISE</h2>
        {data.relatedcontent.map((item) => (
          <EachPicture item={item}/>
        ))}
        <h2>MORE LIKE THIS</h2>
    </div>
    ) 
  }
}

export default RelatedContent;