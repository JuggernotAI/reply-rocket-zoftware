import { useState } from "react";
import Actions from "../Actions Bar/Actions";
import Reply from "../Reply/Reply";
import Tweet from "../Tweet/Tweet";
import "./Tweet-Card.css";

const twitterAPI = require("../../api/twitter");

export default function TweetCard(props) {
  const [edit, setEdit] = useState(false);

  function toggleEdit() {
    setEdit(!edit);
  }

  function removeTweet() {
    props.setTweets(
      props.tweets.filter((tweet) => tweet.tweet_id !== props.tweet.tweet_id)
    );
  }

  function replyTweet() {
    twitterAPI
      .replyToTweet(props.tweet.tweet_id, props.tweet.reply)
      .then((res) => {
        console.log(res);
        removeTweet();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="tweet-card flex-container-column">
      <Tweet tweet={props.tweet} />
      <div className="tweet-card-divider"></div>
      <Reply
        setTweets={props.setTweets}
        tweets={props.tweets}
        tweet={props.tweet}
        edit={edit}
      />
      <Actions
        tweets={props.tweets}
        setTweets={props.setTweets}
        edit={edit}
        toggleEdit={toggleEdit}
        replyTweet={replyTweet}
        removeTweet={removeTweet}
      />
    </div>
  );
}
