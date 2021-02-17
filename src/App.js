import Calculator from './screens/Calculator'
import styles from './css/App.module.css'

function App () {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <p className={styles.headerLogo}>Calculate!</p>
      </div>
      <Calculator />
    </div>
  )
}

export default App
