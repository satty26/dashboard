import data from "../data";
import { useState } from "react";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function HiringForm() {
  const [index, setIndex] = useState(0);
  function nextPage() {
    console.log(index);
    setIndex((index) => (index + 1) % data.length);
  }
  function previousPage() {
    console.log(index);
    setIndex((index) => Math.abs(index - 1) % data.length);
  }
  return data.length === 0 ? (
    <div className="starting-div">
      <div className="get-started">
        <h1 className="get-started-head">
          E-Cell IIIT Pune Recruitment Responses
        </h1>
        <Button onClick={nextPage} className="get-started-btn">
          Get Started!
        </Button>
      </div>
    </div>
  ) : (
    <div>
      <div className="my-form">
        <div className="header">
          <Button onClick={() => previousPage()} className="prev-btn">
            &#60;
          </Button>
          <p class="page-count">
            {index + 1}/{data.length}
          </p>
          <Button onClick={() => nextPage()} className="next-btn">
            &#62;
          </Button>
        </div>
        <div className="main-form">
          <form>
            <div className="form-field">
              <label className="label-text" for="name">
                Name
              </label>
              <input
                value={data[index].name}
                type="text"
                id="name"
                size="40"
                required
              />
            </div>
            <div className="form-field">
              <label className="label-text" for="email">
                Email
              </label>
              <input
                value={data[index].email}
                type="email"
                id="email"
                required
              />
            </div>
            <div className="form-field">
              <label className="label-text" for="cnum">
                Contact Number
              </label>
              <input
                value={data[index].contactNumber}
                type="tel"
                id="cnum"
                required
              />
            </div>
            <div className="form-field">
              <label className="label-text" for="cnum">
                Academic Year
              </label>
              <input value={data[index].academicYear} />
            </div>
            <div className="form-field">
              <label className="label-text" for="cnum">
                Preference1
              </label>
              <input value={data[index].preference1} />
            </div>
            <div className="form-field">
              <label className="label-text" for="cnum">
                Preference2
              </label>
              <input value={data[index].preference2} />
            </div>
            <div className="form-field">
              <label className="label-text" for="cnum">
                Preference3
              </label>
              <input value={data[index].preference3} />
            </div>
            <div className="form-field">
              <label className="label-text" for="subject">
                Message
              </label>
              <textarea
                id="subject"
                name="subject"
                value={data[index].message}
              ></textarea>
            </div>
            <div className="form-field"></div>
            {/* <div className="form-field">
          <label className="label-text">Academic Year</label>
          <Options />
        </div>
        <PreferenceButton name="Preference 1" />
        <PreferenceButton name="Preference 2" />
        <PreferenceButton name="Preference 3" />

        <div className="form-field">
          <label className="label-text" for="subject">What will you bring on the table for E-Cell?</label>
          <textarea
            id="subject"
            name="subject"
          ></textarea>
        </div>

        <div className="final-button">
          <button className="submit-button" type="submit">
            Send My Application
          </button>
        </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default HiringForm;
