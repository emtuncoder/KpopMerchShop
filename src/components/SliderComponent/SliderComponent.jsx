import React from 'react'
import { Image } from 'antd'
import Slider from 'react-slick';

const SliderComponent = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed:3000,
        arrows:false
    };
    return (
        <Slider {...settings}>
            <Image preview={false} width="100%" height="100%" src="https://kpopmerch.com/cdn/shop/files/2025___PC_2000x.jpg?v=1730081878"></Image>
            <Image preview={false} width="100%" height="100%" src="https://kpopmerch.com/cdn/shop/files/PC_74d07efb-baa2-4b47-a148-67dc69c78a55_2000x.jpg?v=1728287075"></Image>
            <Image preview={false} width="100%" height="100%" src="https://kpopmerch.com/cdn/shop/files/PC_3429a9c3-7639-4384-b98c-c9583152dab3_2000x.jpg?v=1728286939"></Image>
            <Image preview={false} width="100%" height="100%" src="https://kpopmerch.com/cdn/shop/files/PC_5f165b58-c94b-4183-bce2-0ca1f7fd163b_2000x.jpg?v=1728368986"></Image>
        </Slider>


    )
}

export default SliderComponent
