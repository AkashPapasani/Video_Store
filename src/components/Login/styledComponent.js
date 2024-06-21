import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props =>
    props.theme === 'light' ? '#f8fafc' : '#181818'};
`

export const LoginPageContent = styled.div`
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
  padding: 15px;
  border-radius: 5px;
  width: 27vw;
  height: 54vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const LoginLogo = styled.img`
  height: 6vh;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 23vw;
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
`

export const Label = styled.label`
  color: ${props => (props.theme === 'light' ? '#475569' : '#f9f9f9')};
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const InputBar = styled.input`
  padding: 10px;
  outline: none;
  border-radius: 5px;
  margin-bottom: 20px;
  border-width: 1px;
  background-color: transparent;
  border-color: ${props => (props.theme === 'light' ? ' #cbd5e1' : '#1e293b')};
  border-style: solid;
  color: ${props => (props.theme === 'light' ? '#181818' : '#f9f9f9')};
`

export const LoginBtn = styled.button`
  border-width: 0px;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  margin-top: 0px;
  font-size: 11px;
  color: #ff0000;
`
