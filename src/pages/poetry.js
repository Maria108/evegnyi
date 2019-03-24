import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import { IoMdStar } from "react-icons/io"

import { FaBookOpen } from "react-icons/fa"

import "../styles/faq.css"

const Poetry = () => (
  <Layout>
    <SEO title="faq" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={6}>
          <p className="faq-p">
            <b>Самый лучший поэт - Жека Грека</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBookOpen />
            </span>{" "}
            Сочинить стих/песню про друга - $108 <br /> (Пакет из трех друзей
            $158)
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBookOpen />
            </span>{" "}
            Сочинить стих/песню про врага - $208 <br /> (Пакет из трех врагов
            $258)
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaBookOpen />
            </span>{" "}
            Сочинить стих/песню про вас и чтобы вам понравилось - $300{" "}
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
              Я и раньше стихи умела слагать, но Кришна учит меня не врать, так
              что друзья скажу не тая, у Жени всему научилася я
            </p>
            <p className="review-author">-Маша А-</p>
          </Col>
        </Col>
        <Col xs={10} md={6} className="poet" />
      </Row>
    </Grid>
  </Layout>
)

export default Poetry
