import React, { Component } from "react";
import LandingView from '../views/LandingView'
import InputView from '../views/InputView'
import {Switch, Route, Redirect} from 'react-router-dom'

export default class App extends Component {
  
  handleSubmitEmotion = (e, emotion) => {
    e.preventDefault()
    console.log(emotion)
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={LandingView}/>
          <Route exact path='/input' render={() => 
            (<InputView onSubmit={this.handleSubmitEmotion}/>)
          }/>
        </Switch>
      </div>
    );
  }
}
