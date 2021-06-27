import React from 'react'
import { Provider } from 'react-redux'
import {store} from './src/redux/store'

function APP() {
  return (
    <div>
      <Provider store={store}>

      </Provider>
    </div>
  )
}

export default APP
