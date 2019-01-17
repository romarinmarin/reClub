import React, { Component } from "react";
import { Tag } from "../../Ui/misc";
import PlayersList from "./PlayersList";

class MeetPlayers extends Component {
  render() {
    return (
      <div className="home_meetplayers">
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrapper">
              <PlayersList />
            </div>
            <div className="home_text_wrapper">
              <div>
                <Tag
                  background="#0e1731"
                  fontSize="100px"
                  color="#fff"
                  add={{
                    display: "inline-block",
                    marginBottom: "20px"
                  }}
                >
                  Meet
                </Tag>
              </div>
              <div>
                <Tag
                  background="#0e1731"
                  fontSize="100px"
                  color="#fff"
                  add={{
                    display: "inline-block",
                    marginBottom: "20px"
                  }}
                >
                  The
                </Tag>
              </div>
              <div>
                <Tag
                  background="#0e1731"
                  fontSize="100px"
                  color="#fff"
                  add={{
                    display: "inline-block",
                    marginBottom: "20px"
                  }}
                >
                  Players
                </Tag>
              </div>
              <div>
                <Tag
                  background="#ffffff"
                  fontSize="22px"
                  color="#0e1731"
                  isLinked={true}
                  linkTo="/the_team"
                  add={{
                    display: "inline-block",
                    marginBottom: "20px",
                    border: "1px solid #0e1731"
                  }}
                >
                  Meet them here
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetPlayers;
