import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 280px;
  font-family: 'Roboto';
  margin-bottom: 20px;
  height: 40vh;
  margin-right: 20px;
`
export const Thumbnail = styled.img`
  width: 280px;
`
export const VideoItemDescContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  font-size: 15px;
`

export const ProfileImg = styled.img`
  height: 5vh;
  margin-right: 10px;
`

export const VideoItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${props => (props.theme === 'light' ? '#181818' : '#f1f5f9')};
`

export const VideoTitle = styled.p`
  margin-top: 1px;
  margin-bottom: 0px;
`

export const ViewsContainer = styled.ul`
  margin-top: 0px;
  list-style-type: disc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  font-size: 12px;
  color: #616e7c;
`

export const ChannelName = styled.p`
  color: #616e7c;
  margin-bottom: 0px;
`

export const Views = styled.p`
  margin-right: 18px;
`
