import React from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import PrimaryLayouts from "../layouts/PrimaryLayouts"

export default params => (
  <PrimaryLayouts xs="12" md="6">
    <div className="pt-5">
      <h1>Contact Us</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </PrimaryLayouts>
)
