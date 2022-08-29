import {Component} from 'react'

import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="container">
        <div className="appointment-container">
          <div className="add-appointment">
            <h1 className="heading">Add Appointment</h1>
            <form className="form">
              <div>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input type="text" className="input" />
              </div>
              <div>
                <label className="label" htmlFor="date">
                  DATE
                </label>
                <input type="date" className="input" />
              </div>
              <button type="button" className="button">
                ADD
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
            className="image"
          />
        </div>
        <hr className="hr-line" />
      </div>
    )
  }
}

export default Appointments
