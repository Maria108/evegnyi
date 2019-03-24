import React from "react"

import Layout from "../components/layout"
import Carousel from "../components/carousel"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import "../styles/home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`super`, `star`]} />
    <Grid>
      <Row className="first-section-home">
        <Col xs={12} md={12}>
          <Carousel />
        </Col>
      </Row>
    </Grid>
  </Layout>
)

export default IndexPage
