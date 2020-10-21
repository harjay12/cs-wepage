import React, { Component } from "react";
import "./NavSys.css";
import { Menu2 } from "./exporter";

export default class NavSys extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navBar">
        <div>
          <div className="hamburger" onClick={this.handleClick}>
            <i className={this.state.clicked ? "close" : "fas fa-bars"}></i>
          </div>
        </div>

        <ul className={this.state.clicked ? "nav-links-active" : "nav-links"}>
          {Menu2.map((menuItems, index) => {
            return (
              <li key={index}>
                <a href={menuItems.path}>{menuItems.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
