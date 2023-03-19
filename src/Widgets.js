import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("I'm in the game", "Top News - 11360 readers")}
      {newsArticle("Clasico", "Hala Madrid - 13655 readers")}
      {newsArticle(
        "Réforme des retraites",
        "Ils ont sorti le 49.3 - 23025 readers"
      )}
      {newsArticle("Bitcoin breaks", "25k - 19000 readers")}
    </div>
  );
}

export default Widgets;
