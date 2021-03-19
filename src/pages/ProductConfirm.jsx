import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { bookConfirm } from '../store/actions';

const ProductConfirm = ({ history }) => {
  const dispatch = useDispatch();
  const { add } =  useSelector(state => state.app);

  const confirm = () => {
    dispatch(bookConfirm());
    history.push('/');
  };

  return (
    <>
    <div className="grid-row">
      <p>Confirm Booking</p>
      <span>Name <span>{add?.name}</span></span>
      <span>Color <span>{add?.color}</span></span>
      <span>Size <span>{add?.size}</span></span>
      <span>Quantity <span>{add?.quantity}</span></span>
      <div className='grid-button'>
        <Button appearance="ghost" size="lg" onClick={() => history.goBack()}>Back</Button>
        <Button appearance="primary" size="lg" onClick={confirm()}>Confirm</Button>
      </div>
    </div>
    </>
  );
}

export default withRouter(ProductConfirm);
