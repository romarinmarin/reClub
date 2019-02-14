import React, { Component } from "react";
import { firebaseLooper, reverser } from "../../Ui/misc";
import { firebaseMatches } from "../../../firebase";

class EditMatches extends Component {
  comonentDidMount() {
    firebaseMatches.vonce("value").then(snapshot => {
      let data = firebaseLooper(snapshot);
      console.log(data);
    });
  }
  render() {
    return <div />;
  }
}

export default EditMatches;
