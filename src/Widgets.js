import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle} </p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2> Linkedin News </h2>
        <InfoIcon />
      </div>
      {newsArticle("Im come Back", "Top news - 1000 readers")}
      {newsArticle("Ukraine  War ", "Top news - 1023 readers")}
      {newsArticle("React Js PapaReact course", "Top news - 100000 readers")}
      {newsArticle(
        "Ruby on Rails — Rails 7.1.0 has been released!",
        "Teck info - 100000 readers"
      )}
      {newsArticle(
        "My Software Estimation Technique",
        "Teck info - 100000 readers"
      )}
      {newsArticle("HTML & CSS", "Teck info - 100000 readers")}
      {newsArticle(
        "New frontend framework, again?!",
        "Top news - 100000 readers"
      )}
    </div>
  );
}

export default Widgets;
