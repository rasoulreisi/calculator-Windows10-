import { Component } from 'react'
import { connect } from 'react-redux'
import { setOperator } from '../../../../../../redux/actions'
import { store } from '../../../../../../redux/store'
import styles from './OperatorButton.module.css'
class OperatorButton extends Component {
	handleClick = (e) => {
		const value = e.target.textContent
		this.props.setOperator(value)
		this.props.onClick(e)
		console.log(store.getState())
	}
	render() {
		return (
			<button className={styles.operator} onClick={this.handleClick}>
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
