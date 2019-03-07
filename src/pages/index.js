import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import "../styles/bootstrap.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`super`, `star`]} />
    <Grid>
      <Row>
        <Col xs={12} md={12} className="first-section-home">
          <Row>
            <Col xs={6} md={7}>
              <div className="first-section-home-slogan">
                <p className="lighter-brighter">Evgenyi Super Star</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Layout>
)

export default IndexPage
