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
              <FaMapMarkerAlt /> 26 2nd Ave, New York, NY, 10003
            </div>
            <div className="footer-contact">
              <FaPhone /> 917-108-1008
            </div>
            <div className="footer-contact">
              <FaRegClock /> Mon-Fri 8:00AM - 7:00PM
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer
