import {connect} from "react-redux";
import {useEffect ,useState} from "react"
import {setOperand_1, setOperator,toggleChange} from '../redux/actions'
import {BoxInput} from "./calculate/components/box input/BoxInput.component";
import {View} from "./calculate/components/view/View.component";


function Calculating(props) {
  const [operand , setOperand] = useState(null)
  const {operand_1, operator, operand_2} = props
  const calculate = (operand_1, operator, operand_2) => {
    console.log(props)
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
        return operand_1 / 100
      default:
        return operand_1
    }


  }
  const didmount = async () => {
    const result = await calculate(operand_1, operator, operand_2)
    console.log('result' ,result)
    await props.setOperand_1(result)
    await props.toggleChange(false)

    return result;


  }
  const result = calculate(operand_1, operator, operand_2)
  useEffect(() => {
  if(props.changeInput) {
    console.log(12)
    didmount()
    
  }

  }, [props.changeInput]);




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
    changeInput: state.changeInput,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setOperator: (value) => dispatch(setOperator(value)),
    setOperand_1: (value) => dispatch(setOperand_1(value)),
    toggleChange: (value) => dispatch(toggleChange(value))
  }
}

const ReduxCalculating = connect(mapStateToProps, mapDispatchToProps, null, {})(Calculating)

export {ReduxCalculating as Calculating}