import React, { Component } from "react";

export default class Landing extends Component {
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
                
                  <a href="#" className='p2'>
                    {" "}
                    {/**a place holder for the routing */}
                    <button className="w3-button w3-round-large w3-khaki">
                      get started
                    </button>
                  </a>
                
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
