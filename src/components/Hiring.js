import data from "../data";
import { useState } from "react";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function HiringForm() {

  const [index, setIndex] = useState(-1);
  // function delData(index){
  //   console.log(index);
  // }
  // function askForDel(index){
  //   var userInput = prompt("Enter YES if you wish to delete this record permanently");
  //   if(userInput === "YES"){
  //     delData(index);
  //   }
  // }
  function nextPage() {
    console.log(index);
    setIndex((index) => (index + 1) % data.length);
  }
  function previousPage() {
    console.log(index);
    if (index === 0) {
      setIndex((index) => data.length - 1);
    } else {
      setIndex((index) => (index - 1) % data.length);
    }
  }
  function startPage() {
    console.log(index);
    setIndex(0);
  }
  return data.length === 0 ? (
    <div className="starting-div">
      <div className="get-started">
        <h1 className="get-started-head">
          E-Cell IIIT Pune Recruitment Responses
        </h1>
        <Button onClick={startPage} className="get-started-btn">
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
                rows="8"
                columns = "50"
              ></textarea>
            </div>
          </form>
          <div className="form-field"></div>
        </div>
      </div>
    </div>
  );
}

export default HiringForm;
