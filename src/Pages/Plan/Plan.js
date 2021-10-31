import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Plan = (props) => {
    const { title, description, cost } = props.plan;
    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Body>
                        <Card.Title>{title} ${cost}/ 2 days</Card.Title>
                        <Card.Text>
                            <p> {description}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={"/home"}><Button variant="info" className="font-monospace">Enroll</Button></Link>
                    </Card.Footer>
                </Card>
            </Col>

        </div>
    );
};

export default Plan;