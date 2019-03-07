import React from "react"

import "../styles/footer.css"
import { Row, Col, Grid } from "react-bootstrap"

import { FaMapMarkerAlt, FaPhone, FaRegClock } from "react-icons/fa"

const Footer = () => (
  <footer className="footer">
    <Grid className="box-footer">
      <Row>
        <Col xs={6} md={6}>
          <div>
            <p className="footer-contact">Contact</p>
            <div className="footer-contact">
              <FaMapMarkerAlt /> 313 7th St, Brooklyn, NY, 11215
            </div>
            <div className="footer-contact">
              <FaPhone /> <a href="tel:+16463859985">646-385-9985</a>
            </div>
            <div className="footer-contact">
              <FaRegClock /> Wed-Fri 8:00AM - 7:00PM
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer
