import { Link } from "react-router-dom";
import { PORTAL_URL } from "../lib/portal";
import { publicUrl } from "../lib/publicUrl";
import "./HomeView.css";

export default function HomeView() {
  return (
    <div className="zo-home">
      <section className="zo-story">
        <div className="zo-story-copy">
          <h1>WORLD OF PAWSIBILITIES!</h1>
          <p>
            Paw Pawrty is an indoor/outdoor dog park in Westland, MI — built so
            you and your dog can stay, play, and hang out together. Not a
            drop-off. A place to connect.
          </p>
        </div>
        <a className="zo-btn zo-btn-light" href={PORTAL_URL}>
          JOIN
        </a>
      </section>

      <section className="zo-hero-band">
        <div className="zo-hero-photos">
          <div className="zo-photo-slot" aria-hidden="true">
            <img src={publicUrl("/images/slots/1.jpg")} alt="" />
          </div>
          <div className="zo-photo-slot" aria-hidden="true">
            <img src={publicUrl("/images/slots/2.jpg")} alt="" />
          </div>
          <div className="zo-photo-slot" aria-hidden="true">
            <img src={publicUrl("/images/slots/3.jpg")} alt="" />
          </div>
        </div>
      </section>

      <Link className="zo-offer-pill" to="/feedback">
        TELL US WHAT YOU THINK · GIVE US SOME FEEDBACK
      </Link>

      <section className="zo-pair">
        <article className="zo-card">
          <div className="zo-photo-slot zo-photo-slot-card" aria-hidden="true">
            <img src={publicUrl("/images/slots/4.jpg")} alt="" />
          </div>
          <div className="zo-card-body">
            <h2>PLAY ON YOUR SCHEDULE</h2>
            <p>
              Day passes for flexible fun. Memberships for the regulars. Peace of
              mind for every visit.
            </p>
            <Link className="zo-btn" to="/memberships">
              MEMBERSHIPS
            </Link>
          </div>
        </article>
        <article className="zo-card">
          <div className="zo-photo-slot zo-photo-slot-card" aria-hidden="true">
            <img src={publicUrl("/images/slots/5.jpg")} alt="" />
          </div>
          <div className="zo-card-body">
            <h2>COME PLAY IN WESTLAND</h2>
            <p>
              Sunday–Thursday 12pm–7pm. Friday &amp; Saturday 12pm–9pm. 32838
              Warren Rd, Westland, Michigan.
            </p>
            <Link className="zo-btn" to="/about">
              HOURS
            </Link>
          </div>
        </article>
      </section>

      <section className="zo-banner">
        <div className="zo-banner-copy">
          <h2>WE’RE HIRING AT PAW PAWRTY</h2>
          <p>
            Want to work with dogs and people? Fill out a short application and
            grow with a fresh new park.
          </p>
        </div>
        <Link className="zo-btn zo-btn-dark" to="/careers">
          APPLY NOW
        </Link>
      </section>

      <section className="zo-pair zo-pair-text">
        <article className="zo-tile">
          <h2>YOUR DOG’S HOME BASE. THE PORTAL.</h2>
          <p>
            Set up memberships, day passes, and check-in from the Dog Portal.
          </p>
          <a className="zo-btn zo-btn-light" href={PORTAL_URL}>
            OPEN PORTAL
          </a>
        </article>
        <article className="zo-tile">
          <h2>PARK RULES. SAFE PLAY.</h2>
          <p>
            Know the rules before you roll in so every pup has a good time.
          </p>
          <Link className="zo-btn zo-btn-light" to="/rules">
            READ RULES
          </Link>
        </article>
      </section>
    </div>
  );
}
