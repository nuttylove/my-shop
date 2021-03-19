import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Slide = ({ slider }) => {
	return <AliceCarousel items={slider} autoPlay mouseTrackingEnabled={false} disableAutoPlayOnAction={false} autoPlayInterval='1000' />;
};

export default Slide;
