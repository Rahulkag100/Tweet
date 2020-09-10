import React, { useState } from "react";
function TweetCard(props) {

    /* This function is used to get current date and time */
        var todayDate = new Date();
        var month = todayDate.getMonth() + 1;     
        var day = todayDate.getDate();
        var year =todayDate.getFullYear();
        var min = todayDate.getMinutes();
        var hours = todayDate.getHours();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        if(min < 10)
            min = '0' + min.toString();
        if(hours < 10)
            hours = '0' + hours.toString();
      
        var mindate = year + '-' + month + '-' + day;
        var mintime = hours+ ':' + min;

    /* initial state of tweet (single) */
    const [tweet , setTweet] = useState({
        somedate: "",
        content: "",
        time:""
    });

    /* Get the data from the user */
    function handleChange(e){
        const {name , value} = e.target;    

        setTweet(prevTweet => {
            return{
                ...prevTweet,
                [name] : value
            };
        });
    }

    /* submit button */
    function submitTweet(event){

       
      
        if(tweet.content !== ''  && tweet.somedate !== undefined && tweet.somedate !== '' && tweet.time !== undefined && tweet.time !== '')
        {
        props.onAdd(tweet);
        }
        else
        {
        alert("Please write the correct data")}
        document.test.reset();
        setTweet({
            somedate: "",
            content: "",
            time:""
        });
        event.preventDefault();
    }

  return (
    <div>
      <form name="test">
        <textarea className="textarea" name="content" onChange={handleChange} value={tweet.content}placeholder="write tweet here..." rows="3" />
        <input name="somedate" onChange={handleChange} type="date" min={mindate} ></input>
        <input type="time" onChange={handleChange} min={mintime} name="time" />
        <button className="tweetButton" onClick = {submitTweet}>Tweet</button>
      </form>
    </div>
  );
}
export default TweetCard;