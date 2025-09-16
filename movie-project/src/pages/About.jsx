import "../css/About.css";

function About() {
  return (
    <>
      <div className="about">
        <h1>About MovieApp</h1>
        <p>
          MovieApp is a simple application that allows users to browse and
          favorite their favorite movies.
        </p>
      </div>
      <div className="about-footer">
        <p className="about-footer-text">
          This project is built using React and demonstrates basic concepts such
          as components, state management, and routing.
        </p>
      </div>
    </>
  );
}

export default About;
