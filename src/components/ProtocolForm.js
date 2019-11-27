import React from "react";
import { addProtocol } from "../api/protocols";

function ProtocolForm() {
  const [author, setAuthor] = React.useState("");
  const [date, setDate] = React.useState("");
  const [text, setText] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMsg("");

    const dateObj = new Date(date);
    const today = new Date();
    if (dateObj > today) {
      setErrorMsg("Date is in the future");
      return;
    }

    const protocol = {
      author,
      date,
      text
    };

    addProtocol(protocol);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author
        <input
          type="text"
          required
          value={author}
          onChange={event => setAuthor(event.target.value)}
        />
      </label>
      <label>
        Date
        <input
          type="date"
          required
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </label>
      <label>
        Text
        <textarea
          rows="20"
          required
          value={text}
          onChange={event => setText(event.target.value)}
        ></textarea>
      </label>
      <button type="reset">Reset</button>
      <button>Submit</button>
      {errorMsg && <div>{errorMsg}</div>}
    </form>
  );
}

export default ProtocolForm;
