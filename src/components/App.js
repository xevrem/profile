import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './App.css';

import project_data from './../projects.json';
import history_data from './../history.json';

//transition width between full nav and menu icon
const NAV_MIN_WIDTH = 650;

class Navbar extends Component{
  constructor(props){
    super(props);

    this.state = {
      show_menu_modal: false,
      draw_menu: window.innerWidth < NAV_MIN_WIDTH ? true : false,
    }

    //bind methods
    this.update_window_dimensions = this.update_window_dimensions.bind(this);
    this.handle_menu_modal_close = this.handle_menu_modal_close.bind(this);
    this.handle_show_menu_modal = this.handle_show_menu_modal.bind(this);
  }

  componentDidMount(){
    //ensure window resizing is captured
    window.addEventListener('resize', this.update_window_dimensions);
  }

  update_window_dimensions(event){
    // console.log('update_window_dimensions called...');
    //update depending on state and window sizing
    if(window.innerWidth >= NAV_MIN_WIDTH && this.state.draw_menu){
      this.setState({draw_menu: false});
    }else if(window.innerWidth < NAV_MIN_WIDTH && !this.state.draw_menu){
      this.setState({draw_menu:true});
    }
  }

  handle_menu_modal_close(){
    console.log('handle_menu_modal_close called...')
    this.setState({show_menu_modal:false});
  }

  handle_show_menu_modal(){
    console.log('handle_show_menu_modal called...')
    this.setState({show_menu_modal:true});
  }

  render(){
    return this.state.draw_menu ? (
      <div className="navbar">
        <ul className="nav">
          <li className="left" id="name"><p>Erika Jonell</p></li>
          <li className="right" onClick={this.handle_show_menu_modal}>
            <p className="menu"><i className="fa fa-bars" aria-hidden="true"></i></p>
          </li>
        </ul>
        <ReactModal
          className="menu-modal-content section"
          overlayClassName="menu-modal-overlay"
          isOpen={this.state.show_menu_modal}
          onRequestClose={this.handle_menu_modal_close}>
            <ul className="menu-list">
              <a className="menu-list-item" href="#project-container" target="_self" onClick={this.handle_menu_modal_close}><li>Projects</li></a>
              <a className="menu-list-item" href="#history-container" target="_self" onClick={this.handle_menu_modal_close}><li>History</li></a>
              <a className="menu-list-item" href="#email"><li><i className="fa fa-envelope-o" aria-hidden="true"></i></li></a>
              <a className="menu-list-item" href="https://github.com/xevrem"><li ><i className="fa fa-github" aria-hidden="true"></i></li></a>
              <a className="menu-list-item" href="https://www.linkedin.com/in/erika-jonell"><li><i className="fa fa-linkedin" aria-hidden="true"></i></li></a>
            </ul>
          </ReactModal>
      </div>
    ) : (
      <div className="navbar">
        <ul className="nav">
          <li className="left" id="name"><p>Erika Jonell</p></li>
          <li className="left"><a href="#project-container" target="_self">Projects</a></li>
          <li className="left"><a href="#history-container" target="_self">History</a></li>
          <li className="right"><a href="#email"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
          <li className="right"><a href="https://github.com/xevrem"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li className="right"><a href="https://www.linkedin.com/in/erika-jonell"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    );
  }
}


const SKILLS = {
  'Software Languages': 'C#, JavaScript, Python, and SQL',
  'Frameworks & Standards': 'Standards (e.g., CSS, HTML, JSON, ServiceWorkers, and XML/XSD), JS/Node (e.g., Axios, Express, NPM/Yarn, React, Vue), Python (e.g., Flask, Jupyter, Keras, Matplotlib, Numpy, Scikit-Learn, Tensorflow), and Styling (e.g., Bootstrap, Font Awesome)',
  'Databases': 'MongoDB, IndexedDB, and SQLite',
  'Development Tools': 'Atom, MonoDevelop, and Visual Studio',
  'Lifecycle Management':'IBM Rational, Git/GitHub, and Slack',
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
          {skill_list}
        </div>
      </div>
    </div>
  );
}

const Project = (props) =>{
  return (
    <div className="project-item">
      <div className="project-content">
        <a href={props.link} target="_blank">
          <img className="project-img" src={props.img} alt="a picture of the project"/>
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
      <div className="project-grid">
        {project_list}
      </div>
    </div>
  );
}

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
    <div className='section'>
      {props.children}
    </div>
  );
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: project_data,
      history: history_data,
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar />
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
