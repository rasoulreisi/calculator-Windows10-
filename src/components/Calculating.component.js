import {connect} from "react-redux";
import {useEffect} from "react"
import {setOperand_1, setOperator} from '../redux/actions'
import {BoxInput} from "./calculate/components/box input/BoxInput.component";
import {View} from "./calculate/components/view/View.component";


function Calculating(props) {
  const {operand_1, operator, operand_2} = props
  const calculate = (operand_1, operator, operand_2) => {
    console.log(props)
    let result;
    switch (operator) {
      case '+':
        result = operand_1 + operand_2
        break
      case '-':
        result = operand_1 - operand_2
        break
      case '/':
        return operand_1 / (operand_2 || 1)
      case '*':
        return operand_1 * operand_2
      case '^':
        return operand_1 ** operand_2
      case '=':
        return operand_1
      case '%':
        return operand_1 / 100
      default:
        return operand_1
    }
    props.setOperand_1(result || 0)
    props.setOperator(operator)

  }
  const didmount = () => {
    const result = calculate(operand_1, operator, operand_2)
    props.setOperand_1(result)
    props.setOperator(operator)
  }
  const result = calculate(operand_1, operator, operand_2)
  useEffect(() => {
    didmount()
  }, []);



  return (
      <>
        {/* <View result={result} operand_2={operand_2} operand_1={operand_1} operator={operator}/> */}
        <BoxInput/>
      </>
  )
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
    setOperand_1: (value) => dispatch(setOperand_1(value))
  }
}

const ReduxCalculating = connect(mapStateToProps, mapDispatchToProps, null, {})(Calculating)

export {ReduxCalculating as Calculating}