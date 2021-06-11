import React, { Component } from "react";
import LandingView from "../views/LandingView";
import InputView from "../views/InputView";
import ResultView from "../views/ResultView";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      book: "",
    };
  }

  handleSubmitEmotion = async (e, emotion) => {
    e.preventDefault();
    const res = await fetch(`/recommend?emotions=${[emotion]}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonResponse = await res.json();
    console.log(jsonResponse[0].id)
    this.setState({
      book: jsonResponse[0]
    })
  };
  render() {
    const {book} = this.state
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingView} />
          <Route
            exact
            path="/input"
            render={() => <InputView onSubmit={this.handleSubmitEmotion} bookID={book.id}/>}
          />
          <Route exact path={`/book/:${book.id}`} render={() => <ResultView book={book}/>} />
        </Switch>
      </div>
    );
  }
}
