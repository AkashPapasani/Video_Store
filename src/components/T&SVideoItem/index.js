import {formatDistanceToNowStrict} from 'date-fns'

import {Link} from 'react-router-dom'

import {
  VideoItemDesc,
  ChannelName,
  ViewsContainer,
  Views,
  VideoTitle,
  Thumbnail,
} from '../HomeVideoItem/styledComponent'

import NxtWatchContext from '../../context/NxtwatchContext'
import {TSVideoLiItem, TSVideoItemDescContainer} from './styledComponent'

const TSVideoItem = props => {
  const {details} = props

  const {id, publishedAt, title, viewCount, channel, thumbnailUrl} = details

  const {name} = channel

  const getDate = () => formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <Link className="linkItem" to={`/videos/${id}`}>
            <TSVideoLiItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TSVideoItemDescContainer>
                <VideoItemDesc theme={theme}>
                  <VideoTitle>{title}</VideoTitle>
                  <ChannelName>{name}</ChannelName>
                  <ViewsContainer>
                    <Views>{viewCount} views</Views>
                    <li>
                      <p>{getDate()} ago</p>
                    </li>
                  </ViewsContainer>
                </VideoItemDesc>
              </TSVideoItemDescContainer>
            </TSVideoLiItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TSVideoItem
