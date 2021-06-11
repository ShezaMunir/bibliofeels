import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const emotions = {
  tentative: "tentative",
  bold: "confident",
  rational: "analytical",
  sorrowful: "sandness",
  joyful: "joy",
  spooked: "Fear",
  frustrated: "Anger",
};

class InputView extends Component {
  constructor() {
    super();
    this.state = {
      choice: "",
    };
  }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Todo: update book in the state
  //   // Todo: make AJAX request to the backend to retrieve result
  //   // Todo: route to the result page
  // };
  render() {
    const { onSubmit } = this.props;
    return (
      <div className="take-info">
        <p>what do you want to feel right now?</p>
        <form
          onSubmit={(event) => {
            onSubmit(event, document.getElementById("emotion").value);
            this.props.history.push("/");
          }}
          className="take-info"
        >
          <div>
            <select id="emotion">
              {Object.keys(emotions).map((emotion) => (
                <option key={emotion} value={emotion}>
                  {emotion}
                </option>
              ))}
            </select>

            <button className="w3-btn w3-round-large w3-khaki" type="submit">
              suggest
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(InputView)