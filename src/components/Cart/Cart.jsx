import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions/counterActions';
import { removeFromCart, increaseQty, decreaseQty } from '../../actions/cartActions';
import "./Cart.css"
import {Link} from 'react-router-dom';
import Navigation from '../Navbar/Navbar';
import { slider } from '../../assets';

const Cart = () => {

    const products = useSelector(state => state.cartItem)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='Cart__wrapper shadow'>
                <div className='border-dark'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-6'>
                            <div className='py-4 px-4'>
                                <div className='d-flex justify-content-between align-items-center '>
                                    <h2 className='fs-4 fw-bold'>Shopping Cart</h2>
                                    <p className='text-black-50 mb-0'>3 items</p>
                                </div>
                                {
                                    products.map(product => {
                                        return (
                                            <div className='Cart__container mt-4 '>
                                                <hr />
                                                <div className='cart__content d-flex align-items-center justify-content-between mt-4'>
                                                    <img src={product.image} width="15%" className='ms-0' style={{objectFit: "content"}}/>
                                                    <div className=''>
                                                        <p className='my-0'>{product.category}</p>
                                                        <p className='my-0 fw-bold'>{product.title.slice(0, 18)}</p>
                                                    </div>

                                                    <div className='d-flex align-items-center'>
                                                        <button className='border-0 px-2 bg-transparent fs-3' onClick={() => dispatch(increaseQty(product))}>+</button>
                                                        <button className='border-light bg-transparent py-0 px-2'>{product.qty}</button>
                                                        <button className='border-0 px-2 bg-transparent fs-3' onClick={() => dispatch(decreaseQty(product))}>-</button>
                                                    </div>
                                                    <p className='fw-bold fs-6 mb-0'>${product.qty * product.price}</p>
                                                    <button className='bg-dark text-white px-1 py-1 btn' onClick={() => dispatch(removeFromCart(product))}>Delete</button>
                                                </div>

                                            </div>
                                        )
                                    })
                                }



                                <hr />
                                <Link className='bg-dark text-white mt-5 btn' to="/">Back</Link>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 bg-light'>
                            <div className='py-4 px-2'>
                                <h2 className='fs-4 fw-bold text-dark mt-4'>Summary</h2>
                                <hr />
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='fw-semibold'>ITEMS 3</p>
                                    <p className='fw-semibold'>$143</p>
                                </div>
                                <div className='mt-3'>
                                    <p className='fw-semibold'>SHIPPING</p>
                                    <select class="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className='mt-4'>
                                    <p className='fw-semibold'>GIVE CODE</p>
                                    <select class="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <hr className='mt-5' />
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='fw-semibold'>TOTAL PRICE</p>
                                    <p className='fw-semibold'>$143</p>
                                </div>
                                <button className='bg-dark text-white mt-5 btn w-100'>Checkout</button>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <h3 className="Cart__heading--title">Shopping Cart</h3>
                <hr />
          
                        {products.map(product => {
                            
                            return (
                                <div className='Cart__container'>
                                        <div className='Cart__content'>
                                            <img src={product.image} className='Cart__img' />
                                        
                                        
                                            <div className='Cart__item'>
                                                <h1 className='Cart__title'>{product.title.slice(0, 30)}.....</h1>
                                                <h3 className='Cart__total'>{product.qty} X ${product.price} = ${product.qty * product.price}</h3>
                                                <Button variant='outline-dark' onClick={() => dispatch(increaseQty(product))}>+</Button>
                                                <Button variant='outline-dark' onClick={() => dispatch(decreaseQty(product))}>-</Button>

                                            </div>
                                            <Button variant="dark" onClick={() => dispatch(removeFromCart(product))}>Delete</Button>
                                        </div>
                                        <hr />
                                    
                                </div>
                               
                            )
                        })} */}

            </div>
        </div>
    )
}

export default Cart