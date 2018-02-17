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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
             irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
