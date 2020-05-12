import React from "react";
import EachPicture from "./sub-components/EachPicture.jsx";
import Slider from "react-slick";

class RelatedContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    var data = this.props;
    console.log("related content props: ", data);
    return (
      <div className="leftcolumn">
        <h2>MORE FROM HALF-LIFE FRANCHISE</h2>
        <Slider {...settings}>
          {data.relatedcontent.map((item, i) => (
            <EachPicture item={item} key={item._id} index={i} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default RelatedContent;
