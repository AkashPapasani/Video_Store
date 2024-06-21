import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtwatchContext'

import {
  LoginPageContainer,
  LoginPageContent,
  LoginLogo,
  LoginFormContainer,
  Label,
  InputBar,
  LoginBtn,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    userInputVal: '',
    passwordInputVal: '',
    showSubmitErr: false,
    errorMsg: '',
    showPassword: false,
  }

  setCookie = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})

    const {history} = this.props

    history.replace('/')
  }

  onChangeGetUser = event => {
    this.setState({userInputVal: event.target.value})
  }

  onChangeGetPassword = event => {
    this.setState({passwordInputVal: event.target.value})
  }

  onChangeShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  LoginUser = async event => {
    event.preventDefault()

    const {userInputVal, passwordInputVal} = this.state

    const userDetails = {
      username: userInputVal,
      password: passwordInputVal,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)

    const data = await response.json()

    if (response.ok) {
      this.setCookie(data.jwt_token)
    } else {
      this.setState({showSubmitErr: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {
      showSubmitErr,
      errorMsg,
      userInputVal,
      passwordInputVal,
      showPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <LoginPageContainer theme={theme}>
              <LoginPageContent theme={theme}>
                <LoginLogo
                  src={
                    theme === 'light'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginFormContainer theme={theme} onSubmit={this.LoginUser}>
                  <Label htmlFor="username" theme={theme}>
                    USERNAME
                  </Label>
                  <InputBar
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={userInputVal}
                    onChange={this.onChangeGetUser}
                    theme={theme}
                  />
                  <Label htmlFor="password" theme={theme}>
                    PASSWORD
                  </Label>
                  <InputBar
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="InputBar"
                    placeholder="Password"
                    value={passwordInputVal}
                    onChange={this.onChangeGetPassword}
                    theme={theme}
                  />
                  <div>
                    <input
                      type="checkbox"
                      id="1"
                      onChange={this.onChangeShowPassword}
                      value={showPassword}
                    />
                    <label htmlFor="1">Show password</label>
                  </div>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {showSubmitErr && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </LoginFormContainer>
              </LoginPageContent>
            </LoginPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
