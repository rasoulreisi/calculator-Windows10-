import { SET_NUMBER, SET_OPERAND_1, SET_OPERAND_2, SET_OPERATOR,TOGGLE_CHANGE } from "./types"

let initialState = {
  operand_1: 0,
  operand_2: 0,
  operator: '+',
  number: 0,
  changeInput: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPERAND_1:
      return {
        ...state,
        operand_1: action.payload.operand_1
      }
    case SET_OPERAND_2:
      return {
        ...state,
        operand_2: action.payload.operand_2
      }
    case SET_OPERATOR:
      return {
        ...state,
        operator: action.payload.operator
      }
    case SET_NUMBER:
      return {
        ...state,
        number: action.payload.number
      }
    case TOGGLE_CHANGE:
      return {
        ...state,
        number: action.payload.number
      }
    default:
      return state
  }
}
