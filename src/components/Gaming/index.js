import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Header from '../Header'

import {Content, FailureContainer, FailureImg} from '../Home/styledComponent'

import Sidebar from '../Sidebar'

import NxtWatchContext from '../../context/NxtwatchContext'

import {Banner, Icon} from '../Trending/styledComponents'
import GameVideoItem from '../GameVideoItem'
import {GamingVideosContainer, GamingContainer} from './styledComponent'

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: '',
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: 'LOADING'})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = 'https://apis.ccbp.in/videos/gaming'

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const videosList = data.videos

      const updatedVideosList = videosList.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({apiStatus: 'SUCCESS', gamingVideos: updatedVideosList})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <>
              <Banner theme={theme} data-testid="banner">
                <Icon theme={theme}>
                  <HiFire />
                </Icon>
                <h1>Gaming</h1>
              </Banner>
              <GamingVideosContainer>
                {gamingVideos.map(gameVideo => (
                  <GameVideoItem details={gameVideo} key={gameVideo.id} />
                ))}
              </GamingVideosContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <FailureContainer theme={theme}>
            <FailureImg
              src={
                theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We are having some trouble to complete your request</p>
            <p>Please try again</p>
            <button
              type="button"
              className="RetryBtn"
              onClick={this.getGamingVideos}
            >
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return this.renderLoadingView()
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <>
              <Header />
              <Content>
                <Sidebar />
                <GamingContainer theme={theme} data-testid="gaming">
                  {this.renderApiStatus()}
                </GamingContainer>
              </Content>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
