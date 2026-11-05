import { FormEvent, useState } from "react";
import { replyTo } from "../lib/answers";
import { publicUrl } from "../lib/publicUrl";

type Message = { from: "paw" | "you"; text: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "paw",
      text: "Hey. Type whatever you want to know.",
    },
  ]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((current) => [
      ...current,
      { from: "you", text: trimmed },
      { from: "paw", text: replyTo(trimmed) },
    ]);
    setDraft("");
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    send(draft);
  }

  return (
    <div className="chat-widget">
      {open ? (
        <section className="chat-panel" aria-label="Paw Pawrty chat">
          <header className="chat-head">
            <p>Paw Pawrty</p>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              Close
            </button>
          </header>
          <div className="chat-log">
            {messages.map((message, index) => (
              <p key={index} className={`chat-msg chat-msg-${message.from}`}>
                {message.text}
              </p>
            ))}
          </div>
          <form className="chat-form" onSubmit={onSubmit}>
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask a question"
              aria-label="Ask a question"
            />
            <button type="submit">Send</button>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        className="chat-toggle"
        aria-label="Ask Paw Pawrty"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <img src={publicUrl("/images/chat-dog.png")} alt="" />
      </button>
    </div>
  );
}
