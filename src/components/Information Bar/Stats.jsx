import "./Stats.css";

export default function Stats(props) {
  return (
    <div className="stats-container flex-container-row">
      <section className="fetched-tweets flex-container-row flex-item">
        Count:{" "}
        <section className="fetched-tweets-count flex-item">
          {props.tweet_count} Posts Fetched
        </section>
      </section>
      <section className="date flex-item">
        📆{" "}
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
      </section>
    </div>
  );
}
