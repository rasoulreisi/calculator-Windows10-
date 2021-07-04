function View(props) {
  const {operand_1, operator, operand_2, result, className}= props

  const format = (value) => value.toLocaleString()

  return (
      <div className={className}>
        <p>{operand_1} {operator} {operand_2}</p>
        <h1>{result}</h1>
      </div>
  )

}

export{View}