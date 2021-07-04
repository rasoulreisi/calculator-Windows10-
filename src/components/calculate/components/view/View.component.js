import style from './View.module.css'


function View(props) {
  const {operand_1, operator, operand_2, result}= props

  const format = (value) => value.toLocaleString()

  return (
      <div className={style.container}>
        <p>{operand_1} {operator} {operand_2} = {result} </p>
        {/* <h1>{result}</h1> */}
      </div>
  )

}

export{View}