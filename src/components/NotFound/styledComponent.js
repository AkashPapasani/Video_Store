import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 84vw;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : ' #000000'};
`

export const NotFoundImg = styled.img`
  height: 55vh;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.theme === 'light' ? '#1e293b' : '#ffffff')};
`
export const NotFoundText = styled.p`
  color: ${props => (props.theme === 'light' ? '#383838' : '#ffffff')};
`
