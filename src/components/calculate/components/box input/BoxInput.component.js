import { Component } from 'react'
import { connect } from 'react-redux'
import { setOperand_2, setOperator } from '../../../../redux/actions'
import { OperandButton } from './components/operand button/OperandButton.component'
import { OperatorButton } from './components/operator button/OperatorButton.component'
import styles from './BoxInput.module.css'
class BoxInput extends Component {
	render() {
		const topOperators = ['%', 'CE', 'C', '⌫', '1/x', 'x²', '²√x', '÷']
		const rightOperators = ['x', '-', '+', '=']
		const operands = [1, 2, 3, 4, 5, 6, 7, 8, 9, '+/-', 0, '.']
		return (
			<div id='box' className={styles.box}>
				<div id='top-operators' className={styles.top}>
					{topOperators.map((item) => (
						<OperatorButton operator={item} />
					))}
				</div>
				<div id='operands' className={styles.operand}>
					{operands.map((item) => (
						<OperandButton operand={item}></OperandButton>
					))}
				</div>
				<div id='right-operators' className={styles.right}>
					{rightOperators.map((item) => (
						<OperatorButton operator={item} />
					))}
				</div>
			</div>
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
