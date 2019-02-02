import React from "react";
import ReactDOM from "react-dom";

const SeasonConfig = {
  summer: {
    text: "It is summer",
    iconName: "sun"
  },
  winter: {
    text: "It is winter",
    iconName: "snowflake"
  }
};

const GetSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const RenderContent = () => {};

const seasonsDisplay = props => {
  const season = GetSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

/* -what does the seasonsdisplay componenet do-
takes in the latitude and works out whether in north or south hemisphere
based on that shows summer or winter message
*/

export default seasonsDisplay;
