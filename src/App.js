import React, { Component } from 'react';
import './App.css';


const Navbar = (props) => {
  return (
  <div className="navbar">
    <ul className="nav">
      <li id="name"><p>Erika Jonell</p></li>
      <li><a href="#projects" target="_self">Projects</a></li>
      <li><a href="#contact" target="_self">Contact</a></li>
    </ul>
    </div>
  );
}

const About = (props) =>{
  return (
    <div className="section" id="about-container">
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
  return (
    <div className="section" id="project-container">
      <div className="header">
        <h2>Past Projects</h2>
      </div>
      <div className="grid-container">
        <Project link="https://codepen.io/xevrem/full/jLvjEQ/" img='./images/simon.jpg' name='Simon'
        text='The game of Simon, written in Vue'/>
        <Project link="https://xevrem.github.io/dungeoneer/" img='./images/dungeoneer.jpg' name='Dungeoneer'
        text='A roguelike written with React and ROT.js'/>
        <Project link="https://codepen.io/xevrem/full/vJbqRO/" img='./images/life.jpg' name='Game of Life'
        text='The Game of Life, written in React'/>
        <Project link="https://xevrem.github.io/heatmap/" img='./images/heatmap.jpg' name='Global Temperature Heatmap'
        text='A graphical heatmap written in Vue and D3.js'/>
        <Project link="https://xevrem.github.io/forcegraph/" img='./images/forcegraph.jpg' name='State Contiguity Force Graph'
        text='A forcegraph written in Vue and D3.js'/>
        <Project link="https://xevrem.github.io/meteors/" img='./images/meteors.jpg' name='Historical Recorded Meteor Landings'
        text='A geomapping project written in Vue and D3.js'/>
        <Project link="https://codepen.io/xevrem/full/ayEzgV/" img='./images/twitch.jpg' name='Simple Twitch Check'
        text='A simple Twitch stream status check webpage utilizing my custom twitch-api accessor service'/>
        <Project link="https://xev-twitch-api.glitch.me" img='./images/twitch_api.jpg' name='Simple Twitch API'
        text='Custom Twitch status service for Simple Twitch Check'/>
      </div>
    </div>
  );
}

const ContactInfo = (props) => {
  return (
    <div className="section" id="contact-container">
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

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <div className="content">
          <a href="#about" name="about"></a>
          <About/>

          <a href="#projects" name="projects"></a>
          <Projects/>
        
          <a href="#contact" name="contact"></a>
          <ContactInfo/>

        </div>    
      </div>
    );
  }
}

export default App;
