import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import { IoMdStar } from "react-icons/io"

import { FaRegLaughSquint } from "react-icons/fa"

import "../styles/faq.css"

const Joking = () => (
  <Layout>
    <SEO title="acting" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={6}>
          <p className="faq-p">
            <b>Самый лучший шутник - Жека со смеху умерека</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaRegLaughSquint />
            </span>{" "}
            Смешно рассказать то что было - $108/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaRegLaughSquint />
            </span>{" "}
            Смешно рассказать то чего не было - $200/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaRegLaughSquint />
            </span>{" "}
            Смешно рассказать то чего не было, а потом пойти и это сделать -
            цена по договоренности
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
            <p className="review">Отзыв</p>
            <p className="review-author">-кто-то-</p>
          </Col>
        </Col>
        <Col xs={10} md={6} className="joke" />
      </Row>
    </Grid>
  </Layout>
)

export default Joking
