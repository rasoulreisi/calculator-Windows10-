import {Component} from 'react'
import {connect} from 'react-redux'
import {setOperand_2, setOperator} from "../redux/actions";


class BoxInput extends Component {

  state = {}

  render() {

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
    setOperand_2: (value) => dispatch(setOperand_2(value))
  }
}

const ReduxBoxInput = connect(mapStateToProps, mapDispatchToProps, null, {})(BoxInput)

export {ReduxBoxInput as BoxInput}