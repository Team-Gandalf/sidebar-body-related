import React from 'react';
import Slider from 'react-slick';
import EachPicture from './sub-components/EachPicture.jsx';

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
      <div className="leftcolumn">
        <h2>MORE FROM HALF-LIFE FRANCHISE</h2>
        <Slider {...settings}>
          {data.relatedcontent.map((item, i) => (
            <EachPicture item={item} key={item} index={i} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default RelatedContent;
