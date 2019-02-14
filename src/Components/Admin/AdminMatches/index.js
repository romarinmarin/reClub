import React, { Component } from "react";
import AdminLayout from "../../AdminLayout";
import { firebaseLooper, reverser } from "../../Ui/misc";
import { firebaseMatches } from "../../../firebase";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

class AdminMatches extends Component {
  state = { isLoading: true, matches: [] };

  componentDidMount() {
    firebaseMatches.once("value").then(snapshot => {
      this.setState({
        isLoading: false,
        matches: reverser(firebaseLooper(snapshot))
      });
    });
  }

  render() {
    let matchesHtml = this.state.matches
      ? this.state.matches.map((match, i) => {
          console.log(match);

          return (
            <TableRow key={i}>
              <TableCell>{match.date}</TableCell>
              <TableCell>
                {match.away} - {match.local}
              </TableCell>
              <TableCell>
                {match.resultAway} - {match.resultLocal}
              </TableCell>
              <TableCell>
                {match.final === "Yes" ? "Final" : "Not final yet"}
              </TableCell>
            </TableRow>
          );
        })
      : null;

    let loadingHtml = this.state.isLoading ? (
      <CircularProgress thickness={7} style={{ color: "#98c5e9" }} />
    ) : null;

    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Match</TableCell>
                  <TableCell>Result</TableCell>
                  <TableCell>Final</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{matchesHtml}</TableBody>
            </Table>
          </Paper>
          <div className="admin_progress">{loadingHtml}</div>
        </div>
      </AdminLayout>
    );
  }
}

export default AdminMatches;
