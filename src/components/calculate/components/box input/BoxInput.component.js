import { Component } from 'react'
import { connect } from 'react-redux'
import { setOperand_2, setOperator } from '../../../../redux/actions'
import { OperandButton } from './components/operand button/OperandButton.component'
import { OperatorButton } from './components/operator button/OperatorButton.component'

class BoxInput extends Component {
	state = {}

	render() {
		return (
			<>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
					<OperandButton operand={num}></OperandButton>
				))}
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		operand_1: state.operand_1,
		operand_2: state.operand_2,
		operator: state.operator,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setOperator: (value) => dispatch(setOperator(value)),
		setOperand_2: (value) => dispatch(setOperand_2(value)),
	}
}

const ReduxBoxInput = connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{}
)(BoxInput)

export { ReduxBoxInput as BoxInput }
