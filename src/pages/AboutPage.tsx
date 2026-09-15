import "./HomeView.css";

export default function AboutPage() {
  return (
    <div className="home">
      <section className="hp-about" id="about" style={{ paddingTop: "7rem" }}>
        <div className="hp-about-wrap">
          <div className="hp-about-intro">
            <p className="hp-kicker ink">About Paw Pawrty</p>
            <h2>Where Dogs Play &amp; People Connect</h2>
            <p>
              Paw Pawrty was created around a simple idea: going somewhere with
              your dog shouldn’t mean having nothing for you to do.
            </p>
            <p>
              We wanted to create a place that’s just as enjoyable for people as
              it is for their dogs—a comfortable indoor/outdoor space where dogs
              can play, socialize, and burn off some energy while their humans
              can sit back, grab a drink, meet other dog lovers, or simply enjoy
              spending time together.
            </p>
            <p>
              Located in Westland, Michigan, Paw Pawrty brings the dog park
              experience indoors and outdoors, giving our community a place to
              enjoy throughout Michigan’s changing seasons.
            </p>
          </div>

          <div className="hp-about-blocks">
            <article>
              <h3>More Than a Dog Park</h3>
              <p>
                Paw Pawrty isn’t designed to be a place where you drop your dog
                off and leave. You stay and enjoy the experience together.
              </p>
              <p>
                Dogs get the freedom and social interaction they love, while
                their humans get a comfortable place to gather and connect.
                Whether you’re stopping in for an afternoon play session,
                meeting up with friends, or becoming one of our regular members,
                we want Paw Pawrty to feel like your neighborhood hangout—with a
                lot more paws.
              </p>
            </article>
            <article>
              <h3>Safety Comes First</h3>
              <p>Fun works best when everyone feels comfortable.</p>
              <p>
                Before entering the park, dogs must meet Paw Pawrty’s admission
                requirements, including age, vaccination, and spay/neuter
                requirements. Guests also agree to our waiver and House Rules
                before participating.
              </p>
              <p>
                Once you’re inside, we keep things simple: watch your dog,
                respect the people and pups around you, and play nice.
              </p>
            </article>
            <article>
              <h3>Built for Dogs. Made for Their Humans.</h3>
              <p>At the heart of Paw Pawrty is community.</p>
              <p>
                We’re creating a place where regulars recognize each other, dogs
                find their favorite playmates, and people actually look forward
                to spending an afternoon at the dog park.
              </p>
              <p>
                Because your dog shouldn’t have to choose between their favorite
                place and their favorite person.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
