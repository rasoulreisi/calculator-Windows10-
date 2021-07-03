function View(props) {
  const [operand_1, operator, operand_2, result] = props

  const format = (value) => value.toLocaleString()

  return (
      <>
        <p>{operand_1} {operator} {operand_2}</p>
        <h1>{result}</h1>
      </>
  )

}

export{View}