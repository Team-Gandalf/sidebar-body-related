import React from "react";
import Slider from "react-slick";
import EachPicture from "./sub-components/EachPicture.jsx";
import { LeftColumn, Heading2 } from "../StyledComponents.jsx";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class RelatedContent extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    const data = this.props;
    // console.log('related content props: ', data);
    return (
      <LeftColumn>
        <Heading2>MORE FROM HALF-LIFE FRANCHISE</Heading2>
        <Slider {...settings}>
          {data.relatedcontent.map((item, i) => (
            <EachPicture item={item} key={item} index={i} />
          ))}
        </Slider>
      </LeftColumn>
    );
  }
}

export default RelatedContent;
