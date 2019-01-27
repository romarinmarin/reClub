import React, { Component } from "react";
import { reverser, firebaseLooper } from "../../Ui/misc";
import { firebaseMatches } from "../../../firebase";
import Slide from "react-reveal/Slide";
import Match from "../../Ui/Match";
class MatchesList extends Component {
  state = { matches: [] };

  componentDidMount() {
    firebaseMatches.once("value").then(snapshot => {
      this.setState({ matches: reverser(firebaseLooper(snapshot)) });
    });
  }
  render() {
    let htmlBlocks = this.state.matches.map((match, i) => (
      <div className="item" key={i}>
        <div className="wrapper">
          <Slide bottom>
            <Match match={match} />
          </Slide>
        </div>
      </div>
    ));

    return <div className="home_matches">{htmlBlocks}</div>;
  }
}

export default MatchesList;
