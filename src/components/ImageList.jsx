import img1 from '../images/RNOV-1.jpeg';
import img2 from '../images/RNOV-2.jpeg';
import img3 from '../images/RNOV-3.jpeg';
import img4 from '../images/RNOV-4.jpeg';

export default [ { image: img1, alt: 'RNOV-1' }, { image: img2, alt: 'RNOV-2' }, { image: img3, alt: 'RNOV-3' }, { image: img4, alt: 'RNOV-4' } ].map((f, idx) => <img key={idx} src={f.image} className='slider-img' alt={f.alt} />);
