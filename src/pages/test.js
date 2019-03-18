import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gallery from "../components/reactcar"

import { Grid, Row, Col } from "react-bootstrap"

import { FaCircle } from "react-icons/fa"

import "../styles/faq.css"

const Test = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={12} md={12}>
          <div>
            <p>Чтобы получить поздравление пройдите тест</p>
          </div>
        </Col>
        <Gallery />
      </Row>
    </Grid>
  </Layout>
)

export default Test
