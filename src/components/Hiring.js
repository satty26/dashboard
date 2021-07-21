import data from "../data";
import { useState } from 'react';

function HiringForm() {

  
  const [index,setIndex] = useState(0);
  function nextPage() {
   console.log(index);
   setIndex(index => (index+1)%data.length);   
  }
  
  return (
    data.length===0?
    
    <div>
      <button onClick={nextPage}>Get Data!</button>
    </div>:
    <div>
      <div className="my-form">
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
            <input value={data[index].email} type="email" id="email" required />
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
            <input
              value={data[index].academicYear}
            />
          </div>
          <div className="form-field">
            <label className="label-text" for="cnum">
              Preference1
            </label>
            <input
              value={data[index].preference1}
            />
          </div>
          <div className="form-field">
            <label className="label-text" for="cnum">
            Preference2
            </label>
            <input
              value={data[index].preference2}
            />
          </div>
          <div className="form-field">
            <label className="label-text" for="cnum">
            Preference3
            </label>
            <input
              value={data[index].preference3}
            />
          </div>
          <div className="form-field">
            <label className="label-text" for="cnum">
            Message
            </label>
            <input
              value={data[index].message}
            />
          </div>
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
      <div className="footer">
        <h1>
          Page {index + 1}/{data.length}
        </h1>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </div>
  );
}

export default HiringForm;