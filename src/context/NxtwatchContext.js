import React from 'react'

const NxtWatchContext = React.createContext({
  theme: 'light',
  changeTheme: () => {},
  hideBanner: false,
  closeBanner: () => {},
  activeOption: '',
  getActiveOption: () => {},
  saveBtn: false,
  changeSaveBtn: () => {},
  savedVideosIdList: [],
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  addLikeId: () => {},
  addDislikeId: () => {},
})

export default NxtWatchContext
