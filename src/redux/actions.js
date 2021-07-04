import { SET_OPERAND_1, SET_OPERAND_2,SET_OPERATOR,SET_NUMBER } from "./types";

export const toggleChange = (data) => {
  return {
    type: SET_OPERAND_1,
    payload: {
      data
    }
  }
}



export const setOperand_1 = (operand_1) => {
  return {
    type: SET_OPERAND_1,
    payload: {
      operand_1
    }
  }
}

export const setOperand_2 = (operand_2) => {
  return {
    type: SET_OPERAND_2,
    payload: {
      operand_2
    }
  }
}

export const setOperator = (operator)=>{
  return {
    type: SET_OPERATOR,
    payload:{
      operator
    }
  }
}

export const setNumber=(number)=>{
  return {
    type: SET_NUMBER,
    payload:{
      number
    }
  }
}