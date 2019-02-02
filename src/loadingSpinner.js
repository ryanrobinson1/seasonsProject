import React from "react";

const LoadingSpinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui loader">{props.loadingMessage}</div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  loadingMessage: "Loading.. "
};

export default LoadingSpinner;
