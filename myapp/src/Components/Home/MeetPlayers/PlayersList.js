import React, { Component } from "react";
import PlayerCard from "../../Ui/PlayerCard";
import { firebasePlayers } from "../../../firebase";
import { firebaseLooper } from "../../Ui/misc";
import Animate from "react-move/Animate";
import { easePolyOut } from "d3-ease";

class PlayersList extends Component {
  state = { players: [], show: false };

  componentDidMount() {
    firebasePlayers
      .limitToLast(4)
      .once("value")
      .then(snapshot => {
        this.setState({ players: firebaseLooper(snapshot) });
      })
      .then(() => {
        let updateState = {
          players: [
            { ...this.state.players[0], left: 300, bottom: 90 },
            { ...this.state.players[1], left: 200, bottom: 60 },
            { ...this.state.players[2], left: 100, bottom: 30 },
            { ...this.state.players[3], left: 0, bottom: 0 }
          ],
          show: true
        };
        this.setState(updateState);
      });
  }

  showPlayerCards = show => {
    return this.state.players.map((p, i) => {
      let { left, bottom } = p;

      return (
        <Animate
          key={i}
          show={show}
          start={{
            left: 0,
            bottom: 0
          }}
          enter={{
            left: [left],
            bottom: [bottom],
            timing: { duration: 500, ease: easePolyOut },
            events: {
              end() {}
            }
          }}
        >
          {({ left, bottom }) => {
            return (
              <div
                style={{
                  position: "absolute",
                  left,
                  bottom
                }}
              >
                <PlayerCard player={p} />
              </div>
            );
          }}
        </Animate>
      );
    });
  };

  render() {
    return <div>{this.showPlayerCards(this.state.show)}</div>;
  }
}

export default PlayersList;
