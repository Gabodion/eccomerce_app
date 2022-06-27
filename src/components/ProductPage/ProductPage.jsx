import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../Navbar/Navbar';
import { addToCart } from '../../actions/cartActions';

import "./ProductPage.css";


const ProductPage = () => {

    const [product, setProduct] = useState([]);
    const productId = useSelector(state => state.productId);
    
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(addToCart(product));
    }
   

    // getProduct()
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            setProduct(data)
        }

        getProduct()
    }, [])

  return (
    <>

        <div className='Item__wrapper'>
            <Container>
                <Row>
                    <Col lg="6" md="12">
                        <Image fluid="true" src={product.image} width="60%" className='Item__img'/>
                    </Col>
                    <Col lg="6" md="12" className='Item__details'>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <hr/>
                        <div className='Item__count__content'>
                            <p className='Item__price'>${product.price}</p>
                            <Button variant="danger" className='w-100 Item__btn--cart' onClick={handleClick}>Add Cart</Button>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
        
    </>
  )
}

export default ProductPage