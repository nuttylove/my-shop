import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageList from '../components/ImageList';
import { Button } from 'rsuite';

const ProductDetail = () => {
  const { name } = useParams();
  const [img, setImg] = useState(null);

  useEffect(() => {
    setImg({ ...ImageList.find(f => f.props.alt === name).props });
    return () => setImg(null);
  }, [name]);

  return (
    <>
    <div className="grid-row">
      <img {...img} className="detail-img" />
      <span>Name <span>{name}</span></span>
      <span>Color 
        <Button color="red" appearance="ghost">Red</Button>
        <Button color="blue" appearance="ghost">Blue</Button>
        <Button color="green" appearance="ghost">Green</Button>
      </span>
      <span>Size 
        <Button appearance="ghost">S</Button>
        <Button appearance="ghost">M</Button>
        <Button appearance="ghost">L</Button>
      </span>
      <span>Quantity 
        <Button appearance="ghost">+</Button>
        <span>1</span>
        <Button appearance="ghost">-</Button>
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
