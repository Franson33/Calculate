import stl from '../css/Calculator.module.css'

const Button = ({ value, style, onClick }) => (
  <button
    className={stl.calcBtn + ' ' + `${style}`}
    type='button'
    onClick={onClick}
  >
    <p className={stl.btnTxt}>{value}</p>
  </button>
)

export default Button
