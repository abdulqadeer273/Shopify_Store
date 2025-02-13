import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Dashboard() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Total Sales</Card.Title>
            <Card.Text>Rs. 500,000 PKR</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Total Orders</Card.Title>
            <Card.Text>1200</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>New Customers</Card.Title>
            <Card.Text>150</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Dashboard;
