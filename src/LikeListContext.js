import React from 'react'

const LikeListContext = React.createContext({})

export const LikeListProvider = LikeListContext.Provider
export const LikeListConsumer = LikeListContext.Consumer
export default LikeListContext