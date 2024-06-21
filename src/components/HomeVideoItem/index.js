import {formatDistanceToNowStrict} from 'date-fns'

import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtwatchContext'

import {
  VideoItem,
  VideoItemDescContainer,
  ProfileImg,
  VideoItemDesc,
  VideoTitle,
  ChannelName,
  ViewsContainer,
  Views,
  Thumbnail,
} from './styledComponent'

const HomeVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value

      const {details} = props

      const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = details

      const {name, profileImageUrl} = channel

      const getDate = () => formatDistanceToNowStrict(new Date(publishedAt))
      return (
        <Link className="linkItem" to={`/videos/${id}`}>
          <VideoItem>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoItemDescContainer>
              <ProfileImg src={profileImageUrl} alt="channel logo" />
              <VideoItemDesc theme={theme}>
                <VideoTitle>{title}</VideoTitle>
                <ChannelName>{name}</ChannelName>
                <ViewsContainer>
                  <Views>{viewCount} views</Views>
                  <li>
                    <p>{getDate(publishedAt)} ago</p>
                  </li>
                </ViewsContainer>
              </VideoItemDesc>
            </VideoItemDescContainer>
          </VideoItem>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoItem
