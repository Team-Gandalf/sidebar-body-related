import React from "react";
import { Tooltip } from "reactstrap";
import {
  CarouselItem,
  CarouselImgWrap,
  CarouselImgWrapImage,
  CarouselContentName,
  CarouselContentPrice,
  ToolTipWrap,
  Heading4,
  ToolTipImgWrap,
  ToolTipImgWrapImage,
  ToolTipReviews,
  Heading6,
  ToolTipSpan,
} from "../../StyledComponents.jsx";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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
    const releasedate = `${hoverinfo.releasedate.substring(
      4,
      10
    )}, ${hoverinfo.releasedate.substring(11, 15)}`;

    // console.log('index: ', this.props.index);
    return (
      <CarouselItem id={`id${this.props.index}`}>
        <CarouselImgWrap>
          <CarouselImgWrapImage src={thumbnail} alt="" />
        </CarouselImgWrap>
        <div>
          <CarouselContentName>{name}</CarouselContentName>
          <CarouselContentPrice>${price}</CarouselContentPrice>
        </div>
        <div>
          <Tooltip
            placement="right"
            isOpen={this.state.tooltipOpen}
            target={`id${this.props.index}`}
            toggle={this.toggle}
          >
            <ToolTipWrap>
              <Heading4>{name}</Heading4>
              <p style={{ color: "black" }}>{releasedate}</p>
              <ToolTipImgWrap>
                <ToolTipImgWrapImage src={gif} alt="" />
              </ToolTipImgWrap>
              <ToolTipReviews>
                <p> Overall User Reviews </p>
                <p>
                  <span style={{ color: "#417a9b" }}>{reviews}</span>{" "}
                  <span>({totalReviews}) reviews</span>
                </p>
              </ToolTipReviews>
              <Heading6>User tags:</Heading6>
              <div style={{ display: "flex" }}>
                {tag.map((t) => (
                  <ToolTipSpan key={t}>{t}</ToolTipSpan>
                ))}
              </div>
            </ToolTipWrap>
          </Tooltip>
        </div>
      </CarouselItem>
    );
  }
}

export default EachPicture;
