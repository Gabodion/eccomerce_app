import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions/counterActions';
import { removeFromCart, increaseQty, decreaseQty } from '../../actions/cartActions';
import "./Cart.css"
import Navigation from '../Navbar/Navbar';

const Cart = () => {

    const products = useSelector(state => state.cartItem)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='Cart__wrapper'>

                <h3 className="Cart__heading--title">Shopping Cart</h3>
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
                        })}




           






            </div>
        </div>
    )
}

export default Cart