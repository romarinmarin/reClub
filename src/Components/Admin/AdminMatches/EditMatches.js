import React, { Component } from "react";
import { firebaseLooper, reverser } from "../../Ui/misc";
import { firebaseDB, firebaseTeams } from "../../../firebase";
import FormErrors from "../../Ui/FormErrors";
import AdminLayout from "../../AdminLayout";

class EditMatches extends Component {
  state = {
    matchId: this.props.match.params.id,
    match: {},
    teams: [],
    stadiumValid: false,
    refereeValid: false,
    resultLocalValid: false,
    resultAwayValid: false,
    formValid: false,
    formSuccess: "",
    formErrors: { stadium: "", referee: "", resultLocal: "", resultAway: "" }
  };

  componentDidMount() {
    firebaseDB
      .ref(`matches/${this.state.matchId}`)
      .once("value")
      .then(snapshot => {
        this.updateField(snapshot.val());
      });

    this.getListTeams();
  }

  getListTeams = () => {
    firebaseTeams.once("value").then(snapshot => {
      reverser(firebaseLooper(snapshot)).forEach(t => {
        this.setState({
          teams: [...this.state.teams, t.shortName]
        });
      });
    });
  };

  renderListTeams = () => {
    return this.state.teams.map((t, i) => (
      <option key={i} value={t}>
        {t}
      </option>
    ));
  };

  updateField = match => {
    const entries = Object.entries(match);
    entries.forEach(e => {
      let tempMatch = this.state.match;

      this.setState({
        match: { ...tempMatch, [e[0]]: e[1] },
        [`${e[0]}Valid`]: true,
        formValid: true
      });
    });
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let stadiumValid = this.state.stadiumValid;
    let refereeValid = this.state.refereeValid;
    let resultLocalValid = this.state.resultLocalValid;
    let resultAwayValid = this.state.resultAwayValid;
    const regexNum = /^\d+$/;
    const regexAlpha = /^[a-zA-Z ]+$/;

    switch (fieldName) {
      case "stadium":
        stadiumValid = regexAlpha.test(value);

        fieldValidationErrors.stadium = stadiumValid ? "" : " is invalid";
        break;
      case "referee":
        refereeValid = regexAlpha.test(value);
        fieldValidationErrors.referee = refereeValid ? "" : " is invalid";
        break;
      case "resultLocal":
        resultLocalValid = regexNum.test(value);
        fieldValidationErrors.resultAway = resultLocalValid
          ? ""
          : " is invalid";
        break;
      case "resultAway":
        resultAwayValid = regexNum.test(value);
        fieldValidationErrors.resultLocal = resultAwayValid
          ? ""
          : " is invalid";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        stadiumValid,
        refereeValid,
        resultLocalValid,
        resultAwayValid
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      formValid:
        this.state.stadiumValid &&
        this.state.refereeValid &&
        this.state.resultLocalValid &&
        this.state.resultAwayValid
    });
  };

  succesForm = () => {
    this.setState({ formSuccess: "Match updated" });
    setTimeout(() => {
      this.setState({ formSuccess: "" });
    }, 3000);
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ match: { ...this.state.match, [name]: value } });
    this.validateField(name, value);
  };

  handleSubmit = e => {
    e.preventDefault();
    let formIsValid = this.state.formValid;

    let dataToSubmit = { ...this.state.match };
    console.log(dataToSubmit);

    if (formIsValid) {
      firebaseDB
        .ref(`matches/${this.state.matchId}`)
        .update(dataToSubmit)
        .then(() => {
          this.succesForm();
        })
        .catch(e => {
          this.setState({ formError: true });
          console.log("error" + e);
        });
    }
  };
  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>Edit match</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="label_inputs">Event date</div>
            <input
              name="date"
              type="date"
              onChange={this.handleChange}
              value={this.state.match.date}
            />
            <div className="select_team_layout">
              <div className="label_inputs">Local</div>
              <div className="wrapper">
                <div className="left">
                  <select
                    value={this.state.match.local}
                    name="local"
                    onChange={this.handleChange}
                  >
                    {this.renderListTeams()}
                  </select>
                </div>
                <div>
                  <input
                    onChange={this.handleChange}
                    name="resultLocal"
                    type="text"
                    value={this.state.match.resultLocal}
                  />
                </div>
              </div>
            </div>

            <div className="select_team_layout">
              <div className="label_inputs">Away</div>
              <div className="wrapper">
                <div className="left">
                  <select
                    value={this.state.match.away}
                    name="away"
                    onChange={this.handleChange}
                  >
                    {this.renderListTeams()}
                  </select>
                </div>
                <div>
                  <input
                    onChange={this.handleChange}
                    name="resultAway"
                    type="text"
                    value={this.state.match.resultAway}
                  />
                </div>
              </div>
            </div>

            <div className="label_inputs">Stadium</div>
            <input
              name="stadium"
              type="text"
              onChange={this.handleChange}
              value={this.state.match.stadium}
            />
            <div className="label_inputs">referee</div>
            <input
              name="referee"
              type="text"
              onChange={this.handleChange}
              value={this.state.match.referee}
            />
            <div className="label_inputs">Team result</div>
            <select
              value={this.state.match.result}
              name="result"
              onChange={this.handleChange}
            >
              <option value="W">W</option>
              <option value="N">N</option>
              <option value="D">D</option>
              <option value="n/a">n/a</option>
            </select>
            <div className="label_inputs">Game played ?</div>
            <select
              value={this.state.match.final}
              name="result"
              onChange={this.handleChange}
            >
              <option value="No">No</option>
              <option value="yes">Yes</option>
            </select>
            <FormErrors formErrors={this.state.formErrors} />
            <div className="admin_submit">
              <input
                disabled={!this.state.formValid}
                type="submit"
                value="Edit match"
              />
            </div>
            <div className="success_label">{this.state.formSuccess}</div>
          </form>
        </div>
      </AdminLayout>
    );
  }
}

export default EditMatches;
