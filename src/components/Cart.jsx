import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);

  const removeItem = (id)=> {
      dispatch(remove(id))
  }

  const cards = products.map((product) => (
    <div className="col-md-12" style={{marginBottom:'10px'}} key={product.id}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>$:{product.price}</Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-center">
        <Button variant="danger" onClick={()=>removeItem(product.id)}> Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));


  return (
    <div className='row'>
     {cards}
    </div>
  )
}

export default Cart