import React, { Component } from "react";
import Featured from "./Featured/Featured";
import MatchesHome from "./matches";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bck_blue">
          <Featured />
        </div>
        <MatchesHome />
      </div>
    );
  }
}

export default Home;
