import stl from '../css/Calculator.module.css'

const Input = ({ one, two }) => (
  <div className={stl.inputWrapper}>
    <input
      className={stl.calcInput}
      type='text'
      readOnly
      value={one}
    />
    <input
      className={stl.calcInput + ' ' + stl.calcOutput}
      type='text'
      readOnly
      value={two}
    />
  </div>
)

export default Input
