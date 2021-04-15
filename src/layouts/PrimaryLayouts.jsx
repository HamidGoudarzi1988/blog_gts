import React from "react"
import { Col, Row } from "react-bootstrap"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import SEO from "../components/SEO"

const PrimaryLayouts = props => {
  return (
    <div>
    <SEO/>
      <Header />
      <div className="container">
        <Row className="justify-content-md-center">
          <Col xs={props.xs} md={props.md}>
            {props.children}
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default PrimaryLayouts
