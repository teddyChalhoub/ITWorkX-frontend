import axios from "axios";
import React, { useState } from "react";

function App() {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const handleSend = async (e) => {
    setSent(true);
    try {
      const data = await axios.post(
        "http://localhost:5000/NodeMailer/send_mail",
        {
          text: text,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      {!sent ? (
        <form onSubmit={handleSend}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit">Send Email</button>
        </form>
      ) : (
        <h1>Email Sent</h1>
      )}
    </div>
  );
}

export default App;
