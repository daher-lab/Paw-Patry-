import { useState } from "react";
import { publicUrl } from "../lib/publicUrl";
import "./AppPreview.css";

type Tab = "pass" | "wallet" | "updates" | "profile";

const UPDATES = [
  {
    date: "Nov 6",
    title: "Friday and Saturday stay open until 9",
    body: "Come later this weekend. The park is open until 9pm on Friday and Saturday.",
  },
  {
    date: "Nov 1",
    title: "Pup cups are back on Premium",
    body: "Premium members still get a free pup cup every visit. Ask for it at the counter.",
  },
  {
    date: "Oct 24",
    title: "A note from the park",
    body: "Thank you for staying with your dog. That is what this place is for.",
  },
];

export default function AppPreview() {
  const [tab, setTab] = useState<Tab>("pass");

  return (
    <div className="pp-app">
      <header className="pp-top">
        <img src={publicUrl("/images/logo-paw.png")} alt="" />
        <span>Paw Pawrty</span>
      </header>

      <main className="pp-main">
        {tab === "pass" ? <Pass /> : null}
        {tab === "wallet" ? <Wallet /> : null}
        {tab === "updates" ? <Updates /> : null}
        {tab === "profile" ? <Profile /> : null}
      </main>

      <nav className="pp-tabs" aria-label="App">
        <TabButton id="pass" label="Pass" active={tab} onPick={setTab} icon="pass" />
        <TabButton id="wallet" label="Wallet" active={tab} onPick={setTab} icon="wallet" />
        <TabButton id="updates" label="Updates" active={tab} onPick={setTab} icon="updates" />
        <TabButton id="profile" label="Profile" active={tab} onPick={setTab} icon="profile" />
      </nav>
    </div>
  );
}

function Pass() {
  return (
    <section className="pp-screen">
      <p className="pp-kicker">Member pass</p>
      <h1>Show this at the door</h1>
      <article className="pp-pass">
        <div className="pp-who">
          <img src={publicUrl("/images/app-member.jpg")} alt="" />
          <div>
            <strong>Riley Chen</strong>
            <span>with Milo</span>
            <em>Premium · Active</em>
          </div>
        </div>
        <div className="pp-qr">
          <img src={publicUrl("/images/member-qr.svg")} alt="Member QR code" />
        </div>
        <p className="pp-qr-note">Front desk scans this. Two dogs max. Show the code for the dog you brought.</p>
      </article>
    </section>
  );
}

function Wallet() {
  return (
    <section className="pp-screen">
      <p className="pp-kicker">Wallet</p>
      <h1>Your membership</h1>
      <article className="pp-card">
        <p className="pp-label">Plan</p>
        <p className="pp-big">Premium</p>
        <p className="pp-sub">Monday–Sunday · free pup cup each visit</p>
      </article>
      <article className="pp-card pp-split">
        <div>
          <p className="pp-label">Price</p>
          <p className="pp-money">$65<span>/month</span></p>
        </div>
        <div>
          <p className="pp-label">Next charge</p>
          <p className="pp-money">Dec 7</p>
        </div>
      </article>
      <article className="pp-card">
        <p className="pp-label">Card on file</p>
        <p className="pp-cardline">Visa ···· 4242</p>
      </article>
    </section>
  );
}

function Updates() {
  return (
    <section className="pp-screen">
      <p className="pp-kicker">Updates</p>
      <h1>From the park</h1>
      <div className="pp-feed">
        {UPDATES.map((item) => (
          <article key={item.title} className="pp-card">
            <p className="pp-label">{item.date}</p>
            <h2>{item.title}</h2>
            <p className="pp-sub">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="pp-screen">
      <p className="pp-kicker">Profile</p>
      <h1>You and Milo</h1>
      <img className="pp-hero" src={publicUrl("/images/app-member.jpg")} alt="" />
      <article className="pp-card pp-rows">
        <Row label="Member" value="Riley Chen" />
        <Row label="Dog" value="Milo" />
        <Row label="Phone" value="(734) 555-0148" />
        <Row label="Member since" value="October 2026" />
      </article>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span>{label}</span>
      <strong>{value}</strong>
    </p>
  );
}

function TabButton({
  id,
  label,
  active,
  onPick,
  icon,
}: {
  id: Tab;
  label: string;
  active: Tab;
  onPick: (tab: Tab) => void;
  icon: Tab;
}) {
  return (
    <button
      type="button"
      className={active === id ? "is-on" : ""}
      onClick={() => onPick(id)}
      aria-current={active === id ? "page" : undefined}
    >
      <Icon name={icon} />
      {label}
    </button>
  );
}

function Icon({ name }: { name: Tab }) {
  if (name === "pass") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "wallet") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="18" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.5" cy="14.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (name === "updates") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 8.5h12M6 12.5h12M6 16.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="9" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 18.5c1.2-2.4 3.1-3.5 5.5-3.5s4.3 1.1 5.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
