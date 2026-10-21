import { JOB_SECTIONS, TEAM_APPLY_URL } from "../lib/jobs";

export default function TeamPage() {
  return (
    <>
      <header className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Careers</span>
          <h1>Careers at Paw Pawrty</h1>
          <p>
            We’re hiring. Fill out a short application if you want to work with
            dogs and people at Paw Pawrty.
          </p>
        </div>
      </header>
      <div className="page-body">
        <div className="section-inner job-wide">
          <div className="job-row">
            {JOB_SECTIONS.map((section) => (
              <article className="job-card" key={section.title}>
                <p className="label">{section.title}</p>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="job-apply">
            <a className="btn btn-gold" href={TEAM_APPLY_URL}>
              Apply now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
