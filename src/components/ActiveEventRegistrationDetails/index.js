import {Component} from 'react'

import './index.css'

const eventRegistrationStatus = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yet_to_register: 'YET_TO_REGISTER',
  registrations_closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  state = {
    eventStatus: eventRegistrationStatus.initial,
  }

  updateStatus = status => {
    if (status === 'REGISTERED') {
      this.setState({eventStatus: eventRegistrationStatus.registered})
    } else if (status === 'YET_TO_REGISTER') {
      this.setState({eventStatus: eventRegistrationStatus.yet_to_register})
    } else {
      this.setState({eventStatus: eventRegistrationStatus.registrations_closed})
    }
  }

  renderRegistered = () => {
    ;<div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt=" registered"
        className="success-image"
      />
      <p className="para">You have already registered for the event.</p>
    </div>
  }

  renderRegistrationClosed = () => {
    ;<div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="registrations_closed"
      />
      <h1 className="headings"> Registrations Are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen the registrations soon!</p>
    </div>
  }

  renderRegistrationYetToMake = () => {
    ;<div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt=" yet to register"
        className=" yet_to_register"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="reg-button">
        Register Here
      </button>
    </div>
  }

  render() {
    const status = this.props
    this.updateStatus(status)
    const {eventStatus} = this.state

    switch (eventStatus) {
      case eventRegistrationStatus.registered:
        return this.renderRegistered()

      case eventRegistrationStatus.yet_to_register:
        return this.renderRegistrationClosed()

      case eventRegistrationStatus.registrations_closed:
        return this.renderRegistrationYetToMake()

      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
