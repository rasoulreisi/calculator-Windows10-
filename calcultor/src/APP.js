import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BoxInput } from './components/BoxInput.component'
function APP() {
	console.log(store.getState())
	return (
		<div>
			<Provider store={store}>
				<BoxInput />
			</Provider>
		</div>
	)
}

export default APP
