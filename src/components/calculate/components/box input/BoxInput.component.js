import {Component} from 'react'
import {connect} from 'react-redux'
import {setOperand_2, setOperator,toggleChange} from '../../../../redux/actions'
import {OperandButton} from './components/operand button/OperandButton.component'
import {OperatorButton} from './components/operator button/OperatorButton.component'
import styles from './BoxInput.module.css'

class BoxInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operand_2: '0',
    }
    this.keyUp = async (e) => {
      const key = e.target.textContent
      if (['*', '-', '+', '=', '/'].some(item => item == key)) {

        await this.props.setOperand_2(+this.state.operand_2)
        await this.props.setOperator(key)
        await this.props.toggleChange(true)

        this.setState({operand_2: '0'})
      }
      else if (typeof +key == 'number') {
        const operand = +(this.state.operand_2 + key)
        await this.setState({operand_2: operand})
      }
      console.log(this.state)
    }
  }

  render() {
    const topOperators = ['%', 'CE', 'C', '⌫', '1/x', 'x²', '²√x', '÷']
    const rightOperators = ['x', '-', '+', '=']
    const operands = [1, 2, 3, 4, 5, 6, 7, 8, 9, '+/-', 0, '.']
    return (
        <div id='box' className={styles.box}>
          <div id='top-operators' className={styles.top}>
            {topOperators.map((item) => (
                <OperatorButton onClick={this.keyUp} operator={item}/>
            ))}
          </div>
          <div id='operands' className={styles.operand}>
            {operands.map((item) => (
                <OperandButton onClick={this.keyUp} operand={item}/>
            ))}
          </div>
          <div id='right-operators' className={styles.right}>
            {rightOperators.map((item) => (
                <OperatorButton onClick={this.keyUp} operator={item}/>
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
    changeInput:state.changeInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setOperator: (value) => dispatch(setOperator(value)),
    setOperand_2: (value) => dispatch(setOperand_2(value)),
    toggleChange: value => dispatch(toggleChange(value))
  }
}

const ReduxBoxInput = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {}
)(BoxInput)

export {ReduxBoxInput as BoxInput}
