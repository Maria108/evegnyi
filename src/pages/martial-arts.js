import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import { FaBolt } from "react-icons/fa"
import { IoMdStar } from "react-icons/io"

import "../styles/faq.css"

const Martial = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={6}>
          <p className="faq-p">
            <b>Стиль борьбы СИСТЕМА - Жека воин</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBolt />
            </span>{" "}
            Персональный телохранитель $108/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBolt />
            </span>{" "}
            Ускоритель мытья посуды на фестивалях $216/час
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBolt />
            </span>{" "}
            Тренер по подготовке к Курукшетре $324/час{" "}
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
              Я обращался к Жене за услугами и ни разу не пожалел, теперь могу
              из лука в муху попасть на расстоянии 1км
            </p>
            <p className="review-author">-Шамиль-</p>
          </Col>
        </Col>
        <Col xs={10} md={6} className="pekar" />
      </Row>
    </Grid>
  </Layout>
)

export default Martial
