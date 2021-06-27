import { Component } from 'react'
import { connect } from 'react-redux'
import { setOperator } from '../redux/actions'
class OperatorsButton extends ({ Component }) {
	state = {
		style: {
			backgroundColor: 'rgb(235, 235, 235)',
		},
	}
	handleClick = (e) => {
		const value = e.target.value
		this.props.setOperator(value)
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
	mapDispathToProps
)(OperatorsButton)

export { reduxOperatorsButton as OperatorsButton }
