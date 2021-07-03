import { Component } from 'react'
import { connect } from 'react-redux'
import { setNumber } from '../../../../../../redux/actions'
import { store } from '../../../../../../redux/store'
class OperandButton extends Component {
	state = {
		style: {
			backgroundColor: '#ffffff',
		},
	}
	handleClick = (e) => {
		const value = +e.target.textContent
		this.props.setNumber(value)
		console.log(store.getState())
		console.log(e.target.textContent)
	}
	render() {
		return (
			<button style={this.state.style} onClick={this.handleClick}>
				{this.props.operand}
			</button>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setNumber: (value) => dispatch(setNumber(value)),
	}
}

const mapStateToProps = () => {}
const reduxOperandsButton = connect(
	mapStateToProps,
	mapDispatchToProps
)(OperandButton)

export { reduxOperandsButton as OperandButton }
