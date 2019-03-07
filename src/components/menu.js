import { Link } from "gatsby"

import { Grid } from "react-bootstrap"

import "../styles/bootstrap.scss"

import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

import "../styles/menu.css"

export default class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Grid>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Evgeniy</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-links" navbar>
              <NavItem>
                <Link to="/">HOME</Link>
              </NavItem>
              <NavItem>
                <Link to="/poetry">POETRY</Link>
              </NavItem>
              <NavItem>
                <Link to="/cooking">COOKING</Link>
              </NavItem>
              <NavItem>
                <Link to="/dancing">DANCING</Link>
              </NavItem>
              <NavItem>
                <Link to="/acting">ACTING</Link>
              </NavItem>
              <NavItem>
                <Link to="/joking">JOKING</Link>
              </NavItem>
              <NavItem>
                <Link to="/martial-arts">MARTIAL ARTS</Link>
              </NavItem>
              <NavItem>
                <Link to="/photographer">PHOTOGRAPHER</Link>
              </NavItem>
              <NavItem>
                <Link to="/family">HUSBAND AND PAPA</Link>
              </NavItem>
              <NavItem>
                <Link to="/test">TEST</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Grid>
    )
  }
}
