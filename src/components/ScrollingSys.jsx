import React from "react";
import PropTypes from "prop-types";
import Interactive from "react-interactive";
import { HashLink as Link } from "react-router-hash-link";
import { About, Event, Contact, Menu1 } from "./exporter";
import "./ScrollingSys.css";
import objectAssign from "object-assign";

const propTypes = {
  location: PropTypes.object.isRequired,
};

function ScrollingSys({ location }) {
  return (
    <>
      {/** 
      <NavSys style={{ visibility: "hidden" }} />
      */}
      <section style={objectAssign({ backgroundColor: "#E0E0E0" })} id="About">
        <div className="dropdown">
          <h3 className="text">
            Go to <i class=" icon fa fa-angle-double-right"></i>
          </h3>

          <ul className="ul">
            {Menu1.map((menuItems, index) => {
              return (
                <li className="li" key={index}>
                  <Interactive
                    className="a"
                    as={Link}
                    scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                    to={`${menuItems.path}`}
                  >
                    {menuItems.name}
                  </Interactive>
                </li>
              );
            })}
          </ul>
          {/** First ul closed */}
        </div>

        <About />
      </section>
      {/*---------------------------------------------------------------------------------*/}

      <section style={objectAssign({ backgroundColor: "#D0D0D0" })} id="Event">
        <div className="dropdown">
          <h3 className="text">
            Go to <i class=" icon fa fa-angle-double-right"></i>
          </h3>

          <ul className="ul">
            {Menu1.map((menuItems, index) => {
              return (
                <li className="li" key={index}>
                  <Interactive
                    className="a"
                    as={Link}
                    smooth
                    to={`${menuItems.path}`}
                  >
                    {menuItems.name}
                  </Interactive>
                </li>
              );
            })}
          </ul>
        </div>

        <Event />
      </section>
      {/*--------------------------------------------------------------------------------------------------------------------*/}

      <section
        style={objectAssign({ backgroundColor: "#C0C0C0" })}
        id="Contact"
      >
        <div className="dropdown">
          <h3 className="text">
            Go to <i class=" icon fa fa-angle-double-right"></i>
          </h3>

          <ul className="ul">
            {Menu1.map((menuItems, index) => {
              return (
                <li className="li" key={index}>
                  <Interactive
                    className="a"
                    as={Link}
                    smooth
                    to={`${menuItems.path}`}
                  >
                    {menuItems.name}
                  </Interactive>
                </li>
              );
            })}
          </ul>
        </div>

        {/** Third ul closed */}
        <Contact />
      </section>
    </>
  );
}

ScrollingSys.propTypes = propTypes;

export default ScrollingSys;
