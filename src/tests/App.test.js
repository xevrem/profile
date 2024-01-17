/*
Copyright 2018-2024 Erika Jonell

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
import renderer from "react-test-renderer";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { App, Section, Navbar } from "components/App";
import ReactModal from "react-modal";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  //stub a div for react-modal to bind to
  let div = document.createElement("div");
  div.id = "root";
  document.body.append(div);

  it("is able to run tests", () => {
    expect(1 + 2).toEqual(3);
  });

  it("renders without crashing", () => {
    const app = renderer.create(<App />);
    let tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can render a Section", () => {
    const section = shallow(<Section>this is a test!</Section>);
    expect(section.find("div").props().className).toEqual("section");
  });

  it("navbar has one initial modal", () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.find(ReactModal).length).toEqual(1);
    expect(navbar.find(ReactModal).props().className).toEqual(
      "mail-modal-content section",
    );
  });

  it("navbar can have two modals", () => {
    const navbar = shallow(<Navbar />);
    navbar.setState({
      draw_menu: true,
    });
    expect(navbar.find(ReactModal).length).toEqual(2);
  });
});
