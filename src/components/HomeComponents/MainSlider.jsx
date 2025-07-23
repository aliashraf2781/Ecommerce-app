import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false, 
    };
    return (
        <div className="mb-6 w-[98vw] mx-auto bg-background">
            <Slider {...settings} className="w-full">
                <div className="flex items-center justify-center ">
                    <div >
                        <img src="https://pixishoes.com/cdn/shop/files/pixi_-_desktop_banner_e0a11282-7345-459a-860c-d15a009e2fae.png?v=1752498355&width=2000" alt="" className="w-full" />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <img src="https://pixishoes.com/cdn/shop/files/b1.png?v=1752159084&width=1880" alt="" className="w-full"/>
                    </div>
                </div>
            </Slider>
        </div>
    );
}