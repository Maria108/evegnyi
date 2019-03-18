import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import { IoMdStar } from "react-icons/io"

import { FaTheaterMasks } from "react-icons/fa"

import "../styles/faq.css"

const Acting = () => (
  <Layout>
    <SEO title="acting" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={6}>
          <p className="faq-p">
            <b>Самый лучший актер - Жека Ди Каприо</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaTheaterMasks />
            </span>{" "}
            Сыграть Дед Мороза $108/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaTheaterMasks />
            </span>{" "}
            Сыграть Снегурочку $208/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaTheaterMasks />
            </span>{" "}
            Сыграть Дед Мороза и Снегурочку $308/час{" "}
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
            <p className="review-author">-Кто-то-</p>
          </Col>
        </Col>
        <Col xs={10} md={6} className="acting" />
      </Row>
    </Grid>
  </Layout>
)

export default Acting
