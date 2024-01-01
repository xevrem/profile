/*
Copyright 2018 Erika Jonell

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import { Component } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import "./App.scss";
// load data
import project_data from "./../projects.json";
import history_data from "./../history.json";
import skill_data from "./../skills.json";

// setup the modal root
ReactModal.setAppElement(document.getElementById("modal"));

//transition width between full nav and menu icon
const NAV_MIN_WIDTH = 655;

const scroll_to_id = (id) => () => {
  window.scrollTo({
    top: document.getElementById(id).offsetTop - 85,
    behavior: "smooth",
  });
};

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show_menu_modal: false,
      draw_menu: window.innerWidth < NAV_MIN_WIDTH ? true : false,
      show_mail_modal: false,
    };

    //bind methods
    this.update_window_dimensions = this.update_window_dimensions.bind(this);
    this.handle_menu_modal_close = this.handle_menu_modal_close.bind(this);
    this.handle_show_menu_modal = this.handle_show_menu_modal.bind(this);
    this.handle_show_mail_modal = this.handle_show_mail_modal.bind(this);
    this.handle_mail_modal_close = this.handle_mail_modal_close.bind(this);
  }

  componentDidMount() {
    //ensure window resizing is captured
    window.addEventListener("resize", this.update_window_dimensions);
  }

  update_window_dimensions(_event) {
    // console.log('update_window_dimensions called...');
    let draw_menu = this.state.draw_menu;
    //update depending on state and window sizing
    if (window.innerWidth >= NAV_MIN_WIDTH && this.state.draw_menu) {
      draw_menu = false;
    } else if (window.innerWidth < NAV_MIN_WIDTH && !this.state.draw_menu) {
      draw_menu = true;
    }

    this.setState({
      draw_menu: draw_menu,
      show_menu_modal: false, //if user resizes always close modal
    });
  }

  handle_menu_modal_close() {
    this.setState({ show_menu_modal: false });
  }

  handle_show_menu_modal() {
    this.setState({ show_menu_modal: true });
  }

  handle_show_mail_modal() {
    this.setState({ show_mail_modal: true });
  }

  handle_mail_modal_close() {
    this.setState({ show_mail_modal: false });
  }

  scroll_and_close = (id) => () => {
    this.handle_menu_modal_close();
    scroll_to_id(id)();
  }

  render() {
    return this.state.draw_menu ? (
      <div className="navbar">
        <ul className="nav">
          <li className="left" id="name">
            <p>Erika Jonell</p>
          </li>
          <li className="right" onClick={this.handle_show_menu_modal}>
            <p className="menu">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </p>
          </li>
        </ul>
        <ReactModal
          className="menu-modal-content section"
          overlayClassName="menu-modal-overlay"
          isOpen={this.state.show_menu_modal}
          onRequestClose={this.handle_menu_modal_close}
        >
          <ul className="menu-list">
            <p
              className="menu-list-item"
              onClick={this.scroll_and_close('about-container')}
            >
              <li>About</li>
            </p>
            <p
              className="menu-list-item"
              onClick={this.scroll_and_close('project-container')}
            >
              <li>Projects</li>
            </p>
            <p
              className="menu-list-item"
              onClick={this.scroll_and_close('history-container')}
            >
              <li>History</li>
            </p>
            <p className="menu-list-item" onClick={this.handle_show_mail_modal}>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </li>
            </p>
            <a className="menu-list-item" href="https://github.com/xevrem">
              <li>
                <i className="fa fa-github" aria-hidden="true"></i>
              </li>
            </a>
            <a
              className="menu-list-item"
              href="https://www.linkedin.com/in/erika-jonell"
            >
              <li>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </li>
            </a>
          </ul>
        </ReactModal>
        <ReactModal
          className="mail-modal-content section"
          overlayClassName="mail-modal-overlay"
          isOpen={this.state.show_mail_modal}
          onRequestClose={this.handle_mail_modal_close}
        >
          <h2>Email</h2>
          <h3>erika DOT jonell AT gmail DOT com</h3>
        </ReactModal>
      </div>
    ) : (
      <div className="navbar">
        <ul className="nav">
          <li className="left" id="name">
            <p onClick={scroll_to_id("about-container")}>Erika Jonell</p>
          </li>
          <li className="left">
            <p onClick={scroll_to_id("project-container")}>Projects</p>
          </li>
          <li className="left">
            <p onClick={scroll_to_id("history-container")}>History</p>
          </li>
          <li className="right" onClick={this.handle_show_mail_modal}>
            <p className="menu">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </p>
          </li>
          <li className="right">
            <a href="https://github.com/xevrem">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="right">
            <a href="https://www.linkedin.com/in/erika-jonell">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <ReactModal
          className="mail-modal-content section"
          overlayClassName="mail-modal-overlay"
          isOpen={this.state.show_mail_modal}
          onRequestClose={this.handle_mail_modal_close}
        >
          <h2>Email</h2>
          <h3>erika DOT jonell AT gmail DOT com</h3>
        </ReactModal>
      </div>
    );
  }
}

function About({ skills }) {
  let skill_list = Object.entries(skills).map(([key, value], i) => {
    return (
      <p key={i}>
        <u>{key}</u>: {value}
      </p>
    );
  });

  return (
    <div id="about-container">
      <div className="header">
        <h2>About Erika</h2>
        <h3 className="self-title">Software Engineer</h3>
      </div>
      <hr className="my-hr" />
      <div className="about-grid">
        <div className="about-img">
          <img src="./images/me.jpg" alt="" id="avatar" />
        </div>
        <div className="about-text">{skill_list}</div>
      </div>
    </div>
  );
}

About.propTypes = {
  skills: PropTypes.object.isRequired,
};

const Project = (props) => {
  return (
    <div className="project-item">
      <div className="project-content">
        <a className="project-link" href={props.link} target="_blank">
          <img
            className="project-img"
            src={props.img}
            alt="a picture of the project"
          />
        </a>
        <h3 className="project-name">{props.name}</h3>
        <p className="project-text">{props.text}</p>
      </div>
    </div>
  );
};

const Projects = (props) => {
  let project_list = props.projects.map((proj, i) => {
    return (
      <Project
        key={i}
        link={proj.link}
        img={proj.img}
        name={proj.name}
        text={proj.text}
      />
    );
  });

  return (
    <div id="project-container">
      <div className="header">
        <h2>Past Projects</h2>
      </div>
      <hr className="my-hr" />
      <div className="project-grid">{project_list}</div>
    </div>
  );
};

function History(props) {
  let history_list = props.history.map((item, i) => {
    return (
      <li key={i} className="history-item">
        <h3>
          <u>{item.title}</u>
        </h3>
        <h4>
          <em>
            {item.entity} ( {item.dates} )
          </em>
        </h4>
        <p>{item.description}</p>
      </li>
    );
  });

  return (
    <div id="history-container">
      <div className="header">
        <h2>Work History</h2>
      </div>
      <hr className="my-hr" />
      <div className="history-block">
        <ul className="history-list">{history_list}</ul>
      </div>
    </div>
  );
}

History.propTypes = {
  history: PropTypes.array.isRequired,
};

function Section({ children }) {
  return <div className="section">{children}</div>;
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Section>
          <About skills={skill_data} />
        </Section>
        <Section>
          <Projects projects={project_data} />
        </Section>
        <Section>
          <History history={history_data} />
        </Section>
      </div>
    </div>
  );
}

export { App, Section, History, Project, About, Navbar };
