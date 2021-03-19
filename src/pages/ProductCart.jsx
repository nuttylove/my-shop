import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ImageList from '../components/ImageList';
import { useSelector } from 'react-redux';

const ProductCart = ({ history }) => {
  const { book } =  useSelector(state => state.app);
  const [img, setImg] = useState([]);

  useEffect(() => {
    setImg([...book].map(b => ({ ...ImageList.find(f => f.props.alt === b.name), quantity: b.quantity })));
    return () => setImg([]);
  }, [book]);

  return (
    <>
    <div className="grid-row">
    {console.log(img)}
      {img.map((f, idx) => <span key={idx}><img {...f} className="cart-img" alt={f?.alt} /> {f?.alt} <span>{f?.quantity}</span></span>)}
    </div>
    </>
  );
}

export default withRouter(ProductCart);
