import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope, faMapMarked, faMapPin, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './Fact.css'
const Fact = () => {
    const map = <FontAwesomeIcon icon={faMapMarked} />
    const world = <FontAwesomeIcon icon={faGlobeEurope} />
    const thumbsup = <FontAwesomeIcon icon={faThumbsUp} />
    return (
        <div className="fact-bg fact">
            <Container>
                <Row>
                    <Col>
                        <div className="single-fact">
                            <i>{ map}</i>
                            <h5>Total Travel</h5>
                            <h4>1k+</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="single-fact">
                            <i>{ world}</i>
                            <h5>Travel Country</h5>
                            <h4>30</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="single-fact">
                            <i>{ thumbsup}</i>
                            <h5>Five Star Rating</h5>
                            <h4>200+</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Fact;