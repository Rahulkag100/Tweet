import React  , {useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tweet from "./Tweet";
import TweetCard from "./TweetCard";

function App() {
  //to store tweet(object) in a array using state to update the page
    const [tweets , setTweets] = useState([]);

    //add tweet recieved from createArea.jsx
    function addTweetData(newTweet){
        setTweets(prevTweets => {
            return [...prevTweets , newTweet]
        })
    }
    window.setInterval(function(){
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
      
        var randate = year + '-' + month + '-' + day;
        var rantime = hours+ ':' + min;
        
        
        setTweets(prevTweets => {
            var id ;
            for(var i = 0 ; i < prevTweets.length ; i++){
             if(prevTweets[i].somedate === randate && prevTweets[i].time === rantime){
             id = prevTweets[i].somedate + prevTweets[i].time;
             }
        }
            
         return prevTweets.filter((oneTweet)=>{
             var check = oneTweet.somedate+oneTweet.time;
            return check !== id ;
       })
   })
        
    }, 1000);

return (
    <div>

      <Header />
      <TweetCard 
       onAdd={addTweetData}   
      />
     { tweets.length > 0 ? tweets.map((oneTweet, index)=>{
          return ( <Tweet 
          key={index}
          id={index} 
          somedate={oneTweet.somedate} 
          content={oneTweet.content}
          time={oneTweet.time}
          />
          )
      }):null}
    
      <Footer />
    </div>
  );
}

export default App;

