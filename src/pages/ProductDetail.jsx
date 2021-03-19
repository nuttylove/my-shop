import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageList from '../components/ImageList';
import { Button } from 'rsuite';

const ProductDetail = () => {
  const { name } = useParams();
  const [img, setImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('S');
  const [color, setColor] = useState('Red');

  useEffect(() => {
    setImg({ ...ImageList.find(f => f.props.alt === name).props });
    return () => {
      setImg(null);
      setColor('red');
    };
  }, [name]);

  return (
    <>
    <div className="grid-row">
      <img {...img} className="detail-img" alt='detail' />
      <span>Name <span>{name}</span></span>
      <span>Color 
        <Button onClick={() => setColor('Red')} className='bg-black' color="red" appearance="ghost">Red</Button>
        <Button onClick={() => setColor('Blue')} className='bg-black' color="blue" appearance="ghost">Blue</Button>
        <Button onClick={() => setColor('Green')} className='bg-black' color="green" appearance="ghost">Green</Button>
      </span>
      <span>Size 
        <Button onClick={() => setSize('S')}>S</Button>
        <Button onClick={() => setSize('M')}>M</Button>
        <Button onClick={() => setSize('L')}>L</Button>
      </span>
      <span>Quantity 
        <Button appearance="ghost" onClick={() => setQuantity(n => n + 1)}>+</Button>
        <span>{quantity}</span>
        <Button appearance="ghost" onClick={() => setQuantity(n => n - 1 ?? 1)}>-</Button>
      </span>
      <div className='grid-button'>
        <Button appearance="ghost" size="lg">Back</Button>
        <Button appearance="primary" size="lg">Book</Button>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
