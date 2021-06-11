import React, { Component } from "react";

const emotions = {
  tentative: "tentative",
  bold: "confident",
  rational: "analytical",
  sorrowful: "sandness",
  joyful: "joy",
  spooked: "Fear",
  frustrated: "Anger",
};

export default class InputView extends Component {
  constructor() {
    super();
    this.state = {
      choice: "",
      book: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // Todo: update book in the state
    // Todo: make AJAX request to the backend to retrieve result
    // Todo: route to the result page
  };
  render() {
    return (
      <div className="take-info">
        <p>what do you want to feel right now?</p>
        <form onSubmit={this.handleSubmit} className='take-info'>
          <div>
            <select id="emotion">
              {Object.keys(emotions).map((emotion) => (
                <option key={emotion} value={emotion}>
                  {emotion}
                </option>
              ))}
            </select>
            <a  href='#'>
              <button className='w3-btn w3-round-large w3-khaki' type='submit'>
                suggest
              </button>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
