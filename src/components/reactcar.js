import React from "react"
import AliceCarousel from "react-alice-carousel"
import { Row, Col } from "react-bootstrap"

import { IoMdStar } from "react-icons/io"
import "react-alice-carousel/lib/alice-carousel.css"

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseDragEnabled>
      <Row>
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
            -I've worked with Elena over the last past 2 years and she has
            helped improve my digestion, help my skin clear up and help guide me
            along the way with her vast knowledge in health and wellness. She
            has shown genuine concern and has been patient with me through my
            journey. I'm very grateful to have Elena in my life, I would
            definitely recommend this establishment if you are looking for
            improvements in you overall health and well being-
          </p>
          <p className="review-author">-Tiffany W-</p>
        </Col>
      </Row>
      <Row>
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
            -I love love Elena at Park Slope Colonics. I had loads of
            antibiotics growing up and my digestive system has been quite
            damaged (leaky gut etc). Elena is so pleasant to work with, I feel
            so comfortable and safe with her. Since I started getting colonics
            with Elena
          </p>
          <p className="review-author">-Maria A-</p>
        </Col>
      </Row>
    </AliceCarousel>
  )
}

export default Gallery
