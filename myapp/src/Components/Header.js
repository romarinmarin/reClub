import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CityLogo from "./Ui/Icon";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#98c5e9",
        boxShadow: "none",
        padding: "10px 0",
        borderBottom: "2px solid #00285e"
      }}
    >
      <Toolbar style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <CityLogo
              url="https://via.placeholder.com/75"
              width="75px"
              height="75px"
              isLinked={true}
              linkedTo="/"
            />
          </div>
        </div>
        <Link to="/the_team">
          <Button color="inherit">The team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
