import React from 'react'
import Statistiikka from './components/Statistiikka'

let palautteita = 0

class App extends React.Component {


  klik = (nappi) => () => {
    this.props.store.dispatch({ type: nappi })
    if (nappi === 'ZERO') {
      palautteita = 0
    } else {
      palautteita++
    }
  }
  render() {
    let store = this.props.store
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka store={store} palaute={palautteita} onClick={this.klik.bind(this)} />
      </div>
    )
  }
}
export default App