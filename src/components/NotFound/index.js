import Header from '../Header'
import Sidebar from '../Sidebar'

import NxtWatchContext from '../../context/NxtwatchContext'

import {
  Content,
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './styledComponent'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value

      return (
        <>
          <Header />
          <Content>
            <Sidebar />
            <NotFoundContainer theme={theme}>
              <NotFoundImg
                src={
                  theme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading theme={theme}>Page Not Found</NotFoundHeading>
              <NotFoundText theme={theme}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </Content>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
