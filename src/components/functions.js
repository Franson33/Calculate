const clear = str => str.slice(0, -3)

export const removeLastChild = (str, action) => {
  return (
    str.endsWith(' ')
      ? action(clear(str))
      : action(str.slice(0, -1))
  )
}

export const addOperator = (str, action, add, comma) => {
  return (
    str.endsWith(' ')
      ? action(clear(str) + add)
      : (action(str + add),
        toggleIsComma(true, comma))
  )
}

export const addComma = (str, action, currentIsComma, setIsComma) => {
  return (
    str.match(/[\s+-/*]{0,}.[\d+-/*]{0,}/) && currentIsComma
      ? action(str)
      : (action(str + '.'),
        toggleIsComma(currentIsComma, setIsComma))
  )
}

const toggleIsComma = (comma, change) => comma ? change(false) : change(true)

export const makeKey = (i) => {
  const math = (j) => Math.floor(Math.random() * 1000000 * (50 - j))
  return math(i)
}

export const doMath = (item1, item2, operator) => {
  switch (operator) {
    case ('/'):
      return +item1 / +item2
    case ('*'):
      return +item1 * +item2
    case ('-'):
      return +item1 - +item2
    case ('+'):
      return +item1 + +item2
    default:
      return 0
  }
}
