import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import { IoMdStar } from "react-icons/io"

import { FaCameraRetro } from "react-icons/fa"

import "../styles/faq.css"

const Photo = () => (
  <Layout>
    <SEO title="acting" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={6}>
          <p className="faq-p">
            <b>Самый лучший фотограф - Жека руки-фотики</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCameraRetro />
            </span>{" "}
            Фотография с серьезным лицом на паспорт: рекомендуем сначала
            воспользоваться услугой шуток - $108/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCameraRetro />
            </span>{" "}
            Фотография вас в состоянии дзен и самом выгодном свете: услуга
            возможна только после того, как вы попробовали Женину выпечку -
            $216/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCameraRetro />
            </span>{" "}
            Фотобомба: вы увидите неожиданно для себя Женю на всех ваших фото -
            $300/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaCameraRetro />
            </span>{" "}
            Фотография с коровками: плата не взимается, это Жене самому в
            большую радость
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
              Я фотограф и взяла пару уроков у Жени, он меня научил крутым
              трюкам - как фотографировать две свадьбы одновременно в разных
              местах, как фотографировать не снимая крышку с объектива и как
              фотографировать без фотоаппарата
            </p>
            <p className="review-author">-Милена А-</p>
          </Col>
        </Col>
        <Col xs={10} md={6} className="photo" />
      </Row>
    </Grid>
  </Layout>
)

export default Photo
