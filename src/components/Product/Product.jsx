import React, { useEffect, useState, } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import "./Product.css";
import {Link} from 'react-router-dom';
import { getProductId } from '../../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';

const Product = () => {

    const [data, setData] = useState([]);
    const [products, setProducts] = useState(data)
    
    const dispatch = useDispatch();


    // getProduct()
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const newdata = await response.json();
            setData(newdata)
            setProducts(newdata)
           
        }

        getProduct()
    }, [])

    const filterProduct = (cat) => {
        const updatedProductList = data.filter(product => product.category === cat);
        setProducts(updatedProductList)
    }



    return (
        <div className='Product__wrapper'>
            <Title heading="Our Products" />
            <div className='d-flex Product__btn flex-wrap'>
                <Button variant='outline-dark' className='Product__btn--select mb-3' onClick={() => setProducts(data)}>All</Button>
                <Button variant='outline-dark' className='Product__btn--select mb-3' onClick={() => filterProduct("men's clothing")}>Men's clothing</Button>
                <Button variant='outline-dark' className='Product__btn--select mb-3'  onClick={() => filterProduct("women's clothing")}>Women's clothing</Button>
                <Button variant='outline-dark' className='Product__btn--select mb-3'  onClick={() => filterProduct("jewelery")}>Jewelery</Button>
                <Button variant='outline-dark' className='Product__btn--select mb-3'  onClick={() => filterProduct("electronics")}>Electronics</Button>
            
            </div>
            
            <Container>
                <Row>
            {
                products.map(product => {
                    return (
                        <Col lg="4" md="6" data-filter="men's clothing">
                            <Card key={product.id} style={{ width: '18rem' }} className="Product__content">
                                <Card.Img variant="top" src={product.image} className="Product__image" />
                                <Card.Body>
                                    <Card.Title className='Product__title'>{(product.title).slice(0, 20)}...</Card.Title>
                                    <Card.Text className='Product__text'>
                                        $ {product.price}
                                    </Card.Text>
                                    <Link to="/product"><Button variant="danger" onClick={() =>dispatch(getProductId(product.id))}>Buy Now</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
                </Row>
            </Container>



        </div>
    )
}

export default Product
