import React from 'react'

import './About.scss'

const About = () => (
  <>
    <h2 className="about-header">About Colorado Kettlebell Club</h2>
    <section className="about-info">
      <article className="about-info-left">
        <h3>Kettlebell Endurance Sports</h3>
        <ul>
          <li>BOLT</li>
          <li>Russian Kettlebell Sport</li>
        </ul>
      </article>
      <article className="about-info-right">
        <p>All levels are welcomed!</p>
        <p>These sports are a combination of strength and endurance training with a large emphasis on endurance. The sessions are about 90 minutes in length and are built around the IKLF competition schedule.</p>
        <p>Competition are endurance events that last at least 5 minutes per set and go up from there. Many competitions are six sets 10 minute in length.</p>
        <p>Colorado Kettlebell Club is part of International Kettlebell Lifting Federation.</p>
      </article>
    </section>
  </>
)

export default About;