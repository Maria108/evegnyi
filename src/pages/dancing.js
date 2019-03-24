import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import { IoMdStar } from "react-icons/io"

import { FaBomb } from "react-icons/fa"

import "../styles/faq.css"

const Dancing = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={6}>
          <p className="faq-p">
            <b>Самый лучший танцор - Жека дискотека</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBomb />
            </span>{" "}
            Хоровод с неограниченным количеством людей, снежинок и зайчиков
            вокруг ёлки - $108/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBomb />
            </span>{" "}
            Фирменный танец Супермена - $208/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBomb />
            </span>{" "}
            Организация Харинамы при любых обстоятельствах - $300/час{" "}
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
              После Жениных уроков, я могу давать мастер классы не только по
              харинамным танцам, но еще и по брейк дансу в паре с Даней
            </p>
            <p className="review-author">-Надя Х-</p>
          </Col>
        </Col>
        <Col xs={10} md={6} className="dance" />
      </Row>
    </Grid>
  </Layout>
)

export default Dancing
