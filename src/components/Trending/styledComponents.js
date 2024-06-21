import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80vw;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`

export const Banner = styled.div`
  width: 80vw;
  background-color: ${props =>
    props.theme === 'light' ? '#f1f1f1' : ' #0f0f0f'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
`
export const Icon = styled.div`
  background-color: ${props =>
    props.theme === 'light' ? '#cbd5e1' : '#000000'};
  font-size: 30px;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff0b37;
  padding: 25px;
  margin-right: 20px;
`
export const TSVideosContainer = styled.ul`
  list-style-type: none;
  padding: 20px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
