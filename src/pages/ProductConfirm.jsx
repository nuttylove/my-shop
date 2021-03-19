import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { bookConfirm } from '../redux/actions';

const ProductConfirm = ({ history }) => {
  const dispatch = useDispatch();
  const { add } =  useSelector(state => state.app);

  const confirm = async () => {
    await dispatch(bookConfirm());
    history.push('/');
  };

  return (
    <div className='layout'>
    <div className="grid-row">
      <h5>Confirm Booking</h5>
      <span>Name <span>{add?.name}</span></span>
      <span>Color <span>{add?.color}</span></span>
      <span>Size <span>{add?.size}</span></span>
      <span>Quantity <span>{add?.quantity}</span></span>
      <div className='grid-button'>
        <Button appearance="ghost" size="lg" onClick={() => history.goBack()}>Back</Button>
        <Button appearance="primary" size="lg" onClick={() => confirm()}>Confirm</Button>
      </div>
    </div>
    </div>
  );
}

export default withRouter(ProductConfirm);
