import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <Row>
      {data.map((i) => (
        <Col sm={6} md={4} lg={3}>

          <Link style={{textDecoration:"none"}} to={`contactView/${i.id}`}>
            <Card>
              <Card.Img
                className="p-2  border border-primary"
                style={{ height: "350px", width: "100%" }}
                variant="top"
                src={i.profile}
              />
              <Card.Body>
                <Card.Title>{i.username}</Card.Title>
                <Card.Text>{i.place}</Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Place : {i.place} </ListGroup.Item>
                  <ListGroup.Item>email : {i.email} </ListGroup.Item>
                  <ListGroup.Item>contact : {i.mobile} </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Link>

        </Col>
      ))}
    </Row>
  );
}

export default Cards;
