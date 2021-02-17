import { useState, useEffect } from 'react'
import Input from '../components/Input'
import Button from '../components/Buttons'
import stl from '../css/Calculator.module.css'
import {
  symbolOperand,
  symbolOperator
} from '../data/btnSymbols'
import {
  removeLastChild,
  addOperator,
  addComma,
  makeKey,
  doMath
} from '../components/functions'

const Calculator = () => {
  const [displaySum, setDisplaySum] = useState('0')
  const [input, setInput] = useState('')
  const [isComma, setIsComma] = useState(false)
  const [current, setCurrent] = useState('0')
  const [next, setNext] = useState('0')

  const countDisplaySum = (str) => {
    const currentArr = input.match(/[\d][\d/.]{0,}/g) || []
    const operator = input.match(/[+\-*/]/g) || []

    if (currentArr?.length === 0 && currentArr[0]) {
      throw new Error('currentArr is empty')
    }
    const addValues = () => {
      let current = currentArr[currentArr.length - 2]
      let next = currentArr[currentArr.length - 1]
      current = current === undefined ? 0 : current
      next = next === undefined ? displaySum : next
      setCurrent(current)
      setNext(next)
      const sumNumber = doMath(next, current, operator[currentArr.length - 1])
      const sumString = sumNumber.toString()
      return (
        setDisplaySum(doMath(displaySum, sumString, operator[currentArr.length - 1]))
      )
    }
    console.table({ currentArr, operator, next, current })
    return addValues(operator)
  }

  useEffect(() => {
    countDisplaySum(input)
  }, [input])

  return (
    <div className={stl.calcContainer}>
      <Input one={input} two={displaySum} />
      <div className={stl.btnContainer + ' ' + stl.operands}>
        {symbolOperand.map((item, i) => {
          return (
            <Button
              value={item}
              key={makeKey(i)}
              style={stl.operandBtn}
              onClick={() => {
                return (
                  setInput(input + item)
                )
              }}
            />
          )
        })}
        <Button
          value=','
          key={makeKey(symbolOperand.length + 2)}
          style={stl.operandBtn}
          onClick={() => {
            return (
              addComma(input, setInput, isComma, setIsComma)
            )
          }}
        />
        <Button
          value='='
          key={makeKey(symbolOperand.length + 1)}
          style={stl.operandBtn}
          onClick={() => {
            return (
              setInput(displaySum),
              setDisplaySum(0)
            )
          }}
        />
      </div>
      <div className={stl.btnContainer + ' ' + stl.operators}>
        <Button
          value=' < '
          key={makeKey(symbolOperator.length + 1)}
          style={stl.operatorBtn}
          onClick={() => removeLastChild(input, setInput)}
        />
        {symbolOperator.map((item, i) => {
          return (
            <Button
              value={item}
              key={makeKey(i)}
              style={stl.operatorBtn}
              onClick={() => addOperator(input, setInput, item, setIsComma)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Calculator
