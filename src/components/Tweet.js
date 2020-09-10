import React from "react";
function Tweet(props){
    return (
        <div className="tweetcard">
          <p>{props.content}</p>
          <h5>{props.somedate} {props.time}</h5>
        </div>
      );
}

export default Tweet;


