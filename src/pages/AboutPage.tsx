import { Link } from "react-router-dom";
import "./HomeView.css";

export default function AboutPage() {
  return (
    <div className="zo-home zo-page">
      <header className="zo-page-head">
        <p className="zo-page-kicker">About Paw Pawrty</p>
        <h1>WHERE DOGS PLAY &amp; PEOPLE CONNECT</h1>
        <p>
          Paw Pawrty was created around a simple idea: going somewhere with your
          dog shouldn’t mean having nothing for you to do.
        </p>
      </header>

      <section className="zo-about-lead">
        <p>
          We wanted to create a place that’s just as enjoyable for people as it
          is for their dogs—a comfortable indoor/outdoor space where dogs can
          play, socialize, and burn off some energy while their humans can sit
          back, grab a drink, meet other dog lovers, or simply enjoy spending
          time together.
        </p>
        <p>
          Located in Westland, Michigan, Paw Pawrty brings the dog park
          experience indoors and outdoors, giving our community a place to enjoy
          throughout Michigan’s changing seasons.
        </p>
      </section>

      <section className="zo-about-grid">
        <article>
          <h2>More than a dog park</h2>
          <p>
            Paw Pawrty isn’t designed to be a place where you drop your dog off
            and leave. You stay and enjoy the experience together.
          </p>
          <p>
            Dogs get the freedom and social interaction they love, while their
            humans get a comfortable place to gather and connect. Whether you’re
            stopping in for an afternoon play session, meeting up with friends,
            or becoming one of our regular members, we want Paw Pawrty to feel
            like your neighborhood hangout—with a lot more paws.
          </p>
        </article>
        <article>
          <h2>Safety comes first</h2>
          <p>Fun works best when everyone feels comfortable.</p>
          <p>
            Before entering the park, dogs must meet Paw Pawrty’s admission
            requirements, including age, vaccination, and spay/neuter
            requirements. Guests also agree to our waiver and House Rules before
            participating.
          </p>
          <p>
            Once you’re inside, we keep things simple: watch your dog, respect
            the people and pups around you, and play nice.
          </p>
        </article>
      </section>

      <section className="zo-about-band">
        <h2>Built for dogs. Made for their humans.</h2>
        <p>
          We’re creating a place where regulars recognize each other, dogs find
          their favorite playmates, and people actually look forward to spending
          an afternoon at the dog park. Because your dog shouldn’t have to
          choose between their favorite place and their favorite person.
        </p>
      </section>

      <section className="zo-about-grid zo-about-facts">
        <article>
          <h2>Location</h2>
          <p>
            32838 Warren Rd
            <br />
            Westland, MI 48185
          </p>
          <Link className="zo-btn zo-btn-light" to="/">
            BACK HOME
          </Link>
        </article>
        <article>
          <h2>Hours</h2>
          <p>
            Sunday–Thursday 12pm–7pm
            <br />
            Friday &amp; Saturday 12pm–9pm
          </p>
          <Link className="zo-btn" to="/rules">
            PARK RULES
          </Link>
        </article>
      </section>
    </div>
  );
}
