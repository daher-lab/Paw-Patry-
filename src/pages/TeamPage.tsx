import { JOB_SECTIONS, TEAM_APPLY_URL } from "../lib/jobs";
import "./HomeView.css";

export default function TeamPage() {
  return (
    <div className="zo-home zo-page">
      <header className="zo-page-head">
        <p className="zo-page-kicker">Careers</p>
        <h1>WE’RE HIRING AT PAW PAWRTY</h1>
        <p>
          Fill out a short application if you want to work with dogs and people
          at Paw Pawrty.
        </p>
      </header>

      <section className="zo-jobs">
        {JOB_SECTIONS.map((section, index) => (
          <article
            className={`zo-job${index === JOB_SECTIONS.length - 1 ? " zo-job-last" : ""}`}
            key={section.title}
          >
            <header className="zo-job-head">
              <p className="zo-page-kicker">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2>{section.title}</h2>
            </header>
            <ol className="zo-job-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      <div className="zo-job-apply">
        <a className="zo-btn" href={TEAM_APPLY_URL}>
          APPLY NOW
        </a>
      </div>
    </div>
  );
}
