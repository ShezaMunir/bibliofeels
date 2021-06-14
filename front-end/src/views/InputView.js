import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const emotions = {
  tentative: "tentative",
  bold: "confident",
  rational: "analytical",
  sorrowful: "sadness",
  joyful: "joy",
  spooked: "fear",
  frustrated: "anger",
};

class InputView extends Component {
  state = {
    disabled: true,
  };
  handleChange = () => {
    const selection = document.getElementById("emotion").value;
    this.setState({
      disabled: selection === "select a mood",
    });
  };
  handleSubmit = (event) => {
    const { onSubmit } = this.props;
    onSubmit(event, emotions[document.getElementById("emotion").value]);
    this.props.history.push(`/result`);
  };
  render() {
    return (
      <div className="take-info">
        <p>what do you want to feel right now?</p>
        <form onSubmit={this.handleSubmit} className="take-info">
          <div>
            <select id="emotion" onChange={this.handleChange} className='choose'>
              <option defaultValue="select a mood" className='choose'>select a mood</option>
              {Object.keys(emotions).map((emotion) => (
                <option key={emotion} value={emotion}>
                  {emotion}
                </option>
              ))}
            </select>
            {this.state.disabled ? (
              <button className="button" type="submit" disabled>
                suggest
              </button>
            ) : (
              <button className="button" type="submit">
                suggest
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(InputView);
