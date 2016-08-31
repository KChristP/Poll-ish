import React from 'react';
import { Link, hashHistory } from 'react-router';
import HowItWorks from './how_it_works'


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
  	if (this.props.loggedIn){
  		hashHistory.push("/");
  	}
  }

  handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});//dispatches login or signup action depending on what is in the hashHistory
	}

  navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

  renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  render() {
		return (
      <div className="logged-out-overall-box box">
        <div className="login-form-box box">
          <form onSubmit={this.handleSubmit} className="login-form-itself">

            <br className="login-form-message"/>
            <h1>{ this.props.formType.replace(/\b\w/g, l => l.toUpperCase()) }</h1> or { this.navLink() }
            { this.renderErrors() }
            <div className="login-form-inputs-box box">
              <br />
              <label className="login-form-label"> Email:
              </label>
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input" />
              <label className="login-form-label"> Password:
              </label>
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
              <input type="submit" value="Submit" className="login-submit"/>
            </div>
          </form>

        </div>
        <HowItWorks />

      </div>
		);
	}
}

export default SessionForm;
