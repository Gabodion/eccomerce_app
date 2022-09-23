import React from 'react';
import { Card, Row, Col, Container} from 'react-bootstrap';
import Title from '../Title/Title';
import "./Features.css"
import featureData from "./featuresData";

const Features = () => {
    return (
        <>
        
        <div className='Card__wrapper'>
        <Title heading="Why Shop With Us"/>
            <Container>
                <Row>
                {
                    featureData.map(data => {
                        return (
                            <Col lg="4" md="6">
                        <Card  bg="dark" text="light" className="Card__content">
                            <Card.Body>
                                <p>{data.icon}</p>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.desc}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    )
                    
                    })
                }
                    
                </Row>
            </Container>

        </div>
        </>
    )
}

export default Features
