import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import _ from "lodash";
import "./style.scss";
import { SIDE_BAR } from "../../app-constants";

class Menu extends React.Component {
  state = {};
  render() {
    const { history } = this.props;
    return (
      <div className="menu-wrapper">
        <Navbar
          expand="md"
          className="d-flex justify-content-center nav-wrapper"
        >
          <Nav navbar>
            {SIDE_BAR.map((item) => {
              return (
                <NavItem>
                  <NavLink href={`/${item.key}`}>{item.text}</NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
