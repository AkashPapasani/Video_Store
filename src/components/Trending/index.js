import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import './index.css'

import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../../context/NxtwatchContext'

import {
  TrendingContainer,
  Banner,
  Icon,
  TSVideosContainer,
} from './styledComponents'

import Header from '../Header'
import {Content, FailureContainer, FailureImg} from '../Home/styledComponent'
import Sidebar from '../Sidebar'
import TSVideoItem from '../T&SVideoItem'

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: '',
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: 'LOADING'})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = 'https://apis.ccbp.in/videos/trending'

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const videosList = data.videos

      const updatedVideosList = videosList.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({apiStatus: 'SUCCESS', trendingVideos: updatedVideosList})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state

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
                <h1>Trending</h1>
              </Banner>
              <TSVideosContainer>
                {trendingVideos.map(trendingVideo => (
                  <TSVideoItem details={trendingVideo} key={trendingVideo.id} />
                ))}
              </TSVideosContainer>
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
              onClick={this.getTrendingVideos}
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
                <TrendingContainer theme={theme} data-testid="trending">
                  {this.renderApiStatus()}
                </TrendingContainer>
              </Content>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
