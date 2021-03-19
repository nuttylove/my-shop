import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import ImageList from '../components/ImageList';
import { Button } from 'rsuite';
import { useDispatch } from 'react-redux';
import { bookAdd } from '../redux/actions';

const ProductDetail = ({ history }) => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('S');
  const [color, setColor] = useState('Red');

  useEffect(() => {
    setImg({ ...ImageList.find(f => f.props.alt === name) });
    return () => {
      setImg(null);
      setColor('red');
      setSize('S');
    };
  }, [name]);

  const book = async () => {
    await dispatch(bookAdd({ name, quantity, color, size }));
    history.push('/confirm');
  };

  return (
    <div className='layout'>
    <div className="grid-row">
      <img {...img?.props} className="detail-img" alt='detail' />
      <span>Name <span>{name}</span></span>
      <span>Color 
        <Button onClick={() => setColor('Red')} color="red" appearance="ghost">Red</Button>
        <Button onClick={() => setColor('Blue')} color="blue" appearance="ghost">Blue</Button>
        <Button onClick={() => setColor('Green')} color="green" appearance="ghost">Green</Button>
      </span>
      <span>Size 
        <Button onClick={() => setSize('S')}>S</Button>
        <Button onClick={() => setSize('M')}>M</Button>
        <Button onClick={() => setSize('L')}>L</Button>
      </span>
      <span>Quantity 
        <Button appearance="ghost" onClick={() => setQuantity(n => n + 1)}>+</Button>
        <span>{quantity}</span>
        <Button appearance="ghost" onClick={() => setQuantity(n => (n - 1) > 0 ? n - 1 : 1)}>-</Button>
      </span>
      <div className='grid-button'>
        <Button appearance="ghost" size="lg" onClick={() => history.goBack()}>Back</Button>
        <Button appearance="primary" size="lg" onClick={() => book()}>Book</Button>
      </div>
    </div>
    </div>
  );
}

export default withRouter(ProductDetail);
