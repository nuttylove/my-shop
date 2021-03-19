import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ImageList from '../components/ImageList';
import { useDispatch, useSelector } from 'react-redux';
import { bookConfirm } from '../store/actions';

const ProductCart = ({ history }) => {
  const dispatch = useDispatch();
  const { book } =  useSelector(state => state.app);
  const [img, setImg] = useState([]);

  useEffect(() => {
    setImg([...book].map(b => ({ ...ImageList.find(f => f.props.alt === b.name).props, quantity: b.quantity })));
    return () => setImg([]);
  }, [book]);

  return (
    <>
    <div className="grid-row">
      {img.map((f, idx) => <span key={idx}><img {...f} className="cart-img" alt={f?.alt} /> {f?.alt} <span>{f?.quantity}</span></span>)}
    </div>
    </>
  );
}

export default withRouter(ProductCart);
