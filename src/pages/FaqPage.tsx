import { FAQS } from "../lib/answers";
import "./HomeView.css";

export default function FaqPage() {
  return (
    <div className="zo-home zo-page">
      <header className="zo-page-head">
        <p className="zo-page-kicker">FAQ</p>
        <h1>QUICK ANSWERS</h1>
        <p>Common questions before your first visit.</p>
      </header>
      <div className="zo-faq">
        {FAQS.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
