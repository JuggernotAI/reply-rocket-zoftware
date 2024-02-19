import "./Tweet-Header.css";

export default function TweetHeader(props) {
  return (
    <div className="tweet-header flex-container-row">
      <div className="tweet-profile-name flex-item">{props.tweet.name}</div>
      {props.tweet.verified ? (
        <img
          src="images/twitter-verified.png"
          alt="verified"
          className="twitter-verified flex-item"
        />
      ) : null}
      <div className="tweet-profile-handle flex-item">
        @{props.tweet.username}
      </div>
    </div>
  );
}
