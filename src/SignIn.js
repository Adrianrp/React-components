import React, {Component} from 'react';
import Header from './Header';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';
import { FormControlLabel } from 'material-ui/Form';
import SigninFailDialog from './Components/SigninFailDialog';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.loginItems = {
      correctEmail: 'a@a.dk',
      correctPassword: '12345'
    };
    this.state = {
      emailValue: '',
      passwordValue: '',
      isBoxChecked: true,
      errorEmailText: '',
      errorPasswordText: '',
      error: false,
      open: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({emailValue: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({passwordValue: event.target.value});
  }
  handleRequestClose() {
    return this.setState({
      open:false
    });
  }
  handleSubmit() {
    // TODO External call to an API or database
    const isEmailValid = (this.state.emailValue === this.loginItems.correctEmail);
    const isPasswordValid = (this.state.passwordValue === this.loginItems.correctPassword);

    if(isEmailValid && isPasswordValid) {
      // TODO signin - success redirect go to dashboard

       console.log('success!!');
    } else {
      // TODO show modal to try again
      this.toggleErrorMessages();
    }
  }

  toggleErrorMessages() {
    return this.setState({
      errorEmailText: 'Email required',
      errorPasswordText: 'Password required',
      error: true,
      open: true
    })
  }
  render() {
    const shouldFormBeDisabled =  (!(this.state.emailValue && this.state.passwordValue));

    return (
      <div>
        <Header/>
        <form className="SignIn-container" noValidate autoComplete="off">
          <TextField
            required
            error={this.state.error}
            fullWidth={true}
            type="email"
            value={this.state.emailValue}
            autoFocus
            label="Email"

            onChange={this.handleEmailChange}
            margin="normal"
          />
          <br/>
          <TextField
            required
            type="password"
            label="Password"
            error={this.state.error}
            value={this.state.passwordValue}
            fullWidth={true}
            onChange={this.handlePasswordChange}
            margin="normal"
          />
          <div className="form-controls">
            <div className="form__item">
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.isBoxChecked}
                    onChange={(event, checked) => this.setState({ isBoxChecked: checked })}
                  />
                }
                label="Remember me"
              />
            </div>
            <div className="form__item">
              <Button
                raised
                label="LOGIN"
                color="primary"
                disabled={shouldFormBeDisabled}
                onClick={this.handleSubmit}
              >LOGIN</Button>
            </div>
            <div className="form__link">
              <a href="">Request Access</a>
            </div>
            <div className="form__link">
              <a href="">Forgot Password?</a>
            </div>
          </div>
          <div className="Signin__asset">
            <img src="https://placeimg.com/150/70/animals/grayscale" alt="logo"/>
          </div>
          <footer>
            <p>By logging in you agree to our<br/> <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a>
            </p>
          </footer>
          <SigninFailDialog isOpen={this.state.open} handleClose={this.handleRequestClose.bind(this)}/>
        </form>
      </div>

    )
  }

};

export default  SignIn;