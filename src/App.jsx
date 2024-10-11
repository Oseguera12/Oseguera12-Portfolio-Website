import './sass/main.css';
import Spline from '@splinetool/react-spline';

function loader() {
  return(
    <div class="loader-container">
      <svg viewbox="0 0 500 160">
        <text x="50%" y ="50%" dy=".32em" text-anchor="middle" class="text-body">
          Hello
        </text>
      </svg>
    </div>
  );
}

function navigation() {
  return (
    <section id="navigation">
      <a href="#home"><h2>Oseguera12</h2></a>
      <nav>
        <ul>
          <li><a href="#home"><p>Home</p></a></li>
          <li><a href="#projects"><p>Projects</p></a></li>
          <li><a href="#expertise"><p>Expertise</p></a></li>
          <li><a href="#contact"><p>Contact</p></a></li>
        </ul>
      </nav>
    </section>
  );
}

function home() {
  return (
    <section id="home">
      <h1>Jesus<br></br> Oseguera</h1>
    </section>
  );
}

function projects() {
  return(
    <section id="projects">
      <div class="flex-container">
        <section class="project1">
          <img src={require("./images/project1-thumbnail.jpg")} alt="project 1"/>
          <p>Portfolio Website</p>
          <p class="project-category">Website</p>
        </section>
        <section class="project2">
          <img src={require("./images/project2-thumbnail.jpg")} alt="project 2"/>
          <p>Truth Table Generator</p>
          <p class="project-category">C++</p>
        </section>
        <section class="project3">
          <img src={require("./images/project3-thumbnail.jpg")} alt="project 3"/>
          <p>Chat Filter</p>
          <p class="project-category">C++</p>
        </section>
        <section class="project4">
          <img src={require("./images/project4-thumbnail.jpg")} alt="project 4"/>
          <p>Integer to String</p>
          <p class="project-category">Assembly</p>
        </section>
      </div>
    </section>
  );
}

function expertise() {
  return (
    <section id="expertise">
      <h3>Expertise</h3>
      <p>description about me</p>
      <img src="#" alt="jesus oseguera"/>
      <section id="technologies">
      </section>
    </section>
  );
}

function contact() {
  return(
    <section id="contact"></section>
  );
}

function footer() {
  return(
    <footer>
      <hr />
      <p>
        Designed & Developed by Jesus Oseguera 2024 <br />
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <loader /> {loader()}
      <navigation /> {navigation()}
      <home /> {home()}
      <Spline scene="https://prod.spline.design/5q9rG6UTEdueBr5k/scene.splinecode" />
      <projects /> {projects()}
      <expertise /> {expertise()}
      <contact /> {contact()}
      <footer /> {footer()}
    </div>
  );
}

export default App;
