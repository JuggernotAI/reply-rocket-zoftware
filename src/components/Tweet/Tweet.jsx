import TweetHeader from "../Tweet Header/Tweet-Header";
import "./Tweet.css";

export default function Tweet(props) {
  return (
    <div className="tweet flex-container-row">
      <div className="tweet-image-container flex-container-column flex-item">
        <img
          className="tweet-profile-image flex-item"
          src={props.tweet.profile_image_url}
          alt="profile"
        />
      </div>
      <div className="tweet-content-container flex-container-column flex-item">
        <TweetHeader tweet={props.tweet} />
        <div className="tweet-content flex-item">{props.tweet.tweet}</div>
      </div>
    </div>
  );
}
