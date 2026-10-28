import { useState } from "react";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      username: "System",
      text: "Welcome to your new community!",
    },
  ]);

  const [message, setMessage] = useState("");

  function sendMessage(event) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: crypto.randomUUID(),
        username: "You",
        text: trimmedMessage,
      },
    ]);

    setMessage("");
  }

  return (
    <div className="app">
      <aside className="communities">
        <div className="community-icon">N</div>
        <div className="community-icon">+</div>
      </aside>

      <aside className="channels">
        <h2>Nightfall</h2>

        <p className="section-title">TEXT CHANNELS</p>

        <button className="channel active">
          # general
        </button>

        <button className="channel">
          # introductions
        </button>

        <button className="channel">
          # off-topic
        </button>

        <div className="profile">
          <div className="avatar">Y</div>
          <div>
            <strong>Your Profile</strong>
            <p>Online</p>
          </div>
        </div>
      </aside>

      <main className="chat">
        <header className="chat-header">
          <h2># general</h2>
          <span>Your community starts here.</span>
        </header>

        <section className="messages">
          {messages.map((item) => (
            <article className="message" key={item.id}>
              <div className="avatar">
                {item.username.charAt(0)}
              </div>

              <div>
                <strong>{item.username}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <form className="message-form" onSubmit={sendMessage}>
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message #general"
            aria-label="Message"
          />

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}