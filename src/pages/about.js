import React from "react"
import { Col, Row } from "react-bootstrap"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import PrimaryLayouts from "../layouts/PrimaryLayouts"

export default () => (
  <PrimaryLayouts xs="12" md="10">
    <div className="mt-5">
      <h1>About Us</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  </PrimaryLayouts>
)
