import "./About.css";

import profilePic from "../../assets/me_09042024.jpg";

function About() {
  return (
    <div className="about">
      <img
        src={profilePic}
        className="about__img"
        alt="A picture of the author, Julian McNeill"
      />
      <section className="about__bio">
        <h2 className="about__heading">About the author</h2>
        <p className="about__body">
          Hey, everyone. My name is Julian McNeill, and I'm a full-stack
          software engineer. My primary tool stack includes HTML, CSS,
          JavaScript, and the MERN stack.
        </p>
        <p className="about__body">
          I am currently a student in the TripleTen Software Engineering
          bootcamp, and this site is my final project in the program. Although I
          have prior web development experience before enrolling, this program
          taught me:
        </p>
        <ul className="about__list">
          <li className="about__list-item">
            Better ways to design a website, and how to follow a design spec
          </li>
          <li className="about__list-item">
            A lot more about the MERN stack than I knew before
          </li>
          <li className="about__list-item">
            How to deploy projects using Google Cloud
          </li>
          <li className="about__list-item">
            Basic security best practices (such as rate limiting and protecting
            request headers)
          </li>
          <li className="about__list-item">
            A bunch of soft skills (project planning, working with a team,
            corresponding with clients, etc.)
          </li>
        </ul>
        <p className="about__body">
          If you're currently looking for a passionate web developer with
          several years of experience with MERN stack technology, I'm your man!
        </p>
      </section>
    </div>
  );
}

export default About;
