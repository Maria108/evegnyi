import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import { FaCircle } from "react-icons/fa"

import "../styles/faq.css"

const Cooking = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={5}>
          <p className="faq-p">
            <b>Самый лучший повар - Жека пекарь</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{" "}
            Пекарь на дому $100/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{" "}
            Пекарь для общественного мероприятия $150/час{" "}
            <span className="cross-text">$390</span>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCircle />
            </span>{" "}
            Пекарь для Кришны $priceless/час{" "}
            <span className="cross-text">$780</span>
          </p>
        </Col>
        <Col xs={10} md={7} className="faq" />
      </Row>
    </Grid>
  </Layout>
)

export default Cooking
