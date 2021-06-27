import { Component } from 'react'
import { connect } from 'react-redux'
import { setNumber } from '../redux/actions'
class OperandsButton extends ({ Component }) {
	state = {
		style: {
			backgroundColor: '#ffffff',
		},
	}
	handleClick = (e) => {
		const value = e.target.value
		this.props.setNumber(value)
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
		setNumber: (value) => dispatch(setNumber(value)),
	}
}

const mapStateToProps = () => {}
const reduxOperandsButton = connect(
	mapStateToProps,
	mapDispathToProps
)(OperandsButton)

export { reduxOperandsButton as OperandsButton }
