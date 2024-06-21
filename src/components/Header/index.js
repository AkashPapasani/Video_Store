import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {IoSunnyOutline} from 'react-icons/io5'

import Popup from 'reactjs-popup'

import {
  NavContainer,
  HeaderLogo,
  ThemeBtn,
  ProfileImg,
  LogoutBtn,
  ThemeContainer,
  LogoutBtnPopupContainer,
  CancelBtn,
  ConfirmBtn,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtwatchContext'

const style = {
  color: '#FFFFFf',
}

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme, changeTheme} = value

      const logout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <NavContainer theme={theme}>
    <Link to="/">
            <HeaderLogo
              src={
                theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <ThemeContainer>
            {/* eslint-disable-next-line */}
            <ThemeBtn
              type="button"
              onClick={() => changeTheme()}
              data-testid="theme"
            >
              {theme === 'light' ? (
                <FaMoon />
              ) : (
                <IoSunnyOutline style={style} />
              )}
            </ThemeBtn>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutBtn theme={theme} type="button">
                  Logout
                </LogoutBtn>
              }
            >
              {close => (
                <LogoutBtnPopupContainer theme={theme}>
                  <p>Are you sure, you want to logout</p>
                  <div>
                    <CancelBtn onClick={() => close()}>Cancel</CancelBtn>
                    <ConfirmBtn onClick={logout}>Confirm</ConfirmBtn>
                  </div>
                </LogoutBtnPopupContainer>
              )}
            </Popup>
          </ThemeContainer>
        </NavContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
