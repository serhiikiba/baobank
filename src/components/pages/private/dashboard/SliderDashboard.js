import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//bg-img
import first from "../../../../assets/slider/advertisement_first.jpg";
import second from "../../../../assets/slider/advertisement_second.jpg";
import third from "../../../../assets/slider/advertisement_third.jpg";
import forth from "../../../../assets/slider/advertisement_forth.jpg";
import fifth from "../../../../assets/slider/advertisement_fifth.jpg";

import "./sliderDachboard.scss";

function SliderDashboard() {
    const sliders = [
        {
            bg: first,
            text: 'SALES OFF 15%'
        },
        {
            bg: second,
            text: 'SALES OFF 30%'
        },
        {
            bg: third,
            text: 'SALES OFF 10%'
        },
        {
            bg: forth,
            text: 'SALES OFF 25%'
        },
        {
            bg: fifth,
            text: 'SALES OFF 5%'
        },
    ];

    return (
        <Carousel
            showArrows={false}
            autoPlay={true}
            interval={9000}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            stopOnHover={false}
        >
            {sliders.map((slide, i) => (
                <div key={i} className="slid" style={{ backgroundImage: `url(${slide.bg})` }}>{slide.text}</div>
            ))}

        </Carousel>

    )
}

export default SliderDashboard;