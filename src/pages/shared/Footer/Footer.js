import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import logo from '../../../images/logo-white.png'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer' >
            <Container>
                <Row >
                    <Col sm={12} lg={3} md={6}  className="mb-3">
                        <img src={logo} alt="" srcset="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet adipisci repellat facere enim nulla nostrum.</p>
                    </Col>
                    <Col sm={12} lg={3} md={6}  className="mb-3">
                        <h6>Usefull link</h6>
                        <ul>
                            <li><Link to='#'>Popular place</Link></li>
                            <li><Link to='#'>Awesome tour</Link></li>
                            <li><Link to='#'>Best World</Link></li>
                            <li><Link to='#'>Near You</Link></li>
                        </ul>
                    </Col>
                    <Col sm={12} lg={3} md={6}  className="mb-3">
                        <h6>Usefull link</h6>
                        <ul>
                            <li><Link to='#'>Popular place</Link></li>
                            <li><Link to='#'>Awesome tour</Link></li>
                            <li><Link to='#'>Best World</Link></li>
                            <li><Link to='#'>Near You</Link></li>
                        </ul>
                    </Col>
                    <Col sm={12} lg={3} md={6}   className="mb-3">
                        <h6>Usefull link</h6>
                        <ul>
                            <li><Link to='#'>Popular place</Link></li>
                            <li><Link to='#'>Awesome tour</Link></li>
                            <li><Link to='#'>Best World</Link></li>
                            <li><Link to='#'>Near You</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;