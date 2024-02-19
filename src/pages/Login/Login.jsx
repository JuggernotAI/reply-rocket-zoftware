import "./Login.css";

export default function Login() {
  function reDirectToCompanySite() {
    window.open("https://juggernot.ai/", "_blank");
  }

  function reDirectToTwitterOauth() {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/oauth/twitter`);
  }

  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <img
            onClick={reDirectToCompanySite}
            className="navbar-logo flex-item"
            src="images/logo.png"
            alt="logo"
          />
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Reply Rocket</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus odit nihil ullam nesciunt quidem iste, Repellendus
              odit nihil
            </p>
            <button onClick={reDirectToTwitterOauth}>Login with Twitter</button>
          </div>
          <div className="image">
            <img alt="" src="https://i.postimg.cc/65QxYYzh/001234.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
