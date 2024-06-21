import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
  height: 10vh;
`

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13vw;
`

export const HeaderLogo = styled.img`
  height: 4vh;
  margin-left: 25px;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 7px;
  font-size: 25px;
`

export const ProfileImg = styled.img`
  height: 5vh;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid
    ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
  width: 90px;
  height: 30px;
  color: ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
  cursor: pointer;
  font-weight: bold;
`

export const LogoutBtnPopupContainer = styled.div`
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
  border-radius: 10px;
  width: 23vw;
  height: 23vh;
  text-align: center;
  padding: 10px;
  color: ${props => (props.theme === 'light' ? '#00306e' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
`

export const CancelBtn = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid #616e7c;
  padding: 5px;
  border-radius: 2px;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  color: #7e858e;
  font-weight: bold;
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: white;
  border: 0px;
  padding: 5px;
  border-radius: 2px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  font-weight: bold;
`
