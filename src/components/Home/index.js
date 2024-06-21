import {Component} from 'react'

import {IoIosSearch, IoMdClose} from 'react-icons/io'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import './index.css'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  Content,
  HomeContainer,
  SearchBar,
  SearchInputContainer,
  SearchBtn,
  NoSearchHeading,
  NoSearchText,
  FailureImg,
  FailureContainer,
  BannerContainer,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtwatchContext'

import HomeVideoItem from '../HomeVideoItem'

class Home extends Component {
  state = {
    apiStatus: '',
    searchInputVal: '',
    homeVideosData: [],
    search: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getSearchInput = event => {
    this.setState({searchInputVal: event.target.value})
  }

  getSearchText = () => {
    const {searchInputVal} = this.state
    this.setState(
      {search: searchInputVal, searchInputVal: ''},
      this.getHomeVideos,
    )
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: 'LOADING'})

    const {search} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${search}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

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

      this.setState({apiStatus: 'SUCCESS', homeVideosData: updatedVideosList})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderSearchInput = () => {
    const {searchInputVal} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <SearchInputContainer>
              <SearchBar
                type="search"
                placeholder="Search"
                value={searchInputVal}
                onChange={this.getSearchInput}
                theme={theme}
              />
              <SearchBtn
                type="button"
                data-testid="searchButton"
                onClick={this.getSearchText}
                theme={theme}
              >
                {' '}
                <IoIosSearch />
              </SearchBtn>
            </SearchInputContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderSuccessView = () => {
    const {homeVideosData} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          const videos =
            homeVideosData.length > 0 ? (
              <ul className="HomeVideosContainer">
                {homeVideosData.map(each => (
                  <HomeVideoItem details={each} key={each.id} />
                ))}
              </ul>
            ) : (
              <div className="NoSearchResultsContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                  className="NoSearchResultsImg"
                />
                <NoSearchHeading theme={theme}>
                  No Search results found
                </NoSearchHeading>
                <NoSearchText theme={theme}>
                  Try different key words or remove search filter
                </NoSearchText>
                <button
                  type="button"
                  className="RetryBtn"
                  onClick={this.getHomeVideos}
                >
                  Retry
                </button>
              </div>
            )

          return videos
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
              onClick={this.getHomeVideos}
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
          const {theme, hideBanner, closeBanner} = value

          return (
            <>
              <Header />
              <Content>
                <Sidebar />
                <HomeContainer theme={theme} data-testid="home">
                  {hideBanner ? (
                    ''
                  ) : (
                    <BannerContainer data-testid="banner">
                      <div className="BannerContent">
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                          className="banner-logo"
                        />
                        <p className="BannerPara">
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </p>
                        <button type="button" className="GetItNowBtn">
                          GET IT NOW
                        </button>
                      </div>
                      {/* eslint-disable-next-line */}
                      <button
                        type="button"
                        className="CloseBtn"
                        data-testid="close"
                        onClick={() => closeBanner()}
                      >
                        <IoMdClose />
                      </button>
                    </BannerContainer>
                  )}

                  <div className="HomePageContent">
                    {this.renderSearchInput()}
                    {this.renderApiStatus()}
                  </div>
                </HomeContainer>
              </Content>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
