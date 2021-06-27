import connect from "react-redux";
import {useEffect} from "react"

function Calculating(props) {
  const [operand_1, operator, operand_2] = props
  const result = calculate(props)
  const calculate = (operand_1, operator, operand_2) => {
    switch (operator) {
      case '+':
        return operand_1 + operand_2
      case '-':
        return operand_1 - operand_2
      case '/':
        return operand_1 / (operand_2 || 1)
      case '*':
        return operand_1 * operand_2
      case '^':
        return operand_1 ** operand_2
      case '=':
        return operand_1
      case '%':
        return operand_1 % operand_2
      default:
        return operand_1
    }
  }
  useEffect(() => {
    const didmount =  () => {
      const result = calculate(operand_1, operator, operand_2)
      props.setOperand_1(result)
      props.setOperator(operator)
    }
    didmount()
  }, []);


  return (
      <>
        <View operand_2={}>
          <H2>box Input</H2>
        </View>
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
    setOperator: (value) => dispatch(SetOperator(value)),
    setOperand_1: (value) => dispatch(SetOperand_1(value))
  }
}

const ReduxCalculating = connect(mapStateToProps, mapDispatchToProps, null, {})(Calculating)

export {ReduxCalculating as Calculating}