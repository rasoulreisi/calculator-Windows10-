import { ADD_OPERAND, ADD_ORERATOR } from "./types"

let initialState = {
  firstOperand: 0,
  secondOperand: 0,
  operator: '+'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPERAND:
      return {
        ...state,
        operand: action.payload.operand
      }
      case ADD_ORERATOR:
        return {
          ...state,
          operand: action.payload.operator
        }
        default : 
        return state
  }
}
