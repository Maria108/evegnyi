import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

// import Gallery from "../components/reactcar"
import { IoMdStar } from "react-icons/io"

import { FaDrumstickBite } from "react-icons/fa"

import "../styles/faq.css"

const Cooking = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={6}>
          <p className="faq-p">
            <b>Самый лучший повар - Жека пекарь</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaDrumstickBite />
            </span>{" "}
            Пекарь на дому $100/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaDrumstickBite />
            </span>{" "}
            Пекарь для общественного мероприятия $150/час <br /> (Пакет из трех
            мероприятий $120/час)
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaDrumstickBite />
            </span>{" "}
            Пекарь для Кришны $priceless{" "}
          </p>
          <Col xs={12} md={12}>
            <p className="rating">
              {" "}
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </p>
            <p className="review">
              Я и раньше могла готовить неплохо, но после Жениного курса могу
              готовить суп одной ногой и одновременно липить пироги читая джапу
            </p>
            <p className="review-author">-Оксана (Сулакшана)-</p>
          </Col>
        </Col>
        <Col xs={10} md={6} className="pekar" />
      </Row>
    </Grid>
  </Layout>
)

export default Cooking
