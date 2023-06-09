import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";
import StatusCode from "../utils/StatusCode";





const Product = () => {
  // const [products, getProducts] = useState([]);


  const dispatch = useDispatch();
  const{data:products,status}=useSelector(state=>state.products)

  useEffect(() => {

    dispatch(getProducts());

    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, []);



  
  if (status === StatusCode.LOADING) {
    return <p>Loading ......</p>
  }

  if (status === StatusCode.ERROR) {
    return <Alert key='danger' variant="danger">
      Something went wrong!!!!! Try again later!
    </Alert>
  }


  const addToCart = (product) => {
    dispatch(add(product));
  }

  const cards = products.map((product) => (
    <div className="col-md-3" style={{marginBottom:'10px'}} key={product.id} >
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
        <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));




  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
