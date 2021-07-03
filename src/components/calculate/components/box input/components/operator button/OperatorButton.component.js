import { Component } from 'react'
import { connect } from 'react-redux'
import { setOperator } from '../../../../../../redux/actions'
import { store } from '../../../../../../redux/store'
class OperatorButton extends Component {
	state = {
		style: {
			backgroundColor: 'rgb(235, 235, 235)',
		},
	}
	handleClick = (e) => {
		const value = e.target.textContent
		this.props.setOperator(value)
		console.log(store.getState())
	}
	render() {
		return (
			<button style={this.state.style} onClick={this.handleClick}>
				{this.props.operator}
			</button>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setOperator: (value) => dispatch(setOperator(value)),
	}
}

const mapStateToProps = () => {}
const reduxOperatorsButton = connect(
	mapStateToProps,
	mapDispatchToProps
)(OperatorButton)

export { reduxOperatorsButton as OperatorButton }
