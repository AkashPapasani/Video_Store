import {Component} from 'react'

import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import {Content, FailureContainer, FailureImg} from '../Home/styledComponent'
import Sidebar from '../Sidebar'

import {
  TrendingContainer,
  Banner,
  Icon,
  TSVideosContainer,
} from '../Trending/styledComponents'

import NxtWatchContext from '../../context/NxtwatchContext'

import TSVideoItem from '../T&SVideoItem'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme, savedVideosList} = value

          return (
            <>
              <Header />
              <Content>
                <Sidebar />
                <TrendingContainer theme={theme} data-testid="savedVideos">
                  {savedVideosList.length > 0 ? (
                    <>
                      <Banner theme={theme} data-testid="banner">
                        <Icon theme={theme}>
                          <HiFire />
                        </Icon>
                        <h1>Saved Videos</h1>
                      </Banner>
                      <TSVideosContainer>
                        {savedVideosList.map(savedVideo => (
                          <TSVideoItem
                            details={savedVideo}
                            key={savedVideo.id}
                          />
                        ))}
                      </TSVideosContainer>
                    </>
                  ) : (
                    <FailureContainer theme={theme}>
                      <FailureImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <h1>No saved videos found</h1>
                      <p>You can save your videos while watching them</p>
                    </FailureContainer>
                  )}
                </TrendingContainer>
              </Content>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
