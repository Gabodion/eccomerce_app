import React  from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';


const Navigation = () => {

const cartItem = useSelector(state => state.cartItem)

    return (
        <div>
            <Navbar bg="light" expand="lg" className="Nav__wrapper">
                <Container>
                    <Navbar.Brand href="#home" className="Nav__logo">G-shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto Nav__links">
                           <Nav.Link className="Nav__link--item"> <Link to="/">Home</Link></Nav.Link>
                     
                            <NavDropdown title="Pages"  className="Nav__link--item"id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="Nav__link--item"><Link to="/products">Products</Link></Nav.Link>
                            <Nav.Link href="#home" className="Nav__link--item">Shop</Nav.Link>
                            <Nav.Link href="#home" className="Nav__link--item">Blog</Nav.Link>
                            <Nav.Link href="#home" className="Nav__link--item">Contact</Nav.Link>
                            <Link to="/cart"><Button variant="outline-dark" className='Nav__link--item'>Cart({cartItem.length})</Button></Link>
                            {/* <Link to="/cart" className="Nav__link--item"><ShoppingCartIcon /> <span className='Nav__cart--count'>{cartItem.length}</span></Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;
