import React, { Component } from 'react';
import './App.css';

import project_data from './../projects.json';
import history_data from './../history.json';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="left" id="name"><p>Erika Jonell</p></li>
        {/* <li className="left"><a href="#about-container" target="_self">About</a></li> */}
        <li className="left"><a href="#project-container" target="_self">Projects</a></li>
        <li className="left"><a href="#history-container" target="_self">History</a></li>
        <li className="right"><a href="#email"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
        <li className="right"><a href="https://github.com/xevrem"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        <li className="right"><a href="https://www.linkedin.com/in/erika-jonell"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  );
}


const SKILLS = {
  'Software Languages': 'C#, Java, JavaScript, Python, and SQL',
  'Frameworks & Standards': 'Standards (e.g., CSS, HTML, JSON, ServiceWorkers, and XML/XSD), JS/Node (e.g., Axios, Express, NPM/Yarn, React, Vue), Python (e.g., Flask, Jupyter, Keras, Matplotlib, Numpy, Scikit-Learn, Tensorflow), and Styling (e.g., Bootstrap, Font Awesome)',
  'Databases': 'MongoDB, IndexedDB, and SQLite',
  'Development Tools': 'Atom, MonoDevelop, and Visual Studio',
  'Lifecycle Management':'IBM Rational, Git, and GitHub',
  'Architecture': 'OpenText ProVision and DoD Architecture Framework (DoDAF)',
  'Virtualization': 'QEMU/KVM, VirtualBox, and VMware',
  'Graphics Engines/Frameworks': 'XNA/MonoGame, Unity, and Godot'
}

const About = (props) =>{

  let skill_list = Object.keys(SKILLS).map((key, i)=>{
    return (
      <p key={i}>
        <u>{key}</u>: {SKILLS[key]}
      </p>
    )
  });

  return (
    <div id="about-container">
      <div className="header">
        <h2>About Erika</h2>
        <h3 className="self-title">Software Engineer</h3>
      </div>
      <hr className="my-hr"/>
      <div className="about-grid">
        <div className="about-img">
          <img src="./images/me.jpg" alt="" id="avatar"/>
        </div>
        <div className="about-text">
          <span>
            {skill_list}
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
          <img className="grid-img" src={props.img} alt="a picture of the project"/>
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
      <hr className="my-hr"/>
      <div className="grid-container">
        {project_list}
      </div>
    </div>
  );
}

// const ContactInfo = (props) => {
//   return (
//     <div id="contact-container">
//       <div className="header">
//         <h2>Contact Methods</h2>
//       </div>
//       <hr className="my-hr"/>
//       <div className="contact-block">
//         <a href="#email"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
//         <a href="https://github.com/xevrem"><i className="fa fa-github" aria-hidden="true"></i></a>
//         <a href="#twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
//       </div>
//     </div>
//   );
// }
//

const History = (props) => {

  let history_list = props.history.map((item, i)=>{
    return (
      <li className='history-item'>
        <h3><u>{item.title}</u></h3>
        <h4><em>{item.entity} ( {item.dates} )</em></h4>
        <p>{item.description}</p>
      </li>
    )
  })

  return (
    <div id='history-container'>
      <div className="header">
        <h2>Work History</h2>
      </div>
      <hr className="my-hr"/>
      <div className="history-block">
        <ul className='history-list'>
          {history_list}
        </ul>
      </div>
    </div>
  )
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
      projects: project_data,
      history: history_data
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
            <History history={this.state.history}/>
          </Section>

        </div>
      </div>
    );
  }
}

export default App;
