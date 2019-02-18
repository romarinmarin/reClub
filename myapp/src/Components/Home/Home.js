import React, { Component } from "react";
import Featured from "./Featured/Featured";
import MatchesHome from "./matches";
import MeetPlayers from "./MeetPlayers";
import Promotions from "./Promotions";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bck_blue">
          <Featured />
        </div>
        <MatchesHome />
        <MeetPlayers />
        <Promotions />
      </div>
    );
  }
}

export default Home;
