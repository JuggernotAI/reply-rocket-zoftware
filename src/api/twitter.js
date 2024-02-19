import instance from "./init";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getTweetsAndReplies = async () => {
  return await instance
    .get(
      "/twitter/gpt?access_token=" +
        cookies.get("access_token") +
        "&access_secret=" +
        cookies.get("access_secret"),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return { error: error.message };
    });
};

export const replyToTweet = async (tweetId, replyText) => {
  // const body = {
  //   tweet_id: tweetId,
  //   reply: replyText,
  //   access_token: cookies.get("access_token"),
  //   access_secret: cookies.get("access_secret"),
  // };

  const formData = new FormData();
  formData.append("tweet_id", tweetId);
  formData.append("reply", replyText);
  formData.append("access_token", cookies.get("access_token"));
  formData.append("access_secret", cookies.get("access_secret"));

  try {
    const response = await instance.post("/twitter/reply", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export const replyAll = async (replies) => {
  const body = {
    replies: replies,
    access_token: cookies.get("access_token"),
    access_secret: cookies.get("access_secret"),
  };

  try {
    const response = await instance.post("/twitter/replyall", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};
