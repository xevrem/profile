import React, { Component } from 'react';
import './App.css';

import project_data from './projects.json';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li id="name"><p>Erika Jonell</p></li>
        <li><a href="#about-container" target="_self">About</a></li>
        <li><a href="#project-container" target="_self">Projects</a></li>
        <li><a href="#contact-container" target="_self">Contact</a></li>
      </ul>
    </div>
  );
}

const About = (props) =>{
  return (
    <div id="about-container">
      <div className="header">
        <h2>Erika Jonell</h2>
      </div>
      <h3 className="self-title">Software Engineer</h3>
      <hr className="my-hr"/>
      <div className="about-grid">
        <div className="about-img">
          <img src="./images/me.jpg" alt="" id="avatar"/>
        </div>
        <div className="about-text">
          <span>
            <p>
              <u>Operating Systems</u>: Windows, MacOS, and Linux
            </p>
            <p>
              <u>Software Languages</u>: Bash, C/C#, Java, JavaScript, Python, and SQL
            </p>
            <p>
              <u>Frameworks & Standards</u>: Standards (e.g., CSS, HTML, JSON, and XML/XSD), JS/Node (e.g., Axios, Express, NPM, React, Vue, Yarn), Python (e.g., Flask, Jinja2, Jupyter, Keras, Matplotlib, Numpy, Scikit-Learn, Tensorflow), and Styling (e.g., Bootstrap, Font Awesome)
            </p>
            <p>
              <u>Databases</u>: MongoDB, MySQL, Oracle, and SQLite
            </p>
            <p>
              <u>Development Tools</u>: Atom, MonoDevelop, NetBeans, Sublime Text, and Visual Studio
            </p>
            <p>
              <u>Lifecycle Management</u>: IBM Rational, Git, and GitHub
            </p>
            <p>
              <u>Architecture</u>: OpenText ProVision and DoD Architecture Framework (DoDAF)
            </p>
            <p>
              <u>Virtualization</u>: QEMU/KVM, VirtualBox, and VMware
            </p>
            <p>
              <u>Graphics Engines/Frameworks</u>: XNA/MonoGame, Unity, and Godot
            </p>
            <p>
              <u>Office Productivity</u>: Google Docs, LibreOffice, Microsoft Office (Word, Excel, Project, Visio, etc.), and Microsoft SharePoint
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

const Project = (props) =>{
  return (
    <div className="grid-item">
      <div className="grid-content">
        <a href={props.link} target="_blank">
          <img className="grid-img" src={props.img} alt=""/>
        </a>
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}


const Projects = (props) => {

  let project_list = props.projects.map( (proj, i) => {
    return <Project key={i} link={proj.link} img={proj.img} name={proj.name} text={proj.text} />
  });

  return (
    <div id="project-container">
      <div className="header">
        <h2>Past Projects</h2>
      </div>
      <div className="grid-container">
        {project_list}
      </div>
    </div>
  );
}

const ContactInfo = (props) => {
  return (
    <div id="contact-container">
      <div className="header">
        <h2>Contact Methods</h2>
      </div>
      <div className="contact-block">
        <a href="#email"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
        <a href="#github"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="#twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
    </div>
  );
}

const Section = props => {
  return(
    <div className='section' id={props.section_id}>
      {props.children}
    </div>
  );
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: project_data
    }
  }
  render() {
    return (
      <div className="app">
        <Navbar/>
        <div className="content">

          <Section>
            <About />
          </Section>
          
          <Section>
            <Projects projects={this.state.projects}/>
          </Section>
        
          <Section>
            <ContactInfo />
          </Section>

        </div>    
      </div>
    );
  }
}

export default App;
