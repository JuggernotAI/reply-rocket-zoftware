import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import TweetCard from "../../components/Tweet Card/Tweet-Card";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Stats from "../../components/Information Bar/Stats";

const twitterAPI = require("../../api/twitter");
const cookies = new Cookies();

export default function Dashboard() {
  const [showLoading, setShowLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate();

  // const sample_tweet = {
  //   tweet_id: "123456789",
  //   tweet:
  //     "This is a small change, but a big move for us. 140 was an arbitrary choice based on the 160 character SMS limit. Proud of how thoughtful the team has been in solving a real problem people have when trying to tweet. And at the same time maintaining our brevity, speed, and essence!",
  //   reply:
  //     "This is a small change, but a big move for us. 140 was an arbitrary choice based on the 160 character SMS limit. Proud of how thoughtful the team has been in solving a real problem people have when trying to tweet. And at the same time maintaining our brevity, speed, and essence!",
  // };

  useEffect(() => {
    document.title = "ReplyRocket | Juggernot.ai";
    const access_token = cookies.get("access_token");
    const access_secret = cookies.get("access_secret");
    console.log("Token: ", access_token);
    console.log("Secret: ", access_secret);
    if (!access_token || !access_secret) {
      navigate("/");
      return;
    }
    twitterAPI
      .getTweetsAndReplies()
      .then((res) => {
        setTweets(res);
        setShowLoading(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
        return;
      });
  }, []);

  return (
    <div className="dashboard flex-container-column">
      <Navbar setShowLoading={setShowLoading} tweets={tweets} />
      {showLoading ? (
        <img src="/images/loading.gif" alt="loading" />
      ) : (
        <div className="dashboard-content flex-container-row">
          <Stats tweet_count={tweets.length} />
          {tweets.map((tweet) => (
            <TweetCard
              key={tweet.tweet_id}
              setTweets={setTweets}
              tweets={tweets}
              tweet={tweet}
            />
          ))}
          {/* <TweetCard key={sample_tweet.tweet_id} tweet={sample_tweet} /> */}
        </div>
      )}
    </div>
  );
}
