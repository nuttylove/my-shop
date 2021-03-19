import React, { useState } from 'react';
import Slide from '../components/Slide';
import ImageList from '../components/ImageList';
import { withRouter, Link } from 'react-router-dom';

const ProductList = () => {
  const [ slider ] = useState(ImageList);

  return (
    <div className='layout'>
    <Slide slider={slider} />
    <div className="grid-col">
      {slider.map(f => <Link key={f.key} to={`/detail/${f.props.alt}`}>{f}</Link>)}
    </div>
    </div>
  );
}

export default withRouter(ProductList);
