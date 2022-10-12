import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends React.Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    const { value } = e.target
    const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const result = regex.test(value)

    this.setState({ 
      email: value, 
      emailIsValid: result 
    })
  }

  handleFirstNameChange(e) {
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange(e) {
    this.setState({lastName: e.target.value})
  }

  handlePasswordChange(e) {
    const { value } = e.target

    this.setState({ 
      password: value,
      passwordIsValid: value.length > 5
    })
  }

  handleRememberMeChange(e) {
    this.setState({rememberMe: e.target.checked})
  }

  handleSubmit(e) {
    e.preventDefault()

    const { emailIsValid, passwordIsValid } = this.state

    this.setState({isSubmitted: emailIsValid && passwordIsValid})
  }

  render() {
    const { 
      emailIsValid, 
      passwordIsValid,
      isSubmitted,
      firstName
    } = this.state

    return (
      <div className='container mt-4 d-flex justify-content-center'>
        <div className='row'>

          <div className='mb-3 d-flex justify-content-center'>
            <h1>Login</h1>
          </div>

          {!isSubmitted ? (
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmFor="firstName" className="form-label">First name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="firstName"
                  onChange={this.handleFirstNameChange}
                />
              </div>

              <div className="mb-3">
                <label htmFor="lastName" className="form-label">Last name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="lastName"
                  onChange={this.handleLastNameChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                  type="email" 
                  className={`form-control ${emailIsValid ? "is-valid" : "is-invalid"}`}
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp"
                  onChange={this.handleEmailChange}
                />
              </div>

              <div className="mb-3">
                <label htmFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                  type="password" 
                  className={`form-control ${passwordIsValid ? "is-valid" : "is-invalid"}`}
                  id="exampleInputPassword1"
                  onChange={this.handlePasswordChange}
                />
              </div>

              <div className="mb-3 form-check">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="exampleCheck1"
                  onChange={this.handleRememberMeChange}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          ) : (
            <p className='text-success text-center pt-5 fs-1'>Bienvenue {firstName} !</p>
          )}

        </div>
      </div>
    )
  }
}

export default App
