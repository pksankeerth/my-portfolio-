function Experience() {
  return (
    <section id="experience" className="experience-section">

      {/* HEADER */}

      <div className="experience-header">

        <div className="section-label">
          03 / EXPERIENCE
        </div>

        <h2>
          Building with<br />
          <span>real experience.</span>
        </h2>

        <p>
          Professional experience focused on building responsive,
          user-focused web interfaces and translating designs and
          requirements into functional digital experiences.
        </p>

      </div>


      {/* EXPERIENCE */}

      <div className="experience-card">

        {/* NUMBER */}

        <div className="experience-number">
          
        </div>


        {/* MAIN CONTENT */}

        <div className="experience-content">

          <div className="experience-meta">
            <span>FRONTEND DEVELOPER</span>
            <span>1.5 YEARS</span>
          </div>

          <h3>
            Nisieon Enterprises
          </h3>

          <p className="experience-description">
            Worked as a Frontend Developer, developing and maintaining
            responsive web interfaces while working closely with project
            requirements to deliver clean, functional and user-friendly
            digital experiences.
          </p>


          {/* RESPONSIBILITIES */}

          <div className="experience-responsibilities">

            <div className="responsibility">
              <span>01</span>
              <p>
                Developed responsive and user-friendly web interfaces.
              </p>
            </div>

            <div className="responsibility">
              <span>02</span>
              <p>
                Translated design concepts and requirements into
                functional frontend experiences.
              </p>
            </div>

            <div className="responsibility">
              <span>03</span>
              <p>
                Worked on improving usability, layout consistency
                and cross-device responsiveness.
              </p>
            </div>

            <div className="responsibility">
              <span>04</span>
              <p>
                Collaborated on website development and ongoing
                frontend improvements.
              </p>
            </div>

          </div>


          {/* TAGS */}

          <div className="experience-tags">

            <span>FRONTEND</span>
            <span>WEB DEVELOPMENT</span>
            <span>RESPONSIVE DESIGN</span>
            <span>UI / UX</span>

          </div>

        </div>


        {/* EXPERIENCE PERIOD */}

        <div className="experience-period">
          1.5
          <small>YEARS</small>
        </div>

      </div>

    </section>
  );
}

export default Experience;