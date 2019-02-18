import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import firebase from "firebase";
class AdminNav extends Component {
  state = {
    links: [
      { name: "matches", to: "/admin_matches" },
      { name: "Add Match", to: "/admin_matches/add_match" }
    ]
  };

  renderLinks = () => {
    return this.state.links.map(l => {
      return (
        <Link to={l.to} key={l.name}>
          <ListItem
            button
            style={{
              color: "#ffffff",
              fontWeight: "300",
              borderBottom: "1px solid #353535"
            }}
          >
            {l.name}
          </ListItem>
        </Link>
      );
    });
  };

  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(data => {
        console.log("user logged out");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        {this.renderLinks()}
        <ListItem
          button
          style={{
            color: "#ffffff",
            fontWeight: "300",
            borderBottom: "1px solid #353535"
          }}
          onClick={this.logOut}
        >
          LogOut
        </ListItem>
      </div>
    );
  }
}

export default AdminNav;
