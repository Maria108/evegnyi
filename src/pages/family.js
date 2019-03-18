import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Row, Col } from "react-bootstrap"

import { IoMdStar } from "react-icons/io"

import { FaUserFriends } from "react-icons/fa"

import "../styles/faq.css"

const Family = () => (
  <Layout>
    <SEO title="acting" />
    <Grid>
      <Row className="div-about-faq">
        <Col xs={2} md={6}>
          <p className="faq-p">
            <b>Самый лучший папа и муж - Жека ?</b>
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaUserFriends />
            </span>{" "}
            - $100/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaUserFriends />
            </span>{" "}
            - $100/час{" "}
          </p>
          <p className="faq-p">
            <span className="third-section-about-icon">
              <FaUserFriends />
            </span>{" "}
            - $100/час{" "}
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
        <Col xs={10} md={6} className="fam" />
      </Row>
    </Grid>
  </Layout>
)

export default Family
