import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class LandingView extends Component {
  render() {
    return (
      <div>
        <div className="circles-container">
          <img
            className="big-purple"
            src="/images/large-purple-ellipse.png"
            alt="corner purple ellipse"
          />
          <img
            className="big-yellow"
            src="/images/large-yellow-ellipse.png"
            alt="large yellow ellipse"
          />
          <img
            className="small-purple"
            src="/images/small-purple-ellipse.png"
            alt="small purple ellipse"
          />
          <img
            className="small-yellow"
            src="/images/small-yellow-ellipse.png"
            alt="small yellow ellipse"
          />
        </div>
        <div className="intro-container">
          <div className="wrapper">
            <header>
              <div className="intro-content">
                <h1>bibliofeels</h1>
                <p className="p1">for the love of books.</p>
                <Link to='/input' className="p2">
                  <button className="w3-btn w3-round-large w3-khaki">
                    get started
                  </button>
                </Link>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
