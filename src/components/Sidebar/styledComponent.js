import styled from 'styled-components'

export const SidebarContainer = styled.nav`
  width: 20vw;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 90vh;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
`

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  padding: 0px;
`

export const OptionList = styled.li`
  color: ${props => (props.theme === 'light' ? '' : '#ffffff')};
`

export const Option = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
  font-size: 20px;
  width: 19vw;
  background-color: ${({theme, isActive}) => {
    if (theme === 'light') {
      return isActive ? '#d7dfe9' : ''
    }

    return isActive ? '#383838' : ''
  }};
  color: ${props => (props.isActive ? '#ff0000' : '')};
`

export const OptionText = styled.p`
  margin-left: 20px;
  font-size: 15px;
  font-weight: ${props => (props.isActive ? 'bold' : '')};
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`

export const SocialMediaLogo = styled.img`
  height: 5vh;
  margin-right: 10px;
`

export const ContactUsDesc = styled.p`
  font-weight: bold;
  font-size: 15px;
`
