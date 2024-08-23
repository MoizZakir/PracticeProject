import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/multislide.css'


const Multislides = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    


return(
    
    <Carousel className="a"
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4300}
        keyBoardControl={true}
        rewind={true}
        rewindWithAnimation={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile",'desktop']}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-03.png" alt="" /></div>
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-04.png" alt="" /></div>
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-05.png" alt="" /></div>
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-06.png" alt="" /></div>
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-06.png" alt="" /></div>
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-04.png" alt="" /></div>
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-04.png" alt="" /></div>
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-04.png" alt="" /></div>
        <div className="mutislide-items"><img src="https://thewebions.com/reddotcafe/wp-content/uploads/2024/01/img-partner-04.png" alt="" /></div>
    

    </Carousel>)}

export default Multislides