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
            Вы хотите лёгкую очаровательную улыбку и приподнятое настроение? -
            $108/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaRegLaughSquint />
            </span>{" "}
            Вы хотите смеяться до слёз и вспомнить давно забытые брюшные мышцы?
            - $200/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaRegLaughSquint />
            </span>{" "}
            Вы хотите пойти ва-банк и хохотать так, чтоб вас порвало и вынесло
            из тела? - $300/час{" "}
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
              После общения с Женей у меня сразу же прошла зимняя хандра, сошёл
              заговор уныния, выпрямился позвоночник, на дворе запели птицы и я
              пошла сажать помидоры прямо в снег.
            </p>
            <p className="review-author">-Ульяна-</p>
          </Col>
        </Col>
        <Col xs={10} md={6} className="joke" />
      </Row>
    </Grid>
  </Layout>
)

export default Joking
