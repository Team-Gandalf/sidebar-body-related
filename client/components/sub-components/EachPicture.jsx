import React from "react";
import { Tooltip } from "reactstrap";

class EachPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ tooltipOpen: !this.state.tooltipOpen });
  }

  render() {
    const { item } = this.props;
    const { thumbnail, price, name, hoverinfo } = item;
    const { gif, reviews, totalReviews, tag } = hoverinfo;
    const releasedate =
      hoverinfo.releasedate.substring(4, 10) +
      ", " +
      hoverinfo.releasedate.substring(11, 15);

    console.log("index: ", this.props.index);
    return (
      <div className="item" id={`id${this.props.index}`}>
        <div className="item-img-wrap">
          <img src={thumbnail} alt="" />
        </div>
        <div className="content">
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div>
          <Tooltip
            placement="right"
            isOpen={this.state.tooltipOpen}
            target={`id${this.props.index}`}
            toggle={this.toggle}
          >
            <div className="tooltip-wrap">
              <h4>{name}</h4>
              <p className="c-black">{releasedate}</p>
              <div className="tooltip-img-wrap">
                <img src={gif} width="50" height="50"></img>
              </div>
              <div className="reviews">
                <p> Overall User Reviews </p>
                <p>
                  <span className="c-blue">{reviews}</span>{" "}
                  <span>({totalReviews}) reviews</span>
                </p>
              </div>
              <h6>User tags:</h6>
              <div className="tag-flex">
                {tag.map((t) => (
                  <span>{t}</span>
                ))}
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default EachPicture;
