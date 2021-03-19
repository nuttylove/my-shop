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
      {img.map((f, idx) => <div key={idx}><img {...f.props} className="cart-img" alt={f?.props?.alt} /><span>{f?.props?.alt}</span><span>{f?.quantity}</span></div>)}
    </div>
    </>
  );
}

export default withRouter(ProductCart);
