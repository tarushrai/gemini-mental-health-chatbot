import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:5000/chat", { message });
    setResponse(res.data.reply);
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold">Mental Health Chatbot</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="p-2 border rounded-md"
      />
      <button onClick={sendMessage} className="mt-2 p-2 bg-blue-500 text-white">
        Send
      </button>
      <p className="mt-2 text-lg">{response}</p>
    </div>
  );
};

export default App;
