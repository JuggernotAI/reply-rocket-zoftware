import Cookies from "universal-cookie";
import "./Reply.css";
import { useState, useEffect } from "react";

const cookies = new Cookies();

export default function Reply(props) {
  const [content, setContent] = useState(props.tweet.reply);

  function resizeEdit() {
    const elements = document.getElementsByClassName("reply-content-edit");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.height = "auto";
      elements[i].style.height = elements[i].scrollHeight + "px";
    }
  }

  function handleEdit(e) {
    setContent(e.target.value);
    props.setTweets(
      props.tweets.map((tweet) => {
        if (tweet.tweet_id === props.tweet.tweet_id) {
          tweet.reply = e.target.value;
        }
        return tweet;
      })
    );
    console.log(props.tweets);
    resizeEdit();
  }

  useEffect(() => {
    resizeEdit();
  }, [props.edit]);

  return (
    <div className="reply flex-container-row">
      <div className="reply-image-container flex-container-column flex-item">
        <img
          className="reply-profile-image flex-item"
          src={cookies.get("profile_pic")}
          alt="profile"
        />
      </div>
      {props.edit ? (
        <textarea
          onChange={handleEdit}
          value={content}
          className="reply-content-edit flex-item"
        />
      ) : (
        <div className="reply-content flex-item">{content}</div>
      )}
    </div>
  );
}
