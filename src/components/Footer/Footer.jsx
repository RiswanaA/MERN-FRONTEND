
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";
import "../../styles/footer.css";


const quickLinks = [
    {
        path:'/about',
        display:'About'
    },
    {
        path:'#',
        display:'Privacy Policy'
    },
    {
        path:'/carsdisplay',
        display:'Cars'
    },
    {
        path:'/contact',
        display:'Contact'
    }
]

const Footer = () =>{
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='5' md='4' sm='12'>
                    <div className="logo footer__logo">
                        <h1>
                            <Link to="/home" className="d-flex align-items-center
                            gap-2">
                                <i class="ri-car-line"></i>
                                <span>
                                    Rent Car <br /> Service
                                </span>
                            </Link>
                        </h1>
                    </div>
                    <p className="footer__logo-content">
                    Our sincere commitment for customer-oriented service is written in 'RNSV Customer Promise'. 
                    We always consider each customer a valuable driver and strive to satisfy our customers by offering excellent services.

                    </p>
                </Col>

                <Col lg='4' md='4' sm= '6'>
                    <div className="mb-4">
                        <h5 className="footer__link-title">Quick Links</h5>
                        <ListGroup>
                            {
                                quickLinks.map((item, index)=>(
                                    <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                                    <Link to ={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg = "3" md = "4">
                    <div className="mb-4">
                        <h5 className="footer__link-title mb-4">Head Office</h5>
                        <p className="office__info">C-111 AbahaNagar, New Delhi,
                        India</p>
                        <p className="office__info">Phone: +91 7777666600</p>
                        <p className="office__info">Email: carsbooking@rnsv.com</p>
                        <p className="office__info">Office Time: 9 AM - 6 PM</p>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;