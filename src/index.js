import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./seasonsDisplay.js";
import LoadingSpinner from "./loadingSpinner";

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({ lat: pos.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    console.log("render content has been called");
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonsDisplay lat={this.state.lat} />;
    }

    return (
      <div>
        <LoadingSpinner loadingMessage="Please accept location request" />
      </div>
    );
  }

  render() {
    return <div className="doesnt exist">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
