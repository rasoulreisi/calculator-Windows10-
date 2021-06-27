import { ADD_OPERAND, ADD_ORERATOR } from "./types";



export const addOperand = (operand) => {
  return {
    type: ADD_OPERAND,
    payload: {
      operand
    }
  }
}

export const addOperator = (operator) => {
  return {
    type: ADD_ORERATOR,
    payload: {
      operator
    }
  }
}