import "./Actions.css";

export default function Actions(props) {
  return props.edit ? (
    <div className="actions-bar flex-container-row">
      <section
        onClick={props.toggleEdit}
        className="action-button send-button flex-item"
      >
        Save
      </section>
    </div>
  ) : (
    <div className="actions-bar flex-container-row">
      <section
        onClick={props.removeTweet}
        className="action-button delete-button flex-item"
      >
        <img
          className="trash-icon"
          src="/images/trash.png"
          alt="delete
        "
        ></img>
      </section>
      <section
        onClick={props.toggleEdit}
        className="action-button edit-button flex-item"
      >
        <img className="edit-icon" src="/images/edit.png" alt="edit"></img>
        Edit
      </section>
      <section
        onClick={props.replyTweet}
        className="action-button send-button flex-item"
      >
        <img className="send-icon" src="/images/send.png" alt="send"></img>Send
      </section>
    </div>
  );
}
