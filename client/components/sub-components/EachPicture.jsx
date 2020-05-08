import React from 'react';

class EachPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.mouseHover = this.mouseHover.bind(this)
  }

  mouseHover(){
    // console.log("hover state toggled")
    this.setState({isHovering: !this.state.isHovering});
    console.log(this.state.isHovering)
  }

render () {
  var data = this.props.item;
  var hover = this.props.item.hoverinfo;
  
  console.log("each props: ", data)
  return (
    <div >
        <img src={data.thumbnail} width="171" height="64" onMouseEnter={this.mouseHover} onMouseLeave={this.mouseHover}/>
        {this.state.isHovering && <div>
             <div>{data.name}</div>
             <div>{hover.releasedate}</div>
             <img src={hover.gif} width="50" height="50"></img>
             <div> Overall User Reviews </div>
             <div>{hover.reviews}</div>
             <div>{hover.totalreviews}</div>
             <div>{hover.tag}</div>
             </div>}
        <h5>{data.name}</h5>
        <h5>{data.price}</h5>
    </div>
    ) 
  }
}

export default EachPicture;