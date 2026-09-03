function About() {
  return (
    <section id="about" className="about-section">

      {/* LEFT SIDE */}
      <div className="about-content">

        <div className="section-label">
          01 / ABOUT
        </div>

        <h2>
          More than just<br />
          <span>code.</span>
        </h2>

        <p>
          I'm Sankeerth, an MCA student and developer from India with
          an interest in technology, software development and building
          things that are genuinely useful.
        </p>

        <p>
          I'm naturally curious and enjoy exploring different areas of
          technology, learning new tools and turning ideas into working
          projects. Outside of development, I'm also interested in
          music, sports and continuously learning new things.
        </p>

      </div>


      {/* RIGHT SIDE */}
      <div className="about-profile">

        <div className="profile-image">
          <img
            src="/images/profile-photo .png"
            alt="Sankeerth"
          />
        </div>

        <div className="profile-info">

          <div className="profile-line">
            <span>NAME</span>
            <strong>SANKEERTH</strong>
          </div>

          <div className="profile-line">
            <span>ROLE</span>
            <strong>DEVELOPER</strong>
          </div>

          <div className="profile-line">
            <span>EDUCATION</span>
            <strong>MCA</strong>
          </div>

          <div className="profile-line">
            <span>BASED IN</span>
            <strong>INDIA</strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;