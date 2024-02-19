import "./Navbar.css";
const twitterAPI = require("../../api/twitter");

export default function Navbar(props) {
  function reDirectToCompanySite() {
    window.open("https://juggernot.ai/", "_blank");
  }

  function replyAll() {
    props.setShowLoading(true);
    twitterAPI.replyAll(props.tweets).then((res) => {
      alert("All tweets replied successfully");
      props.setShowLoading(false);
      window.location.reload();
    });
  }

  return (
    <nav className="navbar flex-container-row">
      <img
        onClick={reDirectToCompanySite}
        className="navbar-logo flex-item"
        src="images/logo.png"
        alt="logo"
      />
      <div
        onClick={replyAll}
        className="reply-all-conatiner flex-container-row"
      >
        <section className="reply-all-button flex-item">Reply All</section>
        <img
          className="flex-item reply-all-image"
          src="images/reply all.png"
          alt="refresh"
        />
      </div>
    </nav>
  );
}
