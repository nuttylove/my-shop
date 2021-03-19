import React, { useState } from 'react';
import Slide from '../components/Slide';
import ImageList from '../components/ImageList';
import { withRouter } from 'react-router-dom';

const ProductList = ({ history }) => {
  const [ slider ] = useState(ImageList);

  return (
    <>
    <Slide slider={slider} />
    <div className="grid-col">
      {slider.map(f => <a key={f.key} onClick={() => history.push(`/detail/${f.props.alt}`)}>{f}</a>)}
    </div>
    </>
  );
}

export default withRouter(ProductList);
