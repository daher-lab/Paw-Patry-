import { Navigate, useParams } from "react-router-dom";
import { getLegal } from "../lib/legal";
import "./HomeView.css";

export default function LegalPage() {
  const { slug } = useParams();
  const doc = slug ? getLegal(slug) : undefined;
  if (!doc) return <Navigate to="/" replace />;

  return (
    <div className="zo-home zo-page">
      <header className="zo-page-head">
        <p className="zo-page-kicker">Legal</p>
        <h1>{doc.title.toUpperCase()}</h1>
        <p>
          {doc.lede ??
            `Last updated ${doc.updated}. This is a website draft for Paw Pawrty.`}
        </p>
      </header>
      <div className="zo-legal">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body
              .split("\n")
              .filter((line) => line.length > 0)
              .map((line) => (
                <p key={line}>{line}</p>
              ))}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.after ? <p>{section.after}</p> : null}
          </section>
        ))}
      </div>
    </div>
  );
}
