import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BoxInput } from './components/calculate/components/box input/BoxInput.component'
import {Calculating} from "./components/Calculating.component";
function APP() {
	console.log(store.getState())
	return (
		<div>
			<Provider store={store}>
				<Calculating/>
			</Provider>
		</div>
	)
}

export default APP
