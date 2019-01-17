import React, { Component } from "react";
import Featured from "./Featured/Featured";
import MatchesHome from "./matches";
import MeetPlayers from "./MeetPlayers";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bck_blue">
          <Featured />
        </div>
        <MatchesHome />
        <MeetPlayers />
      </div>
    );
  }
}

export default Home;
